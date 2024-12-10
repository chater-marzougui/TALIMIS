'use client'

import { useState } from 'react'

const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/google/pegasus-xsum"
const HUGGINGFACE_API_KEY = "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"

export default function TextSummarizer() {
  const [inputText, setInputText] = useState("")
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text to summarize!")
      return
    }

    setLoading(true)
    setSummary("")

    try {
      const response = await fetch(HUGGINGFACE_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: inputText,
          parameters: {
            max_length: 300,
            min_length: 150,
            length_penalty: 2.0,
            no_repeat_ngram_size: 3,
          },
        }),
      })

      const data = await response.json()

      if (data && data[0] && data[0].summary_text) {
        setSummary(data[0].summary_text)
      } else {
        setSummary("Failed to generate a summary. Please try again.")
      }
    } catch (error) {
      console.error("Error during summarization:", error)
      setSummary("Failed to generate summary. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">AI-Powered Text Summarizer</h2>
          <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            placeholder="Enter your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button 
            onClick={handleSubmit} 
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Summarizing
              </div>
            ) : (
              'Summarize'
            )}
          </button>
        </div>
      </div>

      {summary && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Generated Summary</h3>
            <p className="text-gray-700">{summary}</p>
          </div>
        </div>
      )}
    </div>
  )
}
