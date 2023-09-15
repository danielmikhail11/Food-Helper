import React, {createContext, useContext, useEffect, useReducer} from "react";
import { foodReducer } from "../reducers/foodReducer";
import { startFetchCategories } from "../actions/foodActions";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: foodContext.js
// Description: to access and update the state
// First Written on:20 june 2023
// Edited on: 23 june 2023

const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryFoods: [],
    categoryFoodsLoading: false,
    categoryFoodsError: false,
    foods: [],
    foodsLoading: false,
    foodsError: false,
    food: [],
    foodLoading: false,
    foodError: false
}

const FoodContext = createContext({});
export const FoodProvider = ({children}) => {
    const [state, dispatch] = useReducer(foodReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch);
    }, []);

    return (
        <FoodContext.Provider value = {{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </FoodContext.Provider>
    )
}

export const useFoodContext = () => {
    return useContext(FoodContext);
}