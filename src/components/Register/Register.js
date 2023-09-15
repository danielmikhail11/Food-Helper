import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Register.scss';
import { createClient } from '@supabase/supabase-js'

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Register.js
// Description: to register the user
// First Written on: 3 july 2023
// Edited on: 14 july 2023



const supabaseUrl = 'https://quwznecsiavvcloionxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3puZWNzaWF2dmNsb2lvbnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzQ5MzEsImV4cCI6MjAwMzAxMDkzMX0.2L23lZ-9FsQ5XEQoCuTEzTN2OjqVfk5CUycTQ_FFe8M'
export const supabase = createClient(supabaseUrl, supabaseKey)

const Register = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false); // State for success message
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

    const handleSubmit = async(e) =>{
    e.preventDefault();
    if (username === '') {
      setUsernameError('Please fill in the username.');
      return;
    }
    
    if (email === '') {
      setEmailError('Please fill in the email.');
      return;
    }
    
    if (password === '') {
      setPasswordError('Please fill in the password.');
      return;
    }

    console.log('Submitting registration form...');

    if (password.length < 8) {
      setError("Password should be at least 8 characters long.");
      return;
    }

      try {
        console.log('Inserting user data...');
  
        const { data, error } = await supabase
          .from('users')
          .insert([{ email, username,password }]);
  
        if (error) {
          console.error('Error inserting user data:', error);
          return;
        }
  
        console.log('User data inserted into the "users" table:', data);
        setSuccess(true); 
        setShowSuccessMessage(true); 
        navigate('/login'); 
        
      } catch (error) {
        console.error('Error inserting user data:', error);
      }
    };

      const handleLoginClick = () => {
        navigate('/login');
      };

  return (
    <div className='screen'>
      <div className='register'>
        <h2>Register</h2>
        {showSuccessMessage ? (
          <p className="success">Registration successful! Please login into your account.</p>
        ) : (

        <form onSubmit={handleSubmit}>
          <div>

            <label>Username:</label>
            <input type="text" onChange={handleUsernameChange} />
            {usernameError && <p className="error">{usernameError}</p>}
          </div>
          
          <div>
            <label>Email:</label>
            <input type="email" onChange={handleEmailChange} />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          
          <div>
            <label>Password:</label>
            <input type="password" onChange={handlePasswordChange} />
            {passwordError && <p className="error">{passwordError}</p>}
            {error && <p className="error">{error}</p>}
          </div>
          <br />
          <button type="submit">Register</button>
        </form>
        
        )}
        <p className="p-login">
          Already have an account? Click here to{' '}
          <Link className="p-login" to="/login" onClick={handleLoginClick}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;