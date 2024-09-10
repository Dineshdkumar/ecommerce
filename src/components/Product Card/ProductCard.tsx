// @ts-ignore
import React from "react";
import "./ProductCard.css";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
// import { ProductCardProps, ProductDetails } from "../Product Card";

import { useDispatch } from "react-redux";
import { addItem } from "../Cart slice/cartSlice";
import { ProductCardProps, ProductDetails } from "../Type/MetaProps";
import wishImg from "../../assets/wish.svg";
import viewIcon from "../../assets/view.svg";
import cartIcon from "../../assets/add-cart.svg";
import compareIcon from "../../assets/prodcompare.svg";

const ProductCard: React.FC<ProductCardProps> = ({ product, grid }) => {
  let location = useLocation();
  const { id, title, price, discount, brand, image, description } = product;

  const dispatch = useDispatch();
  function handleAddCart(item: ProductDetails) {
    dispatch(addItem(item));
  }

  const getLinkTo = () => {
    if (location.pathname == "/") {
      return `/product/${id}`;
    } else if (location.pathname == "/product") {
      return `/product/${id}`;
    } else if (location.pathname == "/product/") {
      return `/product/${id}`;
    } else {
      return `/product/${id}`;
    }
  };
  return (
    <>
      <div
        className={`${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to={getLinkTo()} className="product-card mt-3 position-relative">
          <Link
            to="/wishlist"
            className="wishlist-icon mb-3
            "
            onClick={() => handleAddCart(product)}
          >
            <img src={wishImg} alt="" />
            <span className="bg-dark  text-white hover-icons">
              Add to favourites
            </span>
          </Link>
          <div className="product-img">
            <img
              src={image}
              className="fluid-img"
              alt=""
              height="200px"
              width="200px"
            />
          </div>
          <div className="product-content">
            <h6
              className="brand mb-3 fs-6"
              style={{ textTransform: "uppercase" }}
            >
              {brand}
            </h6>
            <h5 className="product-title">{title}</h5>
            <ReactStars
              count={5}
              size={24}
              value={discount == null ? 3 : discount}
              edit={false}
              activeColor="#ffd700"
            />
            <p
              className={`description ${
                grid == 12 ? "d-block" : "d-none"
              } text-dark fs-7 mt-3`}
              style={{ lineHeight: "25px" }}
            >
              {description}
            </p>
            <p className="price">Rs:{price}/-</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link
                to="/compare-product"
                onClick={() => handleAddCart(product)}
                className="other-icons"
              >
                <img src={compareIcon} alt="" />
                <span className="action-bar-hover bg-dark text-white">
                  Compare Product
                </span>
              </Link>
              <Link to={`/product/${id}`} className="other-icons">
                <img src={viewIcon} alt="" />
                <span className="action-bar-hover bg-dark text-white">
                  View Product
                </span>
              </Link>
              <Link
                to="/cart"
                onClick={() => handleAddCart(product)}
                className="other-icons"
              >
                <img src={cartIcon} alt="" />
                <span className="action-bar-hover bg-dark text-white">
                  Add to Cart
                </span>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
