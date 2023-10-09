import React, { useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const { total } = useSelector((store) => store.cart);
  const navigate = useNavigate();
const dispatch = useDispatch()
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    navigate("/");
    dispatch(clearCart())
  };

  return (
    <div className="p-4 flex flex-col items-center  h-screen ">
      <div className="absolute left-1">
        <BackButton />
      </div>

      <div className="my-10 flex flex-col items-center border-2 w-[50rem] border-green-500 h-[50rem]  justify-around rounded-xl shadow-2xl ">
        <div>
          <h1 className="text-3xl font-bold">Shipping Details</h1>
        </div>
        <div className="flex flex-col  h-80 justify-between ">
          <label htmlFor="name" className="text-xl font-semibold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="border-2 border-black rounded-lg w-72 p-1 font-semibold "
          />
          <label htmlFor="name" className="text-xl font-semibold">
            Mobile:
          </label>
          <input
            type="number"
            name="name"
            id="name"
            className="border-2 border-black rounded-lg p-1 font-semibold"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <label htmlFor="name" className="text-xl font-semibold">
            Email:
          </label>
          <input
            type="email"
            name="name"
            id="name"
            className="border-2 border-black rounded-lg p-1 font-semibold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name" className="text-xl font-semibold">
            Address:
          </label>
          <textarea
            type="text"
            rows={4}
            cols={15}
            name="name"
            id="name"
            className="border-2 border-black p-1 font-semibold rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mt-2"> 
          <h2 className="text-lg font-bold">Payment Details</h2>
          <div className="my-2">
            <div className="flex flex-col">
              <label>Card Number: </label>
              <input
                className="border-2 border-black rounded-lg w-58  font-semibold"
                type="number"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Card Holder:</label>
              <input
                className="border-2 border-black rounded-lg w-58  font-semibold"
                type="text"
                name="cardHolder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Expiration Date:</label>
              <input
                className="border-2 border-black rounded-lg w-58  font-semibold"
                type="string"
                name="expirationDate"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>CVV:</label>
              <input
                className="border-2 border-black rounded-lg w-58  font-semibold"
                type="number"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 w-1/3 rounded-xl text-white hover:bg-blue-600 text-xl my--2"
          onClick={handlePaymentSubmit}
        >
          Make Payment
        </button>
      </div>
      <div className="2xl:absolute right-10 p-4 top-10  flex flex-col">
        <h2 className="font-bold text-xl my-2">Total Cost: ₹{total.toFixed(2)}</h2>
        <h1 className="font-bold text-3xl">Your Shipping details</h1>
        <h2 className="font-bold text-xl mt-2">Name: {name}</h2>
        <h4 className="font-bold text-xl mt-1"> Mobile: {mobile}</h4>
        <h3 className="font-bold text-xl mt-1">Email: {email}</h3>
        <h5 className="font-bold text-xl mt-1 w-80">Address: {address}</h5>
      </div>
    </div>
  );
};

export default CheckOut;
