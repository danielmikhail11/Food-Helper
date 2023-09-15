import React, {useState, useEffect} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {SlOptions} from "react-icons/sl";
import { useSidebarContext } from "../../context/sidebarContext";
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from "react-router-dom";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Navbar.js
// Description: to show the navbar content
// First Written on: 18 june 2023
// Edited on: 20 july 2023

const supabaseUrl = 'https://quwznecsiavvcloionxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3puZWNzaWF2dmNsb2lvbnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzQ5MzEsImV4cCI6MjAwMzAxMDkzMX0.2L23lZ-9FsQ5XEQoCuTEzTN2OjqVfk5CUycTQ_FFe8M'
export const supabase = createClient(supabaseUrl, supabaseKey)

const Navbar = () => {
    const {openSidebar} = useSidebarContext();
    const [scrolled, setScrolled] = useState(false);
    const [username, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [userRole, setUserRole] = useState("");
    const navigate = useNavigate();
    const [shouldReload, setShouldReload] = useState(false);


    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 60){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    
    const fetchUserName = async () => {
      const storedUsername = JSON.parse(localStorage.getItem('user'));
      console.log("Stored username:", storedUsername.username);
      if (storedUsername) {
        setUserName(storedUsername.username);
        setUserRole(storedUsername.user_type);
        setIsLoggedIn(true);
        console.log("User is logged in with stored username");
        return;
      } else{

        try {
            // Fetch the username from your Supabase table
            const { data, error } = await supabase
              .from("users")
              .select("username, user_type")
              .limit(1); // Add a LIMIT clause to fetch only one row
        
            if (error) {
              console.error("Error fetching username:", error);
            } else if (data && data.length > 0) {
              const { username, user_type } = data[0];
              setUserName(username);
              setUserRole(user_type);
              setIsLoggedIn(true);
              console.log("User is logged in with fetched username:", username);
            }
          } catch (error) {
            console.error("Error fetching username:", error);
          }
          }
        };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchUserName();
        console.log('test');
    } , [] )


    const handleLogout = async () => {
      localStorage.removeItem('username'); 
      setUserName(""); // Clear the username state
      setUserRole("");
      navigate("/login");
      setIsLoggedIn(false); 
      
    };


    const handleLogin = async () => {
      // Once the user is logged in, set the username and login status to true
      const username = " ";
      const user_type = " ";
      localStorage.setItem("username", username);
      setUserName(username);
      setUserRole(user_type);
      setIsLoggedIn(true);
      setShouldReload(true);
    };

    useEffect(() => {
      if (shouldReload) {
        console.log("Reloading the page...");
        window.location.reload();
      }
    }, [shouldReload]);


    console.log("isLoggedIn:", isLoggedIn);
    console.log("shouldReload:", shouldReload);

    return(
        //header 
        <nav className={`navbar bg-black flex align-center ${scrolled ? 'scrolled': ""}`}>
            <div className='container w-100'>
                <div className='navbar-content text-white'>
                    <div className='brand-and-toggler flex align-center justify-between'>
                        <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
                            <AiOutlineHome />
                            <span className='navbar-brand-text fw-7'>Food Helper</span>
                        </Link>

                        {userRole === "admin" && (
                          <button className='navbar-brand-text fw-7'>
                            <Link to="/adminshow" className="navbar-brand-text fw-7">Show Data</Link>
                          </button>
                        )}
                        
                        <button className='navbar-brand-text fw-7'> 
                            <Link to="/login" className="navbar-brand-text fw-7" >Login</Link>
                        </button>

                        <button className='navbar-brand-text fw-7'>  
                            <Link to="/donation" className="navbar-brand-text fw-7">Donation</Link>
                        </button>      

                         {isLoggedIn ? (
                          <button className='navbar-brand-text fw-7' onClick={handleLogout}>
                            <label>Welcome, {username}</label>
                          </button>
                        ) : (
                          <button className='navbar-brand-text fw-7' onClick={handleLogin}>
                            <label>User / Admin</label>
                          </button>
                        )}
                        

                        <div className='navbar-btns flex align-center'>
                    <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <SlOptions size = {27} />
              </button>
            </div>
          </div>
        </div>
      </div> 
        </nav>
    )
}
export default Navbar;