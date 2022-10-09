import './login.css';


export default function Login() {
  return (
    <div className='login'>
      <login className='login-wrapper'>
        <div className='login-left'>
          <h3 className='logo-title'>J-Chat</h3>
          <span className='logo-subtitle'>
          The only way to chat
          </span>
        </div>
        <div className='login-right'>
          <form className='login-form'>
            <input 
              type='email'
              className='login-input' 
              placeholder="email" 
              required
            />
            <input 
              type='password'
              className='login-input'
              placeholder="Password"
              required
            />
            <button type='submit' className='login-button'>Log In</button>
            <button className='login-register-button'>Create a New Account</button>
          </form>
        </div>
      </login>
    </div>
  )
}
