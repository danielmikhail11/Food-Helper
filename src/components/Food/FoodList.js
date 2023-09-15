import React from "react";
import "./Food.scss";
import { Link } from "react-router-dom";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: FoodList.js
// Description:  to show the list of foods
// First Written on: 16 june 2023
// Edited on: 1 july 2023

const FoodList = ({foods}) => {
    console.log(foods)
    return(
        <div className='section-wrapper bg-white'>
            <div className='container '>
                <div className='sc-title '> List of foods </div>
                <section className='sc-food grid'>
                {
                    
                    foods?.map(foodItem => {
                        const{idMeal: id, strArea: area, strCategory: category, strMeal: food, strMealThumb: thumbnail } = foodItem;
                        
                        return(
                            <Link to={`/food/${id}`} className="food-itm align-center justify-center" key = {id}>
                                <div className="food-itm-img  ">
                                    <img src= {thumbnail} alt={food} />
                                    <div className="food-itm-cat bg-white text-black fw-6"> {category} </div>
                                </div>  

                                <div className='food-itm-body'>
                                    <div className='food-itm-body-info text-black flex flex-column'>
                                    <div className='area fs-14 ls-1 fw-5'>{area}</div>
                                    <div className='food fw-15 fw-7 op-09'>{food}</div>
                                    </div>
                                </div>
                            
                            </Link>
                        )
                    })
                }
                </section>
            </div>
        </div>
    )
}
export default FoodList;