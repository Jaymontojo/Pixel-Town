import './register.css';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function Register() {
  const navigate = useNavigate();
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (password.current.value !== passwordConfirm.current.value) {
      password.current.setCustomValidity("Passwords didn't match! Please try again.");
      setIsProcessing(false);
    } else {
      const newUser = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        axios.post('api/auth/register', newUser);
        setIsProcessing(false);
        navigate('/login');
      } catch(err) {
        console.error(err);
      }
    };
  };

  return (
    <div className='register'>
      <div className='register-wrapper'>
        <div className='register-left'>
          <h3 className='logo-title'>J-Chat</h3>
          <span className='logo-subtitle'>
          The only way to chat
          </span>
        </div>
        <div className='register-right'>
          <form 
            className='register-form'
            onSubmit= { handleRegister }
          >
            <input 
              type='text'
              className='register-input'
              placeholder="Username"
              ref = { username }
              minLength='3'
              maxLength='20'
              required
            />
            <input 
              type='email'
              className='register-input'
              placeholder="Email"
              ref={ email }
              maxLength='50'
              required
            />
            <input 
              type='password'
              className='register-input'
              placeholder="Password"
              ref={ password }
              minLength='8'
              required
            />
            <input
              type='password'
              className='register-input'
              placeholder="Confirm Password"
              ref={ passwordConfirm }
              minLength='8'
              required
            />
            <button
              type='submit'
              className='register-button'
            >
              { isProcessing
                ? <CircularProgress 
                  style={{ 'color' : 'white' }} 
                  size="16px"/>
                : "Sign Up"
              }
            </button>
            <button
              className='register-login-button'
              onClick={() => {
                navigate('/login');
              }}
            >
              { isProcessing
                ? <CircularProgress 
                  style={{ 'color' : 'white' }} 
                  size="16px"/>
                : "Already Have an Account?"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
