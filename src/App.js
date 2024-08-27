import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import ProductDetails from './Component/Product Data/ProductDetails';
import Cart from './Component/Cart/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
