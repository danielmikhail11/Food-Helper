import React from "react";
import "./Sidebar.scss";
import { useSidebarContext } from "../../context/sidebarContext";
import {ImCancelCircle} from "react-icons/im"
import { Link } from "react-router-dom";
import { useFoodContext } from "../../context/foodContext";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: Sidebar.js
// Description: to display a sidebar with the list of categories
// First Written on: 4 june 2023
// Edited on: 2 july 2023

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useSidebarContext();
    const {categories} = useFoodContext();
    
    return(
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <button type = "button" className='navbar-hide-btn ' onClick={() => closeSidebar()}>
                <ImCancelCircle className="color-black" size = {25} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>
                    {
                        categories.map(category => (
                            <li className='side-item' key={category.idCategory}>
                                <Link to = {`/food/category/${category.strCategory}`} className='side-link ls-1 fs-13'
                                 onClick={() => closeSidebar()}>
                                    {category.strCategory}
                                </Link>
                            </li>
                    ))
                    }
                </ul>
            </div>
        </nav>
    )
}
export default Sidebar;