import React from "react";
import "./sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { BsCart4 } from "react-icons/bs";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section class="sidebar">
        <div class="logo-container">
          <h1>
            <BsCart4 />
          </h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
