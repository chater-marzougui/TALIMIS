from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Dict, Any, List

from langchain.chains.llm import LLMChain
from langchain.llms.base import BaseLLM
from langchain.output_parsers.regex import RegexParser
from langchain.prompts import PromptTemplate
from langchain.llms import HuggingFaceHub

from fastapi.middleware.cors import CORSMiddleware



# Define the prompt template
template = """You are a teacher preparing questions for a quiz. Given the following document, please generate 2 multiple-choice questions (MCQs) with 4 options each and a corresponding answer letter based on the document.

Example question:

Question: What is the capital of France?
CHOICE_A: Berlin  
CHOICE_B: Madrid  
CHOICE_C: Paris  
CHOICE_D: Rome  
Answer: C

These questions should be detailed and solely based on the information provided in the document.

<Begin Document>
{doc}
<End Document>
"""

# Define the output parser
output_parser = RegexParser(
    regex=(
        r"Question\s?\d?:\s+\n?(.*?)\n"
        r"CHOICE_A:(.*?)\n"
        r"CHOICE_B:(.*?)\n"
        r"CHOICE_C:(.*?)\n"
        r"CHOICE_D:(.*?)\n"
        r"Answer:\s?(.*)\n+"
        r"Question\s?\d?:\s+\n?(.*?)\n"
        r"CHOICE_A:(.*?)\n"
        r"CHOICE_B:(.*?)\n"
        r"CHOICE_C:(.*?)\n"
        r"CHOICE_D:(.*?)\n"
        r"Answer:\s?(.*)"
    ),
    output_keys=[
        "question1", "A_1", "B_1", "C_1", "D_1", "answer1",
        "question2", "A_2", "B_2", "C_2", "D_2", "answer2"
    ]
)

# Create the prompt template
PROMPT = PromptTemplate(
    input_variables=["doc"],
    template=template,
    output_parser=output_parser
)

# Define the QCMGenerateChain class
class QCMGenerateChain(LLMChain):
    @classmethod
    def from_llm(cls, llm: BaseLLM, **kwargs: Any) -> "QCMGenerateChain":
        return cls(llm=llm, prompt=PROMPT, **kwargs)

# Initialize FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust origins as necessary
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the LLM with HuggingFaceHub integration
llm = HuggingFaceHub(
    repo_id="HuggingFaceH4/zephyr-7b-beta",
    model_kwargs={"temperature": 0.7, "max_length": 512}
)

# Create the QCMGenerateChain
chain = QCMGenerateChain.from_llm(llm)

class DocumentInput(BaseModel):
    paragraph: str

# Utility function to parse generated quiz text robustly
def parse_quiz_data(quiz_text: str) -> List[Dict[str, Any]]:
    questions_data = []
    question_blocks = quiz_text.split('<End Document>')

    for block in question_blocks[1:]:  # Skip the first empty string
        lines = block.strip().split('\n')
        
        # Check if the expected lines are present
        if len(lines) < 8:
            continue  # Skip incomplete sections
        
        question_dict = {
            "question": lines[2].strip(),
            "answers": {
                "A": lines[3].strip(),
                "B": lines[4].strip(),
                "C": lines[5].strip(),
                "D": lines[6].strip()
            },
            "correct_answer": lines[7].strip()
        }

        # Ensure we have valid question and answer data
        if all(k in question_dict["answers"] for k in ["A", "B", "C", "D"]):
            questions_data.append(question_dict)

    return questions_data

@app.post("/generate-quiz/")
async def generate_quiz(data: DocumentInput):
    try:
        result = chain.invoke({"doc": data.paragraph})

        if 'text' not in result:
            raise ValueError("No text output received from LLM chain.")

        quiz_text = result['text']
        questions = parse_quiz_data(quiz_text)

        return JSONResponse(content={
            "status": "success",
            "quiz": {
                "document": data.paragraph,
                "questions": questions
            }
        })

    except ValueError as ve:
        print("Parsing Error:", ve)
        raise HTTPException(status_code=400, detail=str(ve))

    except KeyError as ke:
        print("Key Error:", ke)
        raise HTTPException(status_code=500, detail=f"Missing key in LLM response: {ke}")

    except Exception as e:
        print("Unexpected Error:", e)
        raise HTTPException(status_code=500, detail="Internal server error occurred")
