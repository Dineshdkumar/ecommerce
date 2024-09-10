// @ts-ignore
import React from "react";

import { Link, useLocation } from "react-router-dom";
import emptyImg from "../../assets/empty-cart.jpg";
const EmptyPage = () => {
  const location = useLocation();
  const removeSlash = () => {
    const page = location.pathname;
    const pageName = page.slice(1);
    return pageName;
  };

  return (
    <>
      <div
        className="empty-wrapper"
        style={{ backgroundColor: " rgb(241, 240, 240)" }}
      >
        <div className="d-flex justify-content-center  align-items-center">
          <div className="">
            <div>
              <img
                src={emptyImg}
                height="300px"
                width="300px"
                className="mx-5"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div>
              <h2 className="" style={{ textTransform: "uppercase" }}>
                Your {removeSlash()} is Empty
              </h2>
            </div>
            <div>
              <Link
                to="/product"
                className="btn btn-secondary mt-5 mx-5"
                style={{
                  backgroundColor: "blueviolet",
                  borderRadius: "9px",
                }}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyPage;
