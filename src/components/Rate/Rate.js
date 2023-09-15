import React, { useState,useEffect } from "react";
import {FaStar} from 'react-icons/fa';
import "./Rate.scss"
import { createClient } from "@supabase/supabase-js";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Rate.js
// Description: to rate the food
// First Written on: 2 july 2023
// Edited on: 12 july 2023

const supabaseUrl = 'https://quwznecsiavvcloionxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3puZWNzaWF2dmNsb2lvbnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzQ5MzEsImV4cCI6MjAwMzAxMDkzMX0.2L23lZ-9FsQ5XEQoCuTEzTN2OjqVfk5CUycTQ_FFe8M'
export const supabase = createClient(supabaseUrl, supabaseKey)


const color = {
    orange: "#FFB600",
    gray: "#a9a9a9"
}

const styles= {
    container:{
        display:"flex",
        flexDirection:"column", 
        alignItems:"center",
    },
    textarea:{
        border: '1px solid #a9a9a9',
        borderRadius: 5,
        width:400,
        padding: 10,
        margin: "20px 0",
        padding: 10,
    },
    button:{
        border: '1px solid #a9a9a9',
        borderRadius: 5,
        width:300,
        padding: 10,
    },
}

const Rate = () => {

    const stars = Array(5).fill(0);
    const [currentValue,setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [feedback, setFeedback] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const user = JSON.parse(localStorage.getItem("user")); // Get the user information from local storage

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = value => {
        setHoverValue(value);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
    };

      const handleSubmit = async () => {
        if (currentValue === 0 && feedback === "") {
            // Display an error message or perform any other necessary action
            setErrorMessage("Please make a rate or provide feedback");
            return;
          }

        try {

            if (!user) {
                console.error("User not logged in");
                return;
              }

              const { data, error } = await supabase
                .from("users")
                .update({ rating: currentValue, feedback: feedback })
                .eq("id", user.id);
                    

          if (error) {
            console.error("Error inserting data:", error);
            return;
          }
    
          console.log("Data inserted successfully:", data);
    
          // Clear the form after successful submission
          setCurrentValue(0);
          setHoverValue(undefined);
          setFeedback("");
          setSuccessMessage(true);
          setErrorMessage(""); // Clear the error message if any

        } catch (error) {
          console.error("Error inserting data:", error);
        }
      };

    return(
        <div style= {styles.container}>
            <h2 className="h2"> Click the stars to rate </h2>
            <div className="stars">
                {stars.map((_, index) =>{
                    return(
                        <FaStar 
                            key={index}
                            size = {24}
                            style={{
                                marginRight:10,
                                cursor: "pointer",
                                color: (hoverValue || currentValue) > index ? color.orange : color.gray
                            }}
                            
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            
                            />
                    )
                })}
            </div>

            <textarea 
                placeholder="Do you have any feedback for the recipe?"
                style={styles.textarea}
                onChange={handleFeedbackChange}
            />
            <button className= "button" style={styles.button} onClick={handleSubmit}> 
                Submit 
            </button>
            
            {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
            {successMessage && <p>Rating and feedback submitted successfully!</p>}
            
        </div>
    )
}

export default Rate;