// @ts-ignore
import React, { useEffect, useState } from "react";
import "../Cart/Cart.css";
import "./OurStore.css";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
// @ts-ignore
import Meta from "../../components/Meta Data/Meta";
import ProductData from "../../components/Product Data/ProductData";
import grimg1 from "../../assets/gr.svg";
import grimg2 from "../../assets/gr2.svg";
import grimg3 from "../../assets/gr3.svg";
import grimg4 from "../../assets/gr4.svg";

import { ProductDetails } from "../../components/Type/MetaProps";
import axios from "axios";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [products, setProducts] = useState<ProductDetails[]>([]);
  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    const response = await axios.get("https://fakestoreapi.in/api/products");
    const data = response.data.products;
    setProducts(data);
    console.log(products);
  };

  return (
    <>
      <Meta title={"OUR STORE"}></Meta>

      <div className="store-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop By Categories</h3>
                <div>
                  <h3 className="subtext">Availaibilty</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label
                      className="form-check-label "
                      style={{ fontSize: "15px" }}
                    >
                      {" "}
                      In Stock (1)
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      checked
                    />
                    <label
                      className="form-check-label"
                      style={{ fontSize: "15px" }}
                    >
                      {" "}
                      Out Of Stock (0)
                    </label>
                  </div>
                  <h3 className="subtext mt-3">Price</h3>
                  <div
                    className="d-flex align-items-center "
                    style={{ gap: "10px" }}
                  >
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control "
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control "
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h3 className="subtext mt-3">Colors</h3>
                  <div>
                    <div className="">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="subtext mt-3">Size</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label
                      className="form-check-label "
                      style={{ fontSize: "15px", color: "rgb(160, 160, 160)" }}
                    >
                      {" "}
                      M (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label
                      className="form-check-label "
                      style={{ fontSize: "15px", color: "rgb(160, 160, 160)" }}
                    >
                      {" "}
                      S (1)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div
                    className="d-flex flex-wrap product-tags align-items-center"
                    style={{ gap: "5.2px" }}
                  >
                    <span
                      className="badge bg-light py-2 px-3  text-secondary   rounded-3"
                      style={{ cursor: "pointer" }}
                    >
                      Headphone
                    </span>
                    <span
                      className="badge bg-light py-2 px-3  text-secondary   rounded-3"
                      style={{ cursor: "pointer" }}
                    >
                      Laptop
                    </span>
                    <span
                      className="badge bg-light py-2 px-3  text-secondary   rounded-3"
                      style={{ cursor: "pointer" }}
                    >
                      Mobile
                    </span>
                    <span
                      className="badge bg-light py-2 px-3  text-secondary   rounded-3"
                      style={{ cursor: "pointer" }}
                    >
                      Tablet
                    </span>
                    <span
                      className="badge bg-light py-2 px-3  text-secondary   rounded-3"
                      style={{ cursor: "pointer" }}
                    >
                      Airpodes
                    </span>
                    <span
                      className="badge bg-light py-2 px-3  text-secondary   rounded-3"
                      style={{ cursor: "pointer" }}
                    >
                      Watches
                    </span>
                  </div>
                </div>
              </div>
              <div className="random-card mb-3">
                <h3 className="filter-title"> Random Products</h3>
                <div>
                  {products.slice(30, 38).map((items: ProductDetails) => (
                    <div className="d-flex random-products py-3 mt-3 ">
                      <div className="width-50">
                        <img
                          src={items.image}
                          height="350px"
                          width="350px"
                          alt="watch"
                          className="img-fluid mb-2"
                        />
                        <b
                          className="  "
                          style={{
                            color: "#7b7979",
                            fontSize: "13px",
                            marginLeft: "0px",
                          }}
                        >
                          Rs : {items.price}/-
                        </b>
                      </div>

                      <div className="width-50">
                        <h5 className="title  fs-7  ">{items.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={items.discount}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="d-flex random-products ">
                  <div className="width-50">
                    <img
                      style={{ margin: "0" }}
                      src="Assests/watch.jpg"
                      alt="watch"
                      className="img-fluid ps-0"
                    />
                  </div>
                  <div className="width-50">
                    <h5>Kids Watches bulk 10 multi colored for Students</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>Rs : 1000/-</b>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <p className="mb-0" style={{ width: "100%" }}>
                      Sort By:{" "}
                    </p>
                    <select
                      className="form-control form-select "
                      id=""
                      style={{ width: "200px" }}
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>
                        Best Selling{" "}
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending ">
                        Price low to high
                      </option>
                      <option value="price-descending ">
                        Price high to low
                      </option>
                      <option value="created-ascending ">
                        Date, old to new
                      </option>
                      <option value="created-descending ">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <p className="total-products">21 Products</p>
                    <div
                      className="d-flex align-items-center grid"
                      style={{ gap: "10px" }}
                    >
                      <img
                        src={grimg4}
                        className="img-fluid d-block"
                        alt="4"
                        onClick={() => setGrid(3)}
                        style={{ cursor: "pointer" }}
                      />
                      <img
                        src={grimg3}
                        className="img-fluid d-block"
                        alt=""
                        onClick={() => setGrid(4)}
                        style={{ cursor: "pointer" }}
                      />
                      <img
                        src={grimg2}
                        className="img-fluid d-block "
                        alt=""
                        onClick={() => setGrid(6)}
                        style={{ cursor: "pointer" }}
                      />
                      <img
                        src={grimg1}
                        className="img-fluid d-block"
                        alt=""
                        onClick={() => setGrid(12)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list py-5 ">
                <div className="d-flex flex-wrap" style={{ gap: "15px" }}>
                  <ProductData slice={24} grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
