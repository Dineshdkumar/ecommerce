// @ts-ignore
import React from "react";

import Meta from "../../components/Meta Data/Meta";
import "./CompareProduct.css";

import { RootState } from "../../components/Product Store/store";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails } from "../../components/Type/MetaProps";
import { removeItem } from "../../components/Cart slice/cartSlice";
import EmptyPage from "../../components/Empty Page/EmptyPage";
const CompareProduct = () => {
  const products = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (item: ProductDetails) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      <Meta title={"compare products"}></Meta>

      <div className="compare-product-wrapper py-5">
        <div className="container-xxl">
          {products.length == 0 ? (
            <EmptyPage />
          ) : (
            <div className="row m-0 ">
              <div
                className="col-12 d-flex flex-wrap justify-content-center"
                style={{ gap: "70px" }}
              >
                {products.map((items) => (
                  <div className="compare-product-card col-3   position-relative">
                    <img
                      src="Assests/cross.svg"
                      alt="cross"
                      className="img-fluid cross position-absolute"
                      onClick={() => handleRemove(items)}
                    />
                    <div className="compare-product-image">
                      <img
                        src={items.image}
                        className="img-fluid text-center"
                        height="160px"
                        width="160px"
                        alt=""
                      />
                    </div>
                    <div className="compare-product-details">
                      <h5 className="title">{items.title}</h5>

                      <h6 className="price mb-2">Rs : {items.price} /-</h6>
                      <div>
                        <div className="product-details">
                          <h5>Brand</h5>
                          <p>{items.brand}</p>
                        </div>
                        <div className="product-details">
                          <h5>Type</h5>
                          <p>{items.category}</p>
                        </div>
                        <div className="product-details">
                          <h5>Availaibility</h5>
                          <p>In Stock</p>
                        </div>
                        <div className="product-details">
                          <h5>Color</h5>
                          {items.color}
                        </div>
                        <div className="product-details">
                          <h5>Size</h5>
                          <div
                            className="d-flex align-items-center"
                            style={{ gap: "10px" }}
                          >
                            <p>M</p>
                            <p>S</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="Assests/cross.svg"
                  alt="cross"
                  className="img-fluid cross position-absolute"
                />
                <div className="compare-product-image">
                  <img src="Assests/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Random Watch multi-color</h5>
                  <h6 className="price mb-2">Rs:1000/-</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand</h5>
                      <p>havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availaibility</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size</h5>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <p>M</p>
                        <p>S</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
