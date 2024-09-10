import React from "react";
import Meta from "../../components/Meta Data/Meta";

import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";
import { RootState } from "../../components/Product Store/store";

import { useSelector } from "react-redux";
import { ProductDetails } from "../../components/Type/MetaProps";
import "../Cart/Cart.css";
const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);
  return (
    <>
      <Meta title={"Cart"}></Meta>
      <div className="checkout-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">TPace</h3>
                <nav
                  style={
                    { "--bs-breadcrumb-divider": ">" } as React.CSSProperties
                  }
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="fs-5 text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active fs-5 "
                      aria-current="page"
                    >
                      {" "}
                      / &nbsp; Information
                    </li>
                    <li className="breadcrumb-item">
                      <a className="fs-5 text-dark" href="#">
                        / &nbsp; Shipping
                      </a>
                    </li>

                    <li
                      className="breadcrumb-item active fs-5"
                      aria-current="page"
                    >
                      / &nbsp; Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="tite">Contact information</h4>
                <p className="user-details">
                  Dinesh (dineshdkumar22@gmail.com){" "}
                </p>
                <h3>Shipping Address</h3>
                <form
                  action=""
                  className="d-flex flex-wrap justify-content-between"
                  style={{ gap: "15px" }}
                >
                  <div className="w-100 mb-3">
                    <select
                      name=""
                      aria-placeholder="Saved address"
                      className="form-control form-select "
                      id=""
                    >
                      <option value="" selected>
                        Select Country
                      </option>
                      <option value="India">India</option>
                    </select>
                  </div>
                  <div className="mb-3 flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control w-100"
                    />
                  </div>
                  <div className="mb-3 flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100 mb-3 ">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control w-100"
                    />
                  </div>
                  <div className="w-100 mb-3">
                    <input
                      type="text"
                      placeholder="Apartment,suite,etc  (optional)"
                      className="form-control w-100"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control w-100"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      aria-placeholder="Saved address"
                      className="form-control form-select "
                      id=""
                    >
                      <option value="" selected>
                        State
                      </option>
                      <option value="">Andhra Pradesh</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="form-control w-100"
                    />
                  </div>
                  <div className="w-100">
                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ gap: "7px" }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "7px" }}
                      >
                        <FaLessThan />
                        <Link to="/cart" className="text-dark fs-5">
                          Return to Cart
                        </Link>
                      </div>
                      <Link
                        to="/product "
                        className="btn btn-danger d-flex align-items-center"
                        style={{
                          borderRadius: "9px",
                          height: "9vh",
                        }}
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 mt-3">
              {cartItems.map((items: ProductDetails) => (
                <div key={items.id}>
                  <div className="border-bottom py-4 ">
                    <div className="d-flex align-items-base justify-content-between w-100">
                      <div className="w-25 position-relative border-bottom">
                        <span
                          className="badge bg rounded-circle text-dark position-absolute"
                          style={{
                            top: "-9px",
                            right: "15px",
                            width: "23px",
                            backgroundColor: "violet",
                          }}
                        >
                          {items.quantity}
                        </span>
                        <img
                          src={items.image}
                          className="img-fluid rounded border"
                          height="100px"
                          width="100px"
                          alt=""
                        />
                      </div>
                      <div className="w-50 mt-0">
                        <h5 className="title">{items.title}</h5>
                      </div>
                      <div className="w-25">
                        <h5 className="text-end " style={{ color: "#6b6b6b" }}>
                          Rs : {items.price}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom ">
                    <div className="d-flex justify-content-between align-nav-item mt-2">
                      <h6 className="">Sub Total</h6>
                      <h6 style={{ color: "#6b6b6b" }}>
                        Rs {items.price * items.quantity}
                      </h6>
                    </div>
                    <div className="d-flex justify-content-between align-nav-item">
                      <h6>Shipping</h6>
                      <h6 style={{ color: "#6b6b6b" }}>Rs 20</h6>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-between align-nav-item py-4">
                <h4>Total</h4>
                <div
                  className="d-flex align-items-baseline"
                  style={{ gap: "10px" }}
                >
                  <p>RS</p>
                  <h4>
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity + 20,
                      0
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
