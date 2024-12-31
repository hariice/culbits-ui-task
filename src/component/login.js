import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle, FaTwitter } from 'react-icons/fa6';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <h1>Login</h1>
        </div>
        <div className='form-field'>
          <label>Email</label>
          <input
            type="email"
            placeholder='Enter the Email id'
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input 
            type="password" 
            placeholder='Enter the password'
            value={formData.password} 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          />
        </div>
        <div className='form-field'>
        <button type="submit">LOGIN</button>

        <p>Or Sign Up Using</p>
        <div className='sign-up'>

        <div className='facebook'><FaFacebookF /></div>
        <div className='twitter'><FaTwitter /></div>
        <div className='google'><FaGoogle /></div>
        </div>
        </div>
      </form>

      <img className='login-img' src='https://img.freepik.com/free-photo/beautiful-coquettish-girl-playing-with-her-hair-smiling-staring-selfassured-camera-making-gla_1258-125579.jpg?t=st=1735625148~exp=1735628748~hmac=24211340d20bd399c4ffb446d0095b139e364e1754e853b9da96370d978e4660&w=996' />
      <img className='mob-img' src='https://e0.pxfuel.com/wallpapers/627/82/desktop-wallpaper-punch-hole-s20-s20-s20-ultra-in-2020-samsung-galaxy-samsung-android-center-punch-hole.jpg' />



    </div>
  );
};

export default Login;
