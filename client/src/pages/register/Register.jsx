import './register.css';

export default function Register() {
  return (
    <div className='register'>
      <login className='register-wrapper'>
        <div className='register-left'>
          <h3 className='logo-title'>J-Chat</h3>
          <span className='logo-subtitle'>
          The only way to chat
          </span>
        </div>
        <div className='register-right'>
          <form className='register-form'>
            <input type='text' className='register-input' placeholder="Username" required/>
            <input type='email' className='register-input' placeholder="Email" required/>
            <input type='password' className='register-input' placeholder="Password" required/>
            <input type='password' className='register-input' placeholder="Confirm Password" required/>
            <button className='register-button'>Sign Up</button>
            <button className='register-login-button'>Already Have an Account?</button>
          </form>
        </div>
      </login>
    </div>
  )
}
