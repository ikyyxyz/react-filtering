import React from "react";
import "./products.css";
import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <>
      <section class="card-container">{result}</section>
    </>
  );
};

export default Products;
