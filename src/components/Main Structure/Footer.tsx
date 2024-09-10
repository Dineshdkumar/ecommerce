// @ts-ignore

import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import newspaperImg from "../../assets/newsletter.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-2 footer-top text-center ">
        <a href="#header" className="text-white text-center mb-0 d-block">
          Back to top
        </a>
      </footer>
      <footer className="py-4">
        <div className="footer-container">
          <div className="row m-0 align-items-center">
            <div className="col-5">
              <div className="footer-img d-flex gap-4">
                <img src={newspaperImg} alt="newspaper" />
                <h3 className="mb-0 text-white"> Sign up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7 ">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-1"
                  id="basic-addon2"
                  style={{ backgroundColor: "beige", cursor: "pointer" }}
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="footer-container">
          <div className="row footer-inner-container  m-0">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white">
                  5th G Road <br />
                  Kalyan Nagar, Banglore <br />
                  Pincode:560001
                </address>
                <a href="tel:+91 602944423 " className="text-white mb-2">
                  +91 602944423
                </a>
                <a
                  href="mailto:dineshdkumar22@gmail.com"
                  className="text-white mb-2"
                >
                  dineshdkumar22@gmail.com
                </a>
                <div className="social-icons d-flex  align-items-center gap-30">
                  <a href="" className="text-white fs-3">
                    <BsLinkedin />
                  </a>
                  <a href="" className="text-white fs-3">
                    <BsGithub />
                  </a>
                  <a href="" className="text-white fs-3">
                    <BsInstagram />
                  </a>
                  <a href="" className="text-white fs-3">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white mb-1">
                  Privacy Policy
                </Link>
                <Link to="" className="text-white mb-1">
                  Refund Policy
                </Link>
                <Link to="" className="text-white mb-1">
                  Shipping Policy
                </Link>
                <Link to="" className="text-white mb-1">
                  Terms of services
                </Link>
                <Link to="" className="text-white mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white mb-1">
                  Search
                </Link>
                <Link to="" className="text-white mb-1">
                  About Us
                </Link>
                <Link to="" className="text-white mb-1">
                  Faq
                </Link>
                <Link to="" className="text-white mb-1">
                  Contact
                </Link>
                <Link to="" className="text-white mb-1">
                  Size chart
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white mb-1">
                  Laptops
                </Link>
                <Link to="" className="text-white mb-1">
                  Accessories
                </Link>
                <Link to="" className="text-white mb-1">
                  Headphones
                </Link>
                <Link to="" className="text-white mb-1">
                  Smart watches
                </Link>
                <Link to="" className="text-white mb-1">
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-2">
        <div className="footer-container">
          <div className="row m-0">
            <div className="col-12">
              <p className="mb-0 text-white text-center">
                &copy;{new Date().getFullYear()}, Powered by TP
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
