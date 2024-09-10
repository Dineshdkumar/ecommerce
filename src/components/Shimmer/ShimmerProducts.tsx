// @ts-ignore
import React from "react";

const ShimmerProducts = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          style={{
            height: "440px",
            width: "280px",
            backgroundColor: "#e0e0e0",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "3px",
            marginLeft: "10px", // Ensures proper margin around items
            marginRight: "10px", // Ensures proper margin around items
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShimmerProducts;
