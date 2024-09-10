// @ts-ignore
import React, { useEffect, useState } from "react";

import "./SingleProduct.css";

// @ts-ignore
import ReactStars from "react-rating-stars-component";
// @ts-ignore
import ImageZoom from "react-image-zooom";

import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import Meta from "../../components/Meta Data/Meta";
import { Link, useParams } from "react-router-dom";
import ProductData from "../../components/Product Data/ProductData";
import axios from "axios";
import { ProductDetails } from "../../components/Type/MetaProps";
import { useDispatch } from "react-redux";
import { addItem } from "../../components/Cart slice/cartSlice";

import ShimmerProduct from "../../components/Shimmer/ShimmerProduct";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
const SingleProduct = () => {
  // @ts-ignore
  const [orderedProduct, setOrderedProduct] = useState(true);

  const dispath = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      getProductsData();
      setLoading(false);
    };
    fetchData();
  }, [id]);
  const getProductsData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.in/api/products/${id}`
      );
      const data = {
        ...response.data.product,
        quantity: 1,
      };

      setProduct(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  const decreaseQty = () => {
    setProduct((prevProduct) => {
      if (!prevProduct) return null;
      const newQuantity =
        prevProduct.quantity > 1 ? prevProduct.quantity - 1 : 1;

      return {
        ...prevProduct,
        quantity: newQuantity,
      };
    });
  };
  const handleAdd = () => {
    setProduct((prevProduct) => {
      if (!prevProduct) return null;
      return {
        ...prevProduct,
        quantity: prevProduct.quantity + 1,
      };
    });
  };
  const handleItem = (item: ProductDetails) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity,
    };
    console.log(updatedItem.quantity);
    dispath(addItem(updatedItem));
  };
  if (!product) {
    return <ShimmerProduct />;
  }

  return (
    <>
      <Meta title={"Single"}></Meta>

      <div className="main-product-wrapper py-5">
        <div className="container-xxl">
          {loading ? (
            <ShimmerProduct />
          ) : (
            <div className="row">
              <div className="col-6">
                <div className="main-product-img">
                  <div>
                    <ImageZoom
                      src={product.image}
                      alt="A image to apply the ImageZoom plugin"
                      zoom="200"
                    />
                  </div>
                </div>
                <div
                  className="other-product-images d-flex flex-wrap "
                  style={{ gap: "15px" }}
                >
                  <div>
                    <img
                      src={product.image}
                      alt="other images"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image}
                      alt="other images"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image}
                      alt="other images"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image}
                      alt="other images"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3 className="fs-4.6" style={{ lineHeight: "25px" }}>
                      {product.title}
                    </h3>
                  </div>
                  <div className="border-bottom">
                    <h4 className="mt-4">Rs:{product.price}/-</h4>
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "15px" }}
                    >
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">({product.discount} reviews)</p>
                    </div>
                    <a
                      href="#review"
                      className="text-dark mt-3 mb-3 product-heading"
                    >
                      Write a Review
                    </a>
                  </div>
                  <div className="border-bottom py-4">
                    <div
                      className="d-flex align-items-baseline"
                      style={{ gap: "10px" }}
                    >
                      <h3 className="product-heading">Brand:</h3>
                      <p className="product-data">{product.brand}</p>
                    </div>
                    <div
                      className="d-flex align-items-baseline"
                      style={{ gap: "10px" }}
                    >
                      <h3 className="product-heading">Category:</h3>
                      <p className="product-data">{product.category}</p>
                    </div>
                    <div
                      className="d-flex align-items-baseline "
                      style={{ gap: "10px" }}
                    >
                      <h3 className="product-heading">Model:</h3>
                      <p className="product-data">{product.model}</p>
                    </div>
                    <div
                      className="d-flex align-items-baseline "
                      style={{ gap: "10px" }}
                    >
                      <h3 className="product-heading">Availaibility :</h3>
                      <p className="product-data">In Stock</p>
                    </div>
                    <div
                      className="d-flex flex-column mb-3"
                      style={{ gap: "10px" }}
                    >
                      <h3 className="product-heading">Size</h3>
                      <div
                        className="d-flex flex-wrap align-items-baseline"
                        style={{ gap: "10px" }}
                      >
                        <div className="badge border border-1 bg-white text-dark fs-5 border-secondary">
                          S
                        </div>
                        <div className="badge border border-1 bg-white text-dark fs-5 border-secondary">
                          M
                        </div>
                        <div className="badge border border-1 bg-white text-dark fs-5 border-secondary">
                          L
                        </div>
                        <div className="badge border border-1 bg-white text-dark fs-5 border-secondary">
                          XL
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-baseline "
                      style={{ gap: "10px" }}
                    >
                      <h3 className="product-heading">Colors : </h3>
                      <p className="product-data">{product.color}</p>
                    </div>
                    <div
                      className="d-flex flex-row mb-3"
                      style={{ gap: "15px" }}
                    >
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="d-flex " style={{ gap: "10px" }}>
                        <GrFormSubtract
                          size={30}
                          className="text-white badge bg-secondary border rounded-circle"
                          onClick={() => decreaseQty()}
                        />
                        <input
                          min={1}
                          max={10}
                          value={product.quantity}
                          className="border b-4"
                          type="text"
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
                          onClick={() => handleAdd()}
                        />
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center mt-6"
                      style={{ gap: "20px" }}
                    >
                      <Link
                        to="/cart"
                        onClick={() => handleItem(product)}
                        className="btn btn-primary w-50"
                        type="submit"
                      >
                        Add to cart
                      </Link>
                      <Link
                        to="/checkout"
                        className="btn btn-secondary w-50"
                        style={{ backgroundColor: "#ffd700", color: "black" }}
                        onClick={() => handleItem(product)}
                      >
                        Buy Now
                      </Link>
                    </div>
                    <div
                      className="d-flex align-items-center mt-3"
                      style={{ gap: "20px" }}
                    >
                      <div
                        className="d-flex align-items-center "
                        style={{ gap: "8px" }}
                      >
                        <TbGitCompare size={25} />
                        <a href="" className="text-dark fs-5.5">
                          Add to Compare
                        </a>
                      </div>
                      <div
                        className="d-flex align-items-center "
                        style={{ gap: "8px" }}
                      >
                        <AiOutlineHeart size={25} />
                        <a href="" className="text-dark fs-5.5">
                          Add to wishlist
                        </a>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-column mt-4"
                      style={{ gap: "10px" }}
                    >
                      <div
                        className="d-flex align-items-base   "
                        style={{ gap: "8px" }}
                      >
                        <FaShippingFast size={25} />
                        <h3 className="product-heading">
                          Shipping and Returns
                        </h3>
                      </div>
                      <p className="product-data">
                        Free Shipping and returns Availaible for All Orders{" "}
                        <br />
                        We Ship All orders with in <b>5-10 days</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="description-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <h3>Description</h3>
              <div
                className="bg-white  border b-2 "
                style={{ borderRadius: "9px" }}
              >
                <h6
                  className="ps-2 mt-3"
                  style={{
                    lineHeight: "28px",
                    fontSize: "16px",
                  }}
                >
                  <span>{product.description}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper ">
        <div className="container-xxl ">
          <div className="row m-0">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Customer Reviews</h4>
                    <div
                      className="d-flex align-items-center "
                      style={{ gap: "10px" }}
                    >
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form">
                  <form
                    action=""
                    className="d-flex review-form py-5 flex-column"
                    style={{ gap: "10px" }}
                  >
                    <h5 id="review">write a review</h5>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control"
                        placeholder="comments"
                        cols={30}
                        rows={4}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-success w-20">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div
                      className="d-flex mt-3 align-items-end "
                      style={{ gap: "10px" }}
                    >
                      <h6>Dinesh</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Consequatur incidunt repellendus, inventore soluta
                      delectus assumenda quos quisquam ab a. Cum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <h3 className="section-heading">Our Popular Products</h3>
            <div className="d-flex flex-wrap">
              <div className="row">
                <ProductData slice={12} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
