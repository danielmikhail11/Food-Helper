import React, { useState } from "react";
import "./Header.scss";
import {CgSearchLoading} from "react-icons/cg";
import { useFoodContext } from "../../context/foodContext";
import { useNavigate } from "react-router-dom";
import { startFetchFoodsBySearch } from "../../actions/foodActions";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: SearchZForm.js
// Description: to search
// First Written on: 20 june 2023
// Edited on: 5 july 2023

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const {dispatch, food} = useFoodContext();

    const handleSearchTerm = (e) => {
        
        e.preventDefault();
        if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
          setSearchTerm(e.target.value);
          setErrorMessage("");
        } else {
          setErrorMessage("Invalid search term ...");
        }
      }

      const handleSearchResult = (e) => {
        e.preventDefault();
        navigate("/");
        startFetchFoodsBySearch(dispatch, searchTerm);
      }


    return(
        <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
            <input type = "text" className='form-control-input text-dark-gray fs-15' placeholder='Look for your recipe here...'
            onChange={(e) => handleSearchTerm(e)} />
            <button type = "submit" className='form-submit-btn text-white text-uppercase fs-14'>
            <CgSearchLoading className='btn-icon' size = {21} />
            </button>
        </form>
    )
}
export default SearchForm;