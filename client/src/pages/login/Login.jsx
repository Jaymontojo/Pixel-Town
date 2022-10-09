import './login.css';
import { useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function Login() {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const {user, isFetching, dispatch} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    loginCall({ 
      email: email.current.value,
      password: password.current.value
    }, dispatch)
  }

  if (user) return navigate('/');
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
          <form 
            className='login-form'
            onSubmit={ handleLogin }
          >
            <input 
              type='email'
              className='login-input' 
              placeholder="email"
              ref={ email }
              maxLength='50'
              required
            />
            <input 
              type='password'
              className='login-input'
              placeholder="Password"
              ref={ password }
              minLength='8'
              required
            />
            <button 
              type='submit'
              className='login-button'
              disabled={ isFetching }
            >
              {isFetching
                ? <CircularProgress 
                  style={{ 'color' : 'white' }} 
                  size='16px'/>
                : "Log In"
              }
            </button>
            <button 
              className='login-register-button'
              onClick={() => {
                navigate('/register');
              }}
              disabled={ isFetching }
            >
              { isFetching
                ? <CircularProgress 
                  style={{ 'color' : 'white' }} 
                  size="16px"/>
                : "Create a New Account"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
