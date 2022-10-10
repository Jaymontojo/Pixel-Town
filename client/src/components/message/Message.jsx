import './message.css';
import { format } from 'timeago.js';

export default function Message({ message, currentUser }) {
  return (
    <div className={ currentUser ? 'message owned' : 'message'}>
      <div className="message-main-container">
        {/* <img src="" alt="" className="message-avatar" /> */}
        <p className="message-content">
          { message.content }
        </p>
      </div>
      <div className="message-timestamp" >
        { format(message.createdAt) }
      </div>
    </div>
  )
}
