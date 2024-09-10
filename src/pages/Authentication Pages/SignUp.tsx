// @ts-ignore

import React from "react";
import Breadcrumb from "../../components/Meta Data/Breadcrumb";
import Meta from "../../components/Meta Data/Meta";
import "./Login.css";
import { Link } from "react-router-dom";
const Signout = () => {
  return (
    <>
      <Meta title={"Sign Up"}></Meta>
      <Breadcrumb title="Sign Up" />
      <div className="login-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center">Create Account</h3>
                <form action="">
                  <input
                    type="text"
                    className="form-control mb-4"
                    name=""
                    placeholder="First Name"
                    id=""
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    name=""
                    placeholder="Last Name"
                    id=""
                  />
                  <input
                    type="email"
                    className="form-control mb-4"
                    name=""
                    placeholder="email"
                    id=""
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    name=""
                    placeholder="password"
                    id=""
                  />

                  <div
                    className="d-flex justify-content-center"
                    style={{ gap: "20px" }}
                  >
                    <Link to="/" className="btn btn-success w-50" type="submit">
                      Create
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signout;
