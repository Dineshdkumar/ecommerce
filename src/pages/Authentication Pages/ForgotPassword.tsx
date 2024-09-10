// @ts-ignore
import React from "react";
import Meta from "../../components/Meta Data/Meta";
import Breadcrumb from "../../components/Meta Data/Breadcrumb";
import { Link } from "react-router-dom";
import "./Login.css";
const ForgotPassword = () => {
  return (
    <>
      <Meta title={"forgot password"}></Meta>
      <Breadcrumb title="Forgot password" />
      <div className="login-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center">Reset Your Password</h3>
                <p className="text-center">
                  We will send you an email to reset you password
                </p>
                <form action="">
                  <input
                    type="text"
                    className="form-control mb-4"
                    name=""
                    placeholder="email"
                    id=""
                  />

                  <div
                    className=" d-flex justify-content-center flex-column"
                    style={{ gap: "15px" }}
                  >
                    <button
                      className="btn btn-primary "
                      style={{ width: "100px", margin: "auto" }}
                    >
                      Submit
                    </button>
                    <Link
                      to="/login"
                      className="btn btn-secondary "
                      style={{ width: "100px", margin: "auto" }}
                    >
                      Cancel
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

export default ForgotPassword;
