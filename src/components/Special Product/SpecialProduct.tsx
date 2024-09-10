// @ts-ignore
import React from "react";
import "./SpecialProduct.css";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-4">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="Assests/watch.jpg" className="img-fluid" alt="" />
            </div>
            <div className="special-product-content">
              <h5 className="Brand">Havels </h5>
              <h6 className="title">Samsung Galaxy Note 10+</h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span>Rs: 1000/-</span> &nbsp;<s>Rs:2000</s>
              </p>
              <div
                className="discount-till d-flex align-items-center "
                style={{ gap: "10px" }}
              >
                <p className="mb-0">
                  <b>5</b>days
                </p>
                <div className="d-flex gap-10"></div>
                <span className="badge rounded-circle p-3 bg-danger fs-0.5">
                  1
                </span>
                <span className="badge rounded-circle p-3 bg-danger fs-0.5">
                  1
                </span>
                <span className="badge rounded-circle p-3 bg-danger fs-0.5">
                  1
                </span>
              </div>
              <div className="prod-count mt-3">
                <p>Products:5</p>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "25%" }}></div>
                </div>
                <button className="btn btn-success mt-3 rounded-3">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
