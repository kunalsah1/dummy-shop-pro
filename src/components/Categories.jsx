import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterNav from './FilterNav'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add } from '../store/cartSlice';
const Categories = (props) => {
    const[categories, setCategories]= useState([])

    const url = `https://dummyjson.com/products/category/${props.category}`
    const quantity = useSelector((state)=>state.cart) 
    const dispatch = useDispatch()

useEffect(()=>{
const getCategories = async()=>{
    try {       
        const response = await axios.get(url)
        setCategories(response.data.products)
        
    } catch (error) {
        console.log(error);
    }
} 

getCategories()
},[url])

const handleAddToCart = (item)=>{
    dispatch(add(item))
  }
  const title = (word)=>{
    const capName = word[0].toUpperCase()+word.slice(1).toLowerCase()
    return capName
  }

document.title =`${title(props.category)} - Totality - E-Commerce`
  return (
    <>
  <div className="">
    <div className="flex xl:justify-between ">
        <div className="absolute lg:fixed">
            <FilterNav/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:pl-80 mt-5 w-screen ">
            {categories.map((product)=>{
                const {title, thumbnail, price, rating, id}= product
                return(   
                    <div key={id} className="p-4 flex flex-col  items-center gap-4 bg-slate-200 rounded-xl   m-5 w-80">
                        <img src={thumbnail} alt={title} className=" rounded-xl w-72 h-52" />
                        <div className="w-72">
                        <h2 className="font-bold text-xl">{title}</h2>
                        <p>{rating}</p>
                        <h3 className="text-lg font-semibold">Price: ₹{price}</h3>
                        </div>
                        <button onClick={()=> handleAddToCart(product)}  className="bg-blue-500 text-lg w-60 rounded-2xl text-white font-bold hover:bg-blue-600">Add to Cart</button>
                    </div>
                )
            })}
        </div>
        <div className="relative w-20 mt-1">
          <Link to="/cart">
          <FiShoppingCart className="text-5xl fixed right-4 top-2 cursor-pointer" />
          </Link>
        <p className="fixed text-xl font-semibold  bg-slate-400 px-2 rounded-full">{quantity.cartItems.length}</p>
        </div>
    </div>
  </div>
  </>
  )
}

export default Categories