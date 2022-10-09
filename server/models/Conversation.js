const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema(
  {
    participants: {
      type: Array,
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Conversation", ConversationSchema);