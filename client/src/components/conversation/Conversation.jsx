import './conversation.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Conversation({ conversation, currentUser }) {
  const [friend, setFriend] = useState(null);
  
  useEffect(() => {
    const friendId = conversation.participants.find(participant => participant !== currentUser._id);
    console.log(currentUser)
    console.log(conversation.participants.find(participant => participant !== currentUser._id))
    const fetchUser = async () => {
      try {
        const res = await axios(`/api/users?userId=${friendId}`)
        setFriend(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, [currentUser, conversation]);

  return (
    <div className='conversation'>
      <img 
        className='conversation-img' 
        src={ friend.avatar } 
        alt='' />
      <span 
        className='conversation-name'
      >
        { friend.username }
      </span>
    </div>
  )
}
