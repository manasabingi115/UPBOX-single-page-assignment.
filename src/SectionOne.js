import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function SectionOne() {
  return (
    <div className="sec-one">
      <div className="sec-one-div-1">
        <h1 className="title">Look good without leaving your house.</h1>
        <p className="sec-one-para">
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <button className="sign-up-button">
          SIGN UP
          <AiOutlineRight style={{ marginLeft: "4px", fontSize: "small" }} />
        </button>
      </div>
      <div className="sec-one-div-2">
        <img
          className="sec-one-img"
          src=" https://th.bing.com/th/id/OIP.ktEf8bjdBfwEUqRCjgieYgHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="gift-img"
        />
      </div>
    </div>
  );
}
