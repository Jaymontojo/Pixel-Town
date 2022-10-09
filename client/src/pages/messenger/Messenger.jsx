import './messenger.css'
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';

export default function messenger() {
  return (
    <div className='messenger'>
      <div className='chat-menu'>
        <div className='chat-menu-wrapper'>
          <input className='chat-menu-search' type='text' placeholder="Search Friends.." />
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
        </div>
      </div>
      <div className='chat-box'>
        <div className='chat-box-wrapper'>
          <div className='chat-box-top'>
            <Message currentUser={true}/>
            <Message currentUser={false}/>
          </div>
          <div className='chat-box-bottom'></div>
        </div>
      </div>
      <div className='chat-online'>
        <div className='chat-online-wrapper'></div>
      </div>
    </div>
  )
}
