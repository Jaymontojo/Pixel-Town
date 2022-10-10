import axios from 'axios';
import { useState, useEffect, useContext, useRef } from 'react';
import { io } from 'socket.io-client';
import './messenger.css';
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';
import { AuthContext } from '../../context/AuthContext';

export default function Messenger() {
  const { user } = useContext(AuthContext);

  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState("");
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io('ws://localhost:3000')
    socket.current.on('getMessage', (data) => {
      setIncomingMessage({
        sender: data.senderId,
        content: data.content,
        createdAt: Date.now()
      })
    })
  },[]);

  useEffect(() => {
    incomingMessage && 
      currentConversation?.participants.includes(incomingMessage.sender) && 
      setMessages(prev =>[...prev, incomingMessage])
  },[incomingMessage, currentConversation]);

  useEffect(() => {
    socket.current.emit('connectUser', user._id);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    })
  },[user]);

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
  },[currentConversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior : 'smooth', block: 'end'});
  },[messages])

  const handleSend = async (event) => {
    event.preventDefault();
    const message = {
      conversationId: currentConversation._id,
      senderId: user._id,
      content: newMessage
    };

    const receiverId = currentConversation.participants.find(participant => participant !== user._id);
    
    socket.current.emit('sendMessage', {
      senderId: user._id,
      receiverId: receiverId,
      content: newMessage
    })
    try {
      const res = await axios.post('/api/messages', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.error(err);
    }
  }

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
                    key={ conversation._id }
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
                <div ref={ scrollRef }>
                  {messages.map((message) => {
                    return <Message 
                      message={ message }
                      key={ message._id}
                      currentUser={ message.senderId === user._id}
                    />
                  })}
                </div>
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
