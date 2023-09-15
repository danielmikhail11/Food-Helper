import React, {useState} from "react";
import './Login.scss';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Login.js
// Description: to login into the account
// First Written on: 4 july 2023
// Edited on: 19 july 2023


const supabaseUrl = 'https://quwznecsiavvcloionxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3puZWNzaWF2dmNsb2lvbnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzQ5MzEsImV4cCI6MjAwMzAxMDkzMX0.2L23lZ-9FsQ5XEQoCuTEzTN2OjqVfk5CUycTQ_FFe8M'
export const supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase);

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(null); 
      };
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setError(null); 
    };
    

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both email and password fields");
      return;
    }
    console.log(email, password)
    
    try {
      // Fetch user from Supabase based on the provided email
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .limit(1)
        .single();

      if (error) {
        console.error("Supabase error:", error);
        setError(error.message);
      } else if (users) {
        const user = users;
        // Compare the provided password with the stored password
        if (user.password === password) {
          console.log("Logged in user:", user);

          // Store user information in local storage
        localStorage.setItem("user", JSON.stringify(user));
          navigate("/"); 
        } 
        else 
        {
          setError("Invalid email or password");
        }
      } else 
      {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  
  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the registration page
  };
  
    return (
      <div className="screen">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            {error && <p className="error">{error}</p>}
            <br />
            <button type="submit">Login</button>
            <p className="p-login">
                Don't have an account? Click here to{" "}
                <Link className="p-login" to="/register" onClick={handleRegisterClick}>Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  };

export default Login;