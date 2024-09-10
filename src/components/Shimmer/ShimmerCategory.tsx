// @ts-ignore
import React from "react";
import "./ShimmerCategory.css";
const ShimmerCategory = () => {
  return (
    <div
      className="categories d-flex flex-wrap align-items-center"
      style={{ color: "black" }}
    >
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="d-flex align-items-center  shimmerCategory "
        ></div>
      ))}
    </div>
  );
};

export default ShimmerCategory;
