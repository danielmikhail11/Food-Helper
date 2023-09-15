import React from "react";
import "./HomePage.scss";
import { useFoodContext } from "../../context/foodContext";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import FoodList from "../../components/Food/FoodList";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: HomePage.js
// Description: to shows the home page
// First Written on:20 june 2023
// Edited on: 17 july 2023

const HomePage = () => {
    const {categories, foods, categoryLoading, foodsLoading} = useFoodContext();
   
    return(
        <main className="main-content">
            {(foodsLoading) ? <Loader /> : (foods === null) ? <NotFound /> : (foods?.length) ? <FoodList foods = {foods} /> : "" }
            {(categoryLoading) ? <Loader /> : <CategoryList categories = {categories} />}
        </main>
    )
}

export default HomePage;