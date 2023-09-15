import React from "react";
import "./Category.scss";
import { Link } from 'react-router-dom';

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: CategoryList
// Description: to show the list of categories
// First Written on: 12 june 2023
// Edited on: 10 july 2023

const CategoryList = ({categories}) => {
    return(
        <div className="section-wrapper bg-whitesmoke">
            <div className='container'>
                <div className='sc-title'>Categories</div>
                <section className='sc-category grid'>
                {   
                    
                    categories.map(category => {
                        const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;
                        return (
                        <Link to = {`/food/category/${title}`} className = "category-itm align-center justify-center" key = {id}>
                            <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                            <img src = {thumbnail} alt = {title} />
                            <div className='category-itm-title bg-black'>
                                <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
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
export default CategoryList;