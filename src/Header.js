import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

const headerOptions = ["THIS MONTH", "SKIN", "HAIR", "BATH", "SALE"];

export default function Header() {
  return (
    <div className="header">
      <div className="logo-bar">
        <div className="logo">
          <h1 className="logo-letter">U</h1>
          <h1 className="logo-letter B">B</h1>
        </div>
        <p className="logo-title">UPBOX</p>
      </div>
      <div className="menu-bar">
        {headerOptions.map((option, index) => (
          <p key={index} className="single-menu-option">
            {option}
          </p>
        ))}
        <p className="single-menu-option login">
          LOG IN
          <AiOutlineRight style={{ marginLeft: "4px", fontSize: "small" }} />
        </p>
      </div>
      <FiMenu className="menu-icon" />
    </div>
  );
}
