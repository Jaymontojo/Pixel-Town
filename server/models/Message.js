const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String
    },
    senderId: {
      type: String
    },
    content: {
      type: String
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Message", MessageSchema);