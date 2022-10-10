const router = require('express').Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { conversationId, senderId, content } = req.body
  const newMessage = new Message({
    conversationId: conversationId,
    senderId: senderId,
    content: content
  });
  try {
    const savedMessage = await newMessage.save();
    return res.status(200).json(savedMessage);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:conversationId', async (req, res) => {
  const { conversationId} = req.params;
  console.log(conversationId);
  try {
    const messages = await Message.find({
      conversationId: conversationId
    });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;