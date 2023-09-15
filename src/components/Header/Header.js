import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Header.js
// Description: to shows the header
// First Written on: 14 june 2023
// Edited on: 16 june 2023

const Header = () => {
    return(
        <header className="header">
            <Navbar />
            <div className='header-content flex align-center justify-center flex-column text-center'>
                <SearchForm />
                <h1 className='text-white header-title ls-2'>What recipe do you want to look into?</h1>
                <p className='text-uppercase text-white my-3 ls-1'>seek it on your own</p>
            </div>
        </header>
    )
}
export default Header;