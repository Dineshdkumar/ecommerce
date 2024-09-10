// @ts-ignore

import React from "react";
import Meta from "../../components/Meta Data/Meta";

import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Meta title={"login"}></Meta>

      <div className="login-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center">Login</h3>
                <form action="">
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
                  <Link
                    className="d-block mb-3"
                    to="/forgot-password"
                    style={{ color: "black" }}
                  >
                    forgot password ?
                  </Link>
                  <div
                    className="d-flex justify-content-center"
                    style={{ gap: "20px" }}
                  >
                    <button className="btn btn-primary w-50" type="submit">
                      Submit
                    </button>
                    <Link to="/signup" className="btn btn-secondary w-50">
                      Sign Up
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

export default Login;
