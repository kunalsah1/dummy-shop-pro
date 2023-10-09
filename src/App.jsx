import "./App.css"
import Categories from "./components/Categories";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./store/Cart";
import { calculateTotal } from "./store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CheckOut from "./components/CheckOut";
function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Product />
              </>
            }
          />
          <Route
            path="/smartphones"
            element={
              <>
                <Categories category="smartphones" />
              </>
            }
          />
          <Route
            path="/laptops"
            element={
              <>
                <Categories category="laptops" />
              </>
            }
          />
          <Route
            path="/fragrances"
            element={
              <>
                <Categories category="fragrances" />
              </>
            }
          />
          <Route
            path="/skincare"
            element={
              <>
                <Categories category="skincare" />
              </>
            }
          />
          <Route
            path="/groceries"
            element={
              <>
                <Categories category="groceries" />
              </>
            }
          />
          <Route
            path="/home-decoration"
            element={
              <>
                <Categories category="home-decoration" />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart  />
              </>
            }
          />
          <Route
            path="/checkOut"
            element={
              <>
                <CheckOut  />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
