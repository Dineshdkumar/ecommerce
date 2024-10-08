// @ts-ignore

import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ title }: { title: string }) {
  return (
    <>
      <div className="Breadcrumb mb-0 py-4">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-12">
              <p className="text-center mb-0">
                <Link to="/" className="text-dark">
                  Home &nbsp;
                </Link>
                /{title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
