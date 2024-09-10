// @ts-ignore

import React from "react";
import Meta from "../../components/Meta Data/Meta";
import "./Contact.css";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title={"contact"}></Meta>
      <div className="contact-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.727978086139!2d77.6331228252554!3d13.024079652605193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172410545219%3A0x697fa808267930f8!2sKalyan%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1724149108271!5m2!1sen!2sin"
                width="600"
                height="450"
                className="b-0 w-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="d-flex justify-content-between contact-inner-wrapper">
                <div className="contact-title mb-4">
                  <h3 className="text-center">Contact</h3>
                  <form
                    action=""
                    className="d-flex flex-column"
                    style={{ gap: "10px" }}
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="mobile"
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
                    <div className="btn btn-primary"> Submit</div>
                  </form>
                </div>
                <div className="contact-title mb-4 w-100">
                  <h3 className="text-center mb-4">Get In Touch with US</h3>
                  <div className="ps-0">
                    <ul>
                      <li
                        className="mb-4 d-flex align-items-base"
                        style={{ gap: "10px" }}
                      >
                        <AiOutlineHome className="fs-5" />
                        <address>
                          5th G road Kalyan Nagar, Pincode :56001, Banglore
                        </address>
                      </li>
                      <li
                        className="mb-4 d-flex align-items-base"
                        style={{ gap: "10px" }}
                      >
                        <BiPhoneCall className="fs-5" />
                        <a href="tel +91 630293833" style={{ color: "black" }}>
                          +91 630293833
                        </a>
                      </li>
                      <li className="mb-4 d-flex" style={{ gap: "10px" }}>
                        <AiOutlineMail className="fs-5" />
                        <a
                          href="mailto dineshdkumar22@gmail.com"
                          style={{ color: "black" }}
                        >
                          dineshdkumar22@gmail.com
                        </a>
                      </li>
                      <li className="mb-4 d-flex" style={{ gap: "10px" }}>
                        <BiInfoCircle className="fs-5" />
                        <p>Mon-Fri 9:00 AM - 6:00 PM </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
