// @ts-ignore

import React from "react";
import Meta from "../../components/Meta Data/Meta";

import "./Blog.css";
import BlogCard from "../../components/Blog Card/BlogCard";
const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"}></Meta>

      <div className="blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row m-0">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row m-0 mb-3">
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
