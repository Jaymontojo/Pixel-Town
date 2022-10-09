const router = require('express').Router();
const Conversation = require('../models/Conversation');

router.post('/', async (req, res) => {
  const { senderId, receiverId} = req.body
  const newConversation = new Conversation({
    participants: [senderId, receiverId]
  });
  console.log(newConversation);
  try {
    const savedConversation = await newConversation.save();
    return res.status(200).json(savedConversation)

  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const conversations = await Conversation.find({
      members: { $in:[userId] }
    });
    if(!conversatons) return res.status(404).json("no conversations found");
    return res.status(200).json(conversations);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;