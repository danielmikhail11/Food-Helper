import React, {useEffect} from 'react';
import "./CategoryPage.scss";
import { useFoodContext } from '../../context/foodContext';
import FoodList from '../../components/Food/FoodList';
import { useParams } from 'react-router-dom';
import { startFetchFoodByCategory } from '../../actions/foodActions';

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: CategoryPage.js
// Description: to shows the category page
// First Written on: 20 june 2023
// Edited on: 2 july 2023

const CategoryPage = () => {
    const {name} = useParams();
    const { categoryFoods, dispatch, categories } = useFoodContext();
    let catDescription = "";
  
    if(categories){
      categories.forEach(category => {
        if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
      })
    }
  
    useEffect(() => {
      startFetchFoodByCategory(dispatch, name);
    }, [name, dispatch]);
  
    return (
      <main className='main-content py-5 bg-white'>
        <div className='container bg-white'>
          <div className='cat-description px-4 py-4'>
            <h2 className='fw-8'>{name}</h2>
            <p className='fs-18 op-07'>{catDescription}</p>
          </div>
        </div>
        {
          (categoryFoods?.length) ? <FoodList foods = { categoryFoods } /> : null
        }
      </main>
    )
  }
export default CategoryPage;