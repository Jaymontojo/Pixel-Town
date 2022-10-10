import './messenger.css'
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Messenger() {
  const { user } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchConversations = async () => {
      try{
        const res = await axios.get(`/api/conversations/${user._id}`);
        setConversations(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchConversations();
  }, [user._id]);
  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${currentConversation?._id}`);
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMessages();
  },[currentConversation])

  const handleSend = async (event) => {
    event.preventDefault();
    const message = {
      conversationId: currentConversation._id,
      senderId: user._id,
      content: newMessage
    }
    try {
      const res = await axios.post('/api/messages', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.error(err);
    }
  }

  //  if (!user._id) return navigate('/register');
  return (
    <div className='messenger'>
      <div className='chat-menu'>
        <div className='chat-menu-wrapper'>
          <input className='chat-menu-search' type='text' placeholder="Search Friends.." />
            {conversations.map((conversation) => {
              return (
                <div onClick = {() => {
                  setCurrentConversation(conversation)
                }}>
                  <Conversation 
                    conversation={ conversation }
                    currentUser={ user }
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className='chat-box'>
        <div className='chat-box-wrapper'>
          {currentConversation 
            ? <>
              <div className='chat-box-top'>
                {messages.map((message) => {
                  return <Message 
                    message={ message }
                    currentUser={ message.senderId === user._id}
                  />
                })}
              </div>
              <div className='chat-box-bottom'>
                <textarea 
                  className='chat-box-textarea'
                  placeholder='Type your message here...'
                  onChange={(event) => setNewMessage(event.target.value)}
                  value={ newMessage }
                ></textarea>
                <button 
                  className='chat-box-submit'
                  onClick={ handleSend }
                >Send</button>
              </div>
            </>
            : <span className='chat-null-span'>Open a conversation!</span>
          }
        </div>
      </div>
    </div>
  )
}
