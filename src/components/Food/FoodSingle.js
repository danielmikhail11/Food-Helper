import React from "react";
import "./Food.scss";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';
import Rate from "../Rate/Rate";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: FoodSingle.js
// Description: to show each food
// First Written on: 14 june 2023
// Edited on: 1 july 2023

const FoodSingle = ({food}) => {
  console.log(food);
  let tags = food?.tags?.split(',');
  console.log(food);
  let instructions = food?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);
  
    return(
      <div className='section-wrapper'>
      <div className='container'>
        <div className='breadcrumb bg-gray text-black'>
          <ul className='flex align-center my-2'>
            <li className='breadcrumb-item'>
              <Link to = "/" className='flex align-center'>
                <AiFillHome size = {22} />
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size = {23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span to = "" className='fs-15 fw-5 text-uppercase'>{food?.title}</span>
            </li>
          </ul>
        </div>

        <div className='sc-title'>Recipe Details</div>
        <section className='sc-details bg-white'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src = {food?.thumbnail} alt = "" className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-gray'>{food?.title}</h3>
              <div className='py-4'>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'> Category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{ food?.category }</span>
                </div>

                <div className='source flex align-center text-black'>
                  <span className='fw-7 source'>Source: &nbsp;</span>
                  <a href = {food.source}>
                    {food.source ? (food?.source).substring(0, 40) + "..." : "Not found" }
                  </a>
                </div>
              </div>

              <div className='tags flex align-start flex-wrap'>
                <h6 className='fs-16 text-black'>Tags:</h6>
                <ul className='flex align-center flex-wrap'>
                  {
                    tags?.map((tag, idx) => (<li key = {idx} className = "fs-14">{tag}</li>))
                  }
                </ul>
              </div>

              <div className='ingredients my-5 px-3 py-3'>
                <h6 className='fs-16 text-black'>Ingredients</h6>
                <ul className='grid'>
                  {
                    food?.ingredients?.map((ingredient, idx) => (
                      <li key = {idx} className = "flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='text-capitalize text-black fs-15'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'>
            <div className='measures my-4'>
              <h6 className='fs-16'>Measure:</h6>
              <ul className='grid'>
                {
                  food?.measures?.map((measure, idx) => (
                    <li key = {idx} className = "fs-14 flex align-end">
                      <span className='li-icon fs-12 text-gray'>
                        <FaUtensilSpoon />
                      </span>
                      <span className='li-text fs-15 fw-6 op-09'>{measure}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4'>
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key = {idx} className = "fs-14">
                      <AiOutlineCheckSquare size = {18} className = "text-orange li-icon" />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>

              {/* for rating */}
              <Rate />
              

            </div>
          </div>
        </section>
      </div>
    </div>

    
    )
}

export default FoodSingle;