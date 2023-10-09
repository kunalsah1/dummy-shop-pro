import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterNav from "./FilterNav";
import {FiShoppingCart} from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../store/cartSlice";


const Product = () => {
  const [products, setProducts] = useState([]);

const quantity = useSelector((state)=>state.cart) 
const dispatch = useDispatch()

  const productUrl = "https://dummyjson.com/products";

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(productUrl);
        setProducts(response.data.products);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    getProduct();
  }, []);

const handleAddToCart = (item)=>{
  dispatch(add(item))
}

document.title = "Totality - E-Commerce"
  return ( 
  <>
  <div className="">
    <div className="flex xl:justify-between ">
        <div className="absolute lg:fixed">
            <FilterNav products={products} setFilteredProducts={setProducts} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:pl-80 mt-5 w-screen ">
            {products.map((product)=>{
                const {title, thumbnail, price, rating, id}= product
               
                return(   
                    <div key={id} className=" p-4 flex flex-col  items-center gap-4 bg-slate-200 rounded-xl   m-5 w-80">
                        <img src={thumbnail} alt={title} className=" rounded-xl w-72 h-52" />
                        <div className="w-72">
                        <h2 className="font-bold text-xl">{title}</h2>
                        <p className="text-lg font-semibold my-1">Rating: {rating}</p>
                        <h3 className="text-lg font-semibold">Price: ₹{price}</h3>
                        </div>
                        <button onClick={()=> handleAddToCart(product)} className="bg-blue-500 text-lg w-60 rounded-2xl text-white font-bold hover:bg-blue-600">Add to Cart</button>
                    </div>
                )
            })}
        </div>
        <div className="relative  w-14 lg:w-20 mt-1 inline-block h-fit">
          <Link to="/cart">
          <FiShoppingCart className="lg:text-5xl text-3xl fixed right-4 top-2 cursor-pointer" />
          </Link>
        <p className=" fixed lg:text-xl font-semibold text-lg px-2 bg-slate-400 lg:px-2 rounded-full">{quantity.cartItems.length}</p>
        </div>
    </div>
  </div>
  </>)
};

export default Product;
