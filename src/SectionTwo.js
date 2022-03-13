import React from "react";

export default function SectionTwo() {
  return (
    <div className="sec-two">
      <h1 className="title">Pick your plan</h1>
      <div className="sec-two-elements">
        <div className="sec-two-div 1">
          <h1>Monthly</h1>
          <p>$18/mo</p>
          <button className="sec-two-button">FIND YOUR BOX</button>
        </div>
        <div className="sec-two-div 2">
          <h1>Yearly</h1>
          <p>$15/mo</p>
          <button className="sec-two-button">FIND YOUR BOX</button>
        </div>
      </div>
      <p>
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </p>
    </div>
  );
}
