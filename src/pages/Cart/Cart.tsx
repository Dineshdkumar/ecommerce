// @ts-ignore
import React from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import Meta from "../../components/Meta Data/Meta";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../components/Product Store/store";
import { ProductDetails } from "../../components/Type/MetaProps";
import {
  addItem,
  decreaseQuantity,
  removeItem,
} from "../../components/Cart slice/cartSlice";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import EmptyPage from "../../components/Empty Page/EmptyPage";

// import { RootState } from "@reduxjs/toolkit/query";
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  function handleAdd(items: ProductDetails) {
    const updatedItems = {
      ...items,
      quantity: items.quantity + 1,
    };

    console.log("clicked");
    dispatch(addItem(updatedItems));
  }
  function handleRemove(items: ProductDetails) {
    dispatch(removeItem(items));
  }
  function decreaseQty(items: ProductDetails) {
    dispatch(decreaseQuantity(items));
  }
  // @ts-ignore
  function handleCheckout(items: ProductDetails[]) {
    cartItems.forEach((items) => {
      dispatch(addItem(items));
    });
  }

  return (
    <>
      <Meta title={"Cart"}></Meta>;
      <div className="cart-wrapper py-5">
        <div className="container-xxl">
          {cartItems.length == 0 ? (
            <EmptyPage />
          ) : (
            <div className="row justify-content-center w-100">
              <div className="col-12" style={{ width: "97%" }}>
                <div className="cart-header py-3 d-flex align-items-center justify-content-between">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                  <h4 className="cart-col-5"></h4>
                </div>
                {cartItems.map((item: ProductDetails) => (
                  <div
                    key={item.id}
                    className="cart-data py-3 mb-2 d-flex align-items-center justify-content-between"
                  >
                    <div
                      className="cart-col-1 d-flex align-items-center "
                      style={{ gap: "10px" }}
                    >
                      <div className="w-25">
                        <img
                          src={item.image}
                          alt={item.title}
                          height="140px"
                          width="140px"
                          className="img-fluid border rounded"
                        />
                      </div>
                      <div className="w-75 ">
                        <h5 className="title mb-2">{item.title}</h5>
                        <p className="mb-2">{item.color}</p>
                        <p className="">{item.model}</p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">Rs: {item.price} /-</h5>
                    </div>
                    <div className="cart-col-3">
                      <div className="d-flex" style={{ gap: "10px" }}>
                        <GrFormSubtract
                          size={30}
                          className="text-white badge bg-secondary border rounded-circle"
                          onClick={() => decreaseQty(item)}
                          style={{ cursor: "pointer" }}
                        />
                        <input
                          type="text"
                          min={1}
                          max={10}
                          value={item.quantity}
                          style={{
                            backgroundColor: "rgb(241, 240, 240)",
                            height: "5vh",
                            width: "4vw",
                            fontSize: "19px",
                            textAlign: "center",
                          }}
                        />
                        <GrFormAdd
                          size={30}
                          className="text-white badge bg-secondary border rounded-circle"
                          onClick={() => handleAdd(item)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="cart-col-3">
                      <h5 className="price">
                        Rs: {item.price * item.quantity} /-
                      </h5>
                    </div>
                    <div className="cart-col-5">
                      <AiFillDelete
                        size={40}
                        className="text-white badge bg-secondary border rounded-circle"
                        onClick={() => handleRemove(item)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-12 py-3 mt-5">
                <div
                  className="d-flex justify-content-between align-items-baseline"
                  style={{ gap: "30px" }}
                >
                  <Link
                    to="/product"
                    className="btn btn-secondary"
                    style={{
                      backgroundColor: "blueviolet",
                      borderRadius: "9px",
                    }}
                  >
                    Continue Shopping
                  </Link>
                  <div className="">
                    <h4>
                      Sub Total - Rs :&nbsp;
                      {cartItems
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                      /-
                    </h4>
                    <p>Taxes and Shipping Charges are calculated at checkout</p>
                    <Link
                      to="/checkout"
                      onClick={() => handleCheckout(cartItems)}
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: "blueviolet",
                        borderRadius: "9px",
                      }}
                    >
                      Check Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
