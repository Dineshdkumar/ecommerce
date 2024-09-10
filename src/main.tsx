// @ts-ignore
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Contact from "./pages/Contact/Contact";
import "./App.css";
import Blog from "./pages/Blogs/Blog";
import CompareProduct from "./pages/Compare Product/CompareProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Authentication Pages/Login";
import ForgotPassword from "./pages/Authentication Pages/ForgotPassword";
import Signout from "./pages/Authentication Pages/SignUp";

import Checkout from "./pages/Checkout/Checkout";
import ScrollToTop from "./components/Scroll to Top/ScrollToTop";
import Cart from "./pages/Cart/Cart";
import OurStore from "./pages/Our Store/OurStore";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/Single product/SingleProduct";
import { Provider } from "react-redux";
import store from "./components/Product Store/store";
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signout />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);
