import { useRef } from "react";
import './login.css';

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(email.current.value, password.current.value);
  }
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-left'>
          <h3 className='logo-title'>J-Chat</h3>
          <span className='logo-subtitle'>
          The only way to chat
          </span>
        </div>
        <div className='login-right'>
          <form className='login-form' onSubmit={ handleLogin }>
            <input 
              type='email'
              className='login-input' 
              placeholder="email"
              ref={ email }
              maxLength="50"
              required
            />
            <input 
              type='password'
              className='login-input'
              placeholder="Password"
              ref={ password }
              minLength="8"
              required
            />
            <button type='submit' className='login-button'>Log In</button>
            <button className='login-register-button'>Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
