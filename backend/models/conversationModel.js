const mongoose = require('mongoose');

const { Schema } = mongoose;

const ConversationSchema = new Schema({
  user1: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User1
  user2: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User2
  messages: [
    {
      senderId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Sender of the message
      content: { type: String, required: true }, // Message content
      timestamp: { type: Date, default: Date.now }, // Timestamp for when the message was sent
    },
  ],
  createdAt: { type: Date, default: Date.now }, // Timestamp for the conversation creation
});

const Conversation = mongoose.model("Conversation", ConversationSchema);


module.exports = Conversation;
