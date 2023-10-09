import React from 'react'
import { Link } from 'react-router-dom'
import PriceRangeFilter from './PriceRangeFIlter'

const FilterNav = ({products, setFilteredProducts}) => {
 
    const applyPriceFilter = (minPrice, maxPrice) => {
      const filtered = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      )
      setFilteredProducts(filtered);
    };

    const toggleBurger = () => {
      const nav = document.querySelector(".filter");
      nav.classList.toggle("nav-open");
    };

  return (
  <>
  <div className="block hover:bg-slate-50 rounded lg:hidden  p-2 fixed w-fit cursor-pointer z-20" onClick={toggleBurger}>
        <div className="w-5 m-1 bg-white border border-black rounded-xl"></div>
        <div className="w-5 m-1 bg-white border border-black rounded-xl"></div>
        <div className="w-5 m-1 bg-white border border-black rounded-xl"></div>
      </div>
    <div className='filter p-4 bg-slate-300 w-screen h-fit lg:w-60 lg:h-screen'>
        <div className='flex lg:flex-col justify-center items-center w-screen lg:w-56'>
            <h1 className='text-center lg:block hidden text-3xl font-semibold'>Categories</h1>
            <div className='flex lg:flex-col flex-wrap bg-slate-200 rounded-xl px-2 justify-around mr-7 lg:mr-4 lg:h-72 mt-7 lg:text-xl  font-semibold '>
                <Link to="/" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>All</Link>
                <Link to="/laptops" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>Laptops</Link>
                <Link to="/smartphones" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>Smart Phones</Link>
                <Link to="/fragrances" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>Fragrances</Link>
                <Link to="/skincare" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>Skincare</Link>
                <Link to="/groceries" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>Groceries</Link>
                <Link to="/home-decoration" className='hover:bg-slate-50 hover:rounded-xl px-2 w-fit'>Home-decoration</Link>
            </div>
        </div>
        <div>
          <PriceRangeFilter applyFilter={applyPriceFilter} />
        </div>
    </div>
    </>)
}

export default FilterNav