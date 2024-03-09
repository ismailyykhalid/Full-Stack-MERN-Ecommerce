import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import NewsLetter from "./components/NewsLetter";
import men_banner from "../src/assets/banner_mens.png";
import women_banner from "../src/assets/banner_women.png";
import kid_banner from "../src/assets/banner_kids.png";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
        </Routes>
        <NewsLetter />
      </BrowserRouter>
    </>
  );
};

export default App;
