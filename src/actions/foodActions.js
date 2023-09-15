import axios from "../api/axios";
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_SUCCESS,
    FETCH_SINGLE_FOOD_BEGIN,
    FETCH_SINGLE_FOOD_SUCCESS,
    FETCH_SINGLE_FOOD_ERROR,
    FETCH_CATEGORY_FOODS_BEGIN,
    FETCH_CATEGORY_FOODS_SUCCESS,
    FETCH_CATEGORY_FOODS_ERROR,
    FETCH_FOODS_BEGIN,
    FETCH_FOODS_SUCCESS,
    FETCH_FOODS_ERROR
} from "./actions";

import { CATEGORIES_URL, FOOD_CATEGORIES_URL, FOOD_SINGLE_URL, SEARCH_URL } from "../utils/constants";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: foodActions.js
// Description: to import 
// First Written on: 12 june 2023
// Edited on: 12 june 2023

export const startFetchCategories = async(dispatch) => {
    
    try{
        dispatch({ type: FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`);
        dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories});
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message});
    }
}

export const startFetchSingleFood = async(dispatch, id) => {
    try{
        
        dispatch({ type: FETCH_SINGLE_FOOD_BEGIN});
        const response = await axios.get(`${FOOD_SINGLE_URL}${id}`);
        console.log("masuk sini harus nya 1 doang",response)
        dispatch({type: FETCH_SINGLE_FOOD_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({ type: FETCH_SINGLE_FOOD_ERROR, payload: error.message});
    }
}

export const startFetchFoodByCategory = async(dispatch, category) => {
    try{
        dispatch({type: FETCH_CATEGORY_FOODS_BEGIN});
        const response = await axios.get(`${FOOD_CATEGORIES_URL}${category}`);
        dispatch({type: FETCH_CATEGORY_FOODS_SUCCESS, payload: response.data.meals})
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_FOODS_ERROR, payload: error.message});
    }
}

export const startFetchFoodsBySearch = async(dispatch, searchTerm) => {
    try{
        dispatch({ type: FETCH_FOODS_BEGIN});
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
        dispatch({ type: FETCH_FOODS_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({type: FETCH_FOODS_ERROR, payload: error.message});
    }
}