import React from "react";
import "./NotFound.scss"

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: NotFound.js
// Description: shows when there is no recipe 
// First Written on: 14 june 2023
// Edited on: 14 june 2023

const NotFound = () => {
    return(
        <div className="not-found m-5 bg-whitesmoke">
            <div className="container flex align-center bg-whitesmoke justify-center">
                No recipe has been found.
            </div>
        </div>
    )
}
export default NotFound;