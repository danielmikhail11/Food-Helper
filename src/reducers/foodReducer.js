import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_SUCCESS,
    FETCH_FOODS_BEGIN,
    FETCH_FOODS_SUCCESS,
    FETCH_FOODS_ERROR,
    FETCH_SINGLE_FOOD_BEGIN,
    FETCH_SINGLE_FOOD_SUCCESS,
    FETCH_SINGLE_FOOD_ERROR,
    FETCH_CATEGORY_FOODS_BEGIN,
    FETCH_CATEGORY_FOODS_SUCCESS,
    FETCH_CATEGORY_FOODS_ERROR
} from "../actions/actions";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: foodReducer.js
// Description: to update the app that is related to the food data
// First Written on: 2 june 2023
// Edited on: 2 july 2023

export const foodReducer = (state, action) => {
    switch(action.type){
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                categoryLoading: true
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryLoading: false,
                categories: action.payload
            }
        case FETCH_CATEGORY_ERROR: 
            return {
                ...state,
                categoryLoading: false,
                categoryError: true
            }
        case FETCH_FOODS_BEGIN:
            return {
                ...state,
                foodsLoading: true
            }
        case FETCH_FOODS_SUCCESS:
            return {
                ...state,
                foodsLoading: false,
                foods: action.payload
            }
        case FETCH_FOODS_ERROR:
            return {
                ...state,
                foodsLoading: false,
                foodsError: true
            }
        case FETCH_SINGLE_FOOD_BEGIN:
            return {
                ...state,
                foodLoading: true
            }
        case FETCH_SINGLE_FOOD_SUCCESS:
            return {
                ...state,
                foodLoading: false,
                food: action.payload
            }
        case FETCH_SINGLE_FOOD_ERROR:
            return {
                ...state,
                foodLoading: false,
                foodError: true
            }
        case FETCH_CATEGORY_FOODS_BEGIN:
            return {
                ...state,
                categoryFoodsLoading: true
            }
        case FETCH_CATEGORY_FOODS_SUCCESS:
            return {
                ...state,
                categoryFoodsLoading: false,
                categoryFoods: action.payload
            }
        case FETCH_CATEGORY_FOODS_ERROR:
            return {
                ...state,
                categoryFoodsLoading: false,
                categoryFoodsError: false
            }
        default: 
            return state;
        }
    }