// @ts-ignore
import React from "react";
import "./BlogCard.css";
import blogImg from "../../assets/blog-1.jpg";
const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-img">
          <img src={blogImg} className="img-fluid w-100" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">10 June 2024</p>
          <h5 className="title">A Beautiful Sunday Morning</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          </p>
          <button className="btn btn-success">READ MORE</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
