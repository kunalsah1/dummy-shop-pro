import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { clearCart, increase, removeItem, decrease } from "./cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemAdded = useSelector((state) => state.cart);
  const { total } = useSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrease = (id) => {
    dispatch(increase({ id }));
  };
  const handleDecrease = (id) => {
    dispatch(decrease({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItemAdded.cartItems.length === 0) {
    return (
      <div className=" bg-red-400">
        <BackButton />
        <h1 className="text-5xl text-center">Your Cart</h1>
        <p className="text-2xl text-center my-3 text-slate-700">is Empty</p>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="bg-green-300 fixed w-screen px-5  top-0 right-0 left-0 z-10 ">
        <BackButton />
        <h1 className="text-center text-5xl p-2">Your Cart</h1>
      </div>
      <div className="flex mt-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:pl-72 w-screen pt-4 sm:p-4">
          {cartItemAdded.cartItems.map((product) => {
            const { title, thumbnail, price,  id, stock } = product;
            return (
              <div
                key={id}
                className="p-4 flex flex-col lg:items-center  gap-4 bg-slate-200 rounded-xl  m-5 w-52  xl:w-80 xl:h-fit border-2 border-red-400  box-content xl:box-border"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  className=" rounded-xl w-[7rem] h-28 xl:w-72 xl:h-52"
                />
                <div className="xl:w-72">
                  <h2 className="font-bold lg:text-xl">{title}</h2>
                  
                  <h3 className="text-lg font-semibold">Price: ₹{price}</h3>
                </div>
                <div className="flex ">
                  <p className="text-lg font-bold">Quantity:</p>
                  <button
                    disabled={stock <= 1}
                    onClick={() => handleDecrease(id)}
                    className="bg-red-400 mx-3 w-6 rounded text-xl font-bold cursor-pointer hover:bg-red-500"
                  >
                    -
                  </button>
                  <p className="text-xl font-bold">{stock}</p>
                  <button
                    disabled={stock >= 20}
                    onClick={() => handleIncrease(id)}
                    className="bg-slate-400 mx-3 w-6 rounded text-xl font-bold cursor-pointer hover:bg-slate-600"
                  >
                    +
                  </button>
                </div>
                
                <button
                  className="bg-red-500 text-lg lg:w-60 rounded-2xl text-white font-bold hover:bg-red-600"
                  onClick={() => handleRemove(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className=" p-2  relative w-28  sm:w-64   ">
          <button
            onClick={() => handleClearCart()}
            className="fixed bottom-0 right-0 bg-red-500 text-lg sm:w-52 w-24 rounded-xl text-white font-bold hover:bg-red-600 h-8 m-2"
          >
            Clear Cart
          </button>
          <p className="my-2 fixed top-28 text-center sm:text-xl">
            Total Items: {" "}
            <span className="sm:text-lg font-bold">{cartItemAdded.cartItems.length}</span>
          </p>
          <p className="my-6 fixed top-36 text-center sm:text-xl">
            Total Cost: {" "}
            <span className="sm:text-lg font-bold">₹{total.toFixed(2)}</span>
          </p>
          <Link to='/checkOut' className="fixed top-60 right-0 bg-green-400 text-lg w-24 sm:w-52 rounded-xl text-center text-white font-bold hover:bg-green-600 h-8 m-2">
            Proceed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
