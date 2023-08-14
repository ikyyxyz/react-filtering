import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) {
  return (
    <>
      <div class="section card">
        <img src={img} alt={title} className="card-img" />
        <div class="card-details">
          <h3 class="card-title">{title}</h3>
          <section class="card-reviews">
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <span className="total-review"> {reviews}</span>
          </section>
          <section class="card-price">
            <div class="price">
              <del>{prevPrice} </del>
              {""}
              {newPrice}
            </div>
            <div class="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
