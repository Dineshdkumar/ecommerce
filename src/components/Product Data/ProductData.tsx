// @ts-ignore
import React, { useEffect, useState } from "react";
import { ProductDataProps, ProductDetails } from "../Type/MetaProps";
import axios from "axios";

import ShimmerProduct from "../Shimmer/ShimmerProducts";
import ProductCard from "../Product Card/ProductCard";

const ProductData: React.FC<ProductDataProps> = ({ grid, slice }) => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getProductsData();
      setLoading(false);
    };

    fetchData();
  }, []);

  async function getProductsData() {
    const data = await axios.get("https://fakestoreapi.in/api/products");

    const details = data.data.products.map((obj: ProductDetails) => ({
      ...obj,
      quantity: 1,
    }));
    console.log(details);
    setProducts(details);
  }

  const [firstElement, setFirstElement] = useState(slice);
  const [secondElement, setSecondElement] = useState(0);
  useEffect(() => {
    setFirstElement(slice);
    setSecondElement(slice + 12);
    console.log(firstElement);
    console.log(secondElement);
  }, [1]);

  return (
    <>
      {loading ? (
        <ShimmerProduct />
      ) : (
        <div className="row">
          {products.slice(firstElement, secondElement).map((product) => (
            <ProductCard key={product.id} product={product} grid={grid} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductData;
