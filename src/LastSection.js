import React from "react";
import { SiInstagram } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";

const listOne = [
  "Upbox Bag",
  "Upbox Box Platinum",
  "Upbox Box VIP",
  "Deals",
  "Seasonal Items",
  "Upbox Promise"
];
const listTwo = ["Instagram", "Facebook", "TikTok", "SnapChat", "Twitter"];
const listThree = ["Get the App", "Loyalty Program", "Affiliates", "Press"];
const listFour = ["Returns", "FAQ", "Contact", "Community", "Videos"];

export default function LastSection() {
  return (
    <div className="last-sec">
      <div className="last-sec-header">
        <div className="small logo-bar">
          <div className="logo small">
            <h1 className="logo-letter small">U</h1>
            <h1 className="logo-letter small B">B</h1>
          </div>
          <p className="logo-title small">UPBOX</p>
        </div>
        <div className="social-media-icons-parent">
          <SiInstagram className="social-media-icon large" />
          <ImFacebook2 className="social-media-icon large" />
          <FaTwitterSquare className="social-media-icon small" />
          <FaSnapchatSquare className="social-media-icon small" />
        </div>
      </div>
      <div className="columns is-multiline">
        <div className="list column is-one-fourth">
          <p id="list-title">UPBOX</p>
          {listOne.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="list column is-one-fourth">
          <p id="list-title">Find Us On</p>
          {listTwo.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="list column is-one-fourth">
          <p id="list-title">Product</p>
          {listThree.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="list column is-one-fourth">
          <p id="list-title">Help</p>
          {listFour.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
