import React from "react";

const Data = [
  {
    img:
      "https://th.bing.com/th/id/OIP.WM3VJGVg8BouaBeGJ0amCwHaIY?w=165&h=186&c=7&r=0&o=5&dpr=1.38&pid=1.7",
    text: "How to rock the lip look that turns heads"
  },
  {
    img:
      "https://i.pinimg.com/originals/a8/4e/17/a84e171bd11b28fdafe999e93a71d1a7.jpg",
    text: "Find the perfect shade for the season"
  },
  {
    img:
      "https://th.bing.com/th/id/OIP.rIomeHDTKLx39XkTAel27gHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.38&pid=1.7",
    text: "The 5 eye shadow secrets you never knew"
  },
  {
    img:
      "https://th.bing.com/th/id/OIP.fowPbs0rAe2PAxc9E-73jwHaJ4?pid=ImgDet&w=198&h=263&c=7&dpr=1.38",
    text: "The pro-tips for at home hair dying"
  }
];

export default function SectionFour() {
  return (
    <div className="sec-four">
      <h1 className="title">Social Posts</h1>
      <div className="columns is-multiline">
        {Data.map((data, index) => (
          <div
            className="social-posts column is-one-fourth is-flex is-flex-direction-column 
              is-align-items-center is-justify-content-space-around"
            key={index}
          >
            <img
              className="sec-four-img"
              src={data.img}
              position="top"
              alt="Fissure in Sandstone"
            />
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <button className="sec-two-button sec-four-button">
        FOLLOW US ON INSTAGRAM
      </button>
    </div>
  );
}
