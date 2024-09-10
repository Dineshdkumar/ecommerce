// @ts-ignore
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../Product Store/store";
import { NavLink, Link } from "react-router-dom";
import CompareImg from "../../assets/compare.svg";
import cartImg from "../../assets/user.svg";
import userImg from "../../assets/wishlist.svg";

import wishlistImg from "../../assets/wishlist.svg";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <>
      <header className="header-top-strip py-2 px-5" id="header">
        <div className="header_container ">
          <div className="row m-0">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 & free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a href="tel:+91 6302944423" className="text-white">
                  {" "}
                  +91 6302944423
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-up py-2.7">
        <div className="header_container">
          <div className="row m-0 ">
            <div className="col-2">
              <h3 className="text-white">T-Cart</h3>
            </div>
            <div className="col-5">
              <div className="input-group mb-3" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search your product here..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5 ">
              <div className="header-up-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex gap-2">
                    <img src={CompareImg} alt="" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="d-flex gap-2">
                  <Link to="/wishlist" className="d-flex gap-2">
                    <img src={wishlistImg} />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="d-flex gap-2">
                  <Link to="login" className="d-flex gap-2">
                    <img src={userImg} alt="" />
                    <p>
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div className="d-flex gap-2">
                  <Link to="cart" className="d-flex gap-2">
                    <img src={cartImg} alt="" />
                    <div className="d-flex flex-column ">
                      <span
                        className="bg-white dark-theme  text-center border  rounded"
                        style={{ width: "30px" }}
                      >
                        {cartItems.length}
                      </span>
                      <p className="text-center" style={{ maxWidth: "3vw" }}>
                        {cartItems.reduce(
                          (total, item) => total + item.quantity * item.price,
                          0
                        )}
                        /-
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-down py-2">
        <div className="row m-0">
          <div className="col-12">
            <div
              className="d-flex menu-bottom mx-5 space-between align-items-center"
              style={{ gap: "35px" }}
            >
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ gap: "10px" }}
                >
                  <img src="/Assests/menu.svg" alt="" height="25px" />
                  <span className="me-5 d-inline-block">Show categories</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <Link className="dropdown-item active" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="menu-links ">
                <div
                  className="d-flex  align-items-center "
                  style={{ gap: "25px" }}
                >
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
