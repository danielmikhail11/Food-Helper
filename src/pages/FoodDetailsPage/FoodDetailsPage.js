import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import "./FoodDetailsPage.scss";
import CategoryList from '../../components/Category/CategoryList';
import FoodSingle from "../../components/Food/FoodSingle";
import { useFoodContext } from '../../context/foodContext';
import { startFetchSingleFood } from '../../actions/foodActions';
import Loader from '../../components/Loader/Loader';

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: FoodDetails.js
// Description: to shows the food details page
// First Written on: 20 june 2023
// Edited on:  12 july 2023

const FoodDetailsPage = () => {
  
    const {id} = useParams();
    const { categories, dispatch, food, categoryLoading, foodLoading} = useFoodContext();

    useEffect(() => {
        startFetchSingleFood(dispatch, id);
        console.log("show",food)
    }, [id]);

       let ingredientsArr = [], measuresArr = [], singleFood = {};
       if(food && food?.length > 0){
        for(let props in food[0]){
          if(props.includes('strIngredient')){
            if(food[0][props]) ingredientsArr.push(food[0][props]);
          }
    
          if(props.includes('strMeasure')){
            if(food[0][props]){
              if(food[0][props].length > 1){
                measuresArr.push(food[0][props]);
              }
            }
          }
        }

        singleFood = {
            id: food[0]?.idMeal,
            title: food[0]?.strMeal,
            category: food[0]?.strCategory,
            area: food[0]?.strArea,
            thumbnail: food[0]?.strMealThumb,
            instructions: food[0]?.strInstructions,
            source: food[0]?.strSource,
            tags: food[0]?.strTags,
            youtube: food[0]?.strYoutube,
            ingredients: ingredientsArr,
            measures: measuresArr
          }

          console.log("single",singleFood)
        }
    return(
      <main className='main-content bg-whitesmoke'>
      { foodLoading ? <Loader /> : <FoodSingle food = {singleFood} /> }
      { categoryLoading ? <Loader /> : <CategoryList categories={categories} /> }
    </main>
    )
}
export default FoodDetailsPage