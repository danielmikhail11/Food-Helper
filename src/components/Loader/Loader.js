import React from "react";
import "./Loader.scss";
import { loader } from "../../utils/images";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Loader.js
// Description: to load image
// First Written on: 14 june 2023
// Edited on: 

const Loader = () => {
    return(
        <div className="loader my-5">
            <div className="container flex align-center justify-center">
                <img src= {loader} alt="" />

            </div>
        </div>
    )
}
export default Loader;