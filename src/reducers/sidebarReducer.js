import{
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: sidebarReducer.js
// Description: to update the app that is related to the sidebar data
// First Written on: 1 june 2023
// Edited on: 2 july 2023

const sidebarReducer = (state, action) => {
    switch(action.type){
        case OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: true
            }
        case CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false
            }
        default: 
            return state;
    }
}

export default sidebarReducer;