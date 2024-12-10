const Conversation  = require("../models/conversationModel.js" )
const User = require("../models/userModel.js");

// Controller function to create a conversation
const createConversation = async (req, res) => {
  const { user1Id, user2Id } = req.params; // Extract user IDs from parameters

  // Validate that both user IDs are provided
  if (!user1Id || !user2Id) {
    return res.status(400).json({ error: "Both user1Id and user2Id are required." });
  }

  try {
    // Find the users by their IDs
    const user1 = await User.findById(user1Id);
    const user2 = await User.findById(user2Id);

    // Check if both users exist
    if (!user1 || !user2) {
      return res.status(404).json({ error: "One or both users not found." });
    }

    // Check if a conversation between the two users already exists
    const existingConversation = await Conversation.findOne({
      $or: [
        { user1: user1Id, user2: user2Id },
        { user1: user2Id, user2: user1Id }, // Check both possible combinations
      ],
    });

    if (existingConversation) {
      return res.status(400).json({ error: "Conversation already exists." });
    }

    // Create a new conversation
    const conversation = new Conversation({
      user1: user1Id,
      user2: user2Id,
      messages: [], // Initialize messages as an empty array
    });

    // Save the conversation to the database
    const savedConversation = await conversation.save();

    // Respond with the created conversation
    res.status(201).json(savedConversation);
  } catch (error) {
    console.error("Error creating conversation:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}; 
const getConversation = async (req, res) => {
  const { user1Id } = req.params; // Extract the first user ID from the URL
  const { user2Id } = req.query; // Extract the second user ID from the query

  // Validate that at least the first user ID is provided
  if (!user1Id) {
    return res.status(400).json({ error: "user1Id is required." });
  }

  try {
    let conversations;

    // If user2Id is provided, find the specific conversation between user1Id and user2Id
    if (user2Id) {
      conversations = await Conversation.findOne({
        $or: [
          { user1: user1Id, user2: user2Id },
          { user1: user2Id, user2: user1Id }, // Check both possible combinations
        ],
      });

      // If no conversation is found, return a 404 error
      if (!conversations) {
        return res.status(404).json({ error: "Conversation not found." });
      }
    } else {
      // If user2Id is not provided, find all conversations where user1Id is involved
      conversations = await Conversation.find({
        $or: [{ user1: user1Id }, { user2: user1Id }],
      });

      // If no conversations are found, return an empty array
      if (!conversations.length) {
        return res.status(404).json({ message: "No conversations found for this user." });
      }
    }

    // Respond with the found conversation(s)
    res.status(200).json(conversations);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
const addMessageToConversation = async (req, res) => {
  const { user1Id, user2Id } = req.params; // Extract user IDs from parameters
  const { content } = req.body; // Extract the content of the message from the request body

  // Validate inputs
  if (!user1Id || !user2Id || !content) {
    return res.status(400).json({ error: "user1Id, user2Id, and content are required." });
  }

  try {
    // Find the conversation between the two users
    const conversation = await Conversation.findOne({
      $or: [
        { user1: user1Id, user2: user2Id },
        { user1: user2Id, user2: user1Id }, // Check both possible combinations
      ],
    });

    // If no conversation exists, return a 404 error
    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found." });
    }

    // Add the new message to the messages array
    const newMessage = {
      senderId: user1Id,
      content,
      timestamp: new Date(), // Add a timestamp to the message
    };
    conversation.messages.push(newMessage);

    // Save the updated conversation to the database
    const updatedConversation = await conversation.save();

    // Respond with the updated conversation
    res.status(200).json(updatedConversation);
  } catch (error) {
    console.error("Error adding message to conversation:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = { createConversation, getConversation, addMessageToConversation };
