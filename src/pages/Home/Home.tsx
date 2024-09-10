import "./Home.css";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/Blog Card/BlogCard";
import ProductData from "../../components/Product Data/ProductData";
import axios from "axios";
import { ProductDetails } from "../../components/Type/MetaProps";
import { Link } from "react-router-dom";
import MainBannerImg1 from "../../assets/main-banner-1.jpg";
import MainBannerImg from "../../assets/main-banner.jpg";
import CartBannerImg1 from "../../assets/catbanner-01.jpg";
import CartBannerImg2 from "../../assets/catbanner-02.jpg";
import CartBannerImg3 from "../../assets/catbanner-03.jpg";
import CartBannerImg4 from "../../assets/catbanner-04.jpg";
import serviceImg1 from "../../assets/service.png";
import serviceImg2 from "../../assets/service-02.png";
import serviceImg3 from "../../assets/service-03.png";
import serviceImg4 from "../../assets/service-04.png";
import serviceImg5 from "../../assets/service-05.png";
import trendingImg1 from "../../assets/trending-1.jpg";
import trendingImg2 from "../../assets/trending-2.jpg";
import trendingImg3 from "../../assets/trending-3.jpg";
import trendingImg4 from "../../assets/trending-4.jpg";
import BrandImg1 from "../../assets/brand-01.png";
import BrandImg2 from "../../assets/brand-02.png";
import BrandImg3 from "../../assets/brand-03.png";
import BrandImg4 from "../../assets/brand-04.png";
import BrandImg5 from "../../assets/brand-05.png";
import BrandImg6 from "../../assets/brand-06.png";
import BrandImg7 from "../../assets/brand-07.png";
import BrandImg8 from "../../assets/brand-08.png";

import ShimmerCategory from "../../components/Shimmer/ShimmerCategory";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [categories, setCategories] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getCategoriesData();
      setLoading(false);
    };
    fetchData();
  }, []);

  const getCategoriesData = async () => {
    const response = await axios.get("https://fakestoreapi.in/api/products");
    const data = response.data.products;
    setCategories(data);
    console.log(categories);
  };

  return (
    <>
      <section className="home-wrapper-1 py-5  position-relative">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-6">
              <div className="main-banner-img p-3">
                <img
                  src={MainBannerImg1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h5>SUPER CHARGED FOR PROS.</h5>
                  <h2>iPad S13+ PRO</h2>
                  <p>From 1000Rs/-</p>
                  <button className="btn btn-success rounded-3">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex flex-wrap justify-content-between align-items-start">
              <div className="small-banner position-relative p-3">
                <img
                  src={CartBannerImg1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>Best Sale</h5>
                  <h2>Laptop Max</h2>
                  <p>From 10,000Rs/-</p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src={CartBannerImg2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>15% OFF</h5>
                  <h2>Smart Watch 7 </h2>
                  <p>
                    Shop the latest band <br />
                    styles and colors{" "}
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src={CartBannerImg3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>NEW ARRIVAL</h5>
                  <h2>Buy Ipad Air</h2>
                  <p>From 9,999Rs/-</p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src={CartBannerImg4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>FREE ENGRAVING</h5>
                  <h2>Airpods Max</h2>
                  <p>
                    High fidelity playback
                    <br />& ultra low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <div className="services d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={serviceImg1} alt="" />
                  </div>
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all orders over 1000 Rs/-</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={serviceImg2} alt="" />
                  <div>
                    <h6>Daily Offers</h6>
                    <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={serviceImg3} alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={serviceImg4} alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory direct places</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={serviceImg5} alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p>100% Protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              {loading ? (
                <ShimmerCategory />
              ) : (
                <Link
                  to="/product"
                  className="categories d-flex flex-wrap align-items-center"
                  style={{ color: "black" }}
                >
                  {categories.slice(18, 26).map((items) => (
                    <div key={items.id} className="d-flex  align-items-center">
                      <div>
                        <h6 style={{ textTransform: "uppercase" }}>
                          {items.category}
                        </h6>
                        <p>10 items</p>
                      </div>

                      <img
                        src={items.image}
                        height="80px"
                        width="80px"
                        alt=""
                      />
                    </div>
                  ))}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="product-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <h3 className="section-heading">Feature Collections</h3>
            <div className="d-flex flex-wrap" style={{ gap: "15px" }}>
              <ProductData slice={0} />
            </div>
          </div>
        </div>
      </section>
      <section className="trending-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0 justify-content-between">
            <div className="col-2">
              <div className="famous-card">
                <img src={trendingImg2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="famous-card">
                <img src={trendingImg1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="famous-card">
                <img src={trendingImg3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="famous-card">
                <img src={trendingImg4} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="row m-0">
              <h3 className="section-heading">Special Products</h3>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section> */}
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
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <div className="inner-wrapper">
                <Marquee className=" marquee d-flex align-items-center">
                  <div>
                    <img src={BrandImg1} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg2} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg3} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg4} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg5} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg6} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg7} alt="band" />
                  </div>
                  <div>
                    <img src={BrandImg8} alt="band" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <h3 className="section-heading">Our Latest News</h3>
            <div className="row m-0 ">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
