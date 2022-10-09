import './message.css';

export default function Message({ currentUser }) {
  return (
    <div className={ currentUser ? 'message currentUser' : 'message'}>
      <div className="message-top">
        <img src="" alt="" className="message-img" />
        <p className="message-text">ate mode 100644 client/src/pages/messenger/Messenger.jsx
 create mode 100644 client/src/pages/messenger/messenger.css
jaymontojo@Jays-Mac-mini chat-app % git cli</p>
      </div>
      <div className="message-bottom"> 1 hour ago</div>
    </div>
  )
}
