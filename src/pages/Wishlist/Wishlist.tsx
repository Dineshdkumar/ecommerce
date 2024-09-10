// @ts-ignore

import React from "react";
import Meta from "../../components/Meta Data/Meta";

import "./Wishlist.css";
import { RootState } from "../../components/Product Store/store";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails } from "../../components/Type/MetaProps";
import { removeItem } from "../../components/Cart slice/cartSlice";
import EmptyPage from "../../components/Empty Page/EmptyPage";
const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (item: ProductDetails) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <Meta title={"Wishlist"}></Meta>

      <div className="wishlist-wrapper py-5">
        <div className="container-xxl">
          {wishlistItems.length == 0 ? (
            <EmptyPage />
          ) : (
            <div className="row ">
              <div
                className="col-12 d-flex flex-wrap justify-content-center"
                style={{ gap: "90px" }}
              >
                {wishlistItems.map((items: ProductDetails) => (
                  <div
                    className="wishlist-card col-3 position-relative"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src="Assests/cross.svg"
                      alt="cross"
                      className="img-fluid cross position-absolute"
                      onClick={() => handleRemove(items)}
                    />
                    <div className="wishlist-image">
                      <img src={items.image} alt="" />
                    </div>
                    <div className="wishlist-details py-3">
                      <h5 className="title">{items.title}</h5>
                      <h6 className="price">Rs: {items.price} /-</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
