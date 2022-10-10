import './message.css';
import { format } from 'timeago.js';

export default function Message({ message, currentUser }) {
  return (
    <div className={ currentUser ? 'message currentUser' : 'message'}>
      <div className="message-top">
        <img src="" alt="" className="message-img" />
        <p className="message-text">
          { message.content }
        </p>
      </div>
      <div className="message-bottom">
        { format(message.createdAt) }
      </div>
    </div>
  )
}
