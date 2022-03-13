import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function SectionThree() {
  return (
    <div className="sec-three">
      <h1 className="title">How it works?</h1>
      <div className="sec-three-part 1">
        <img
          className="sec-three-img 1"
          src="https://ak.picdn.net/shutterstock/videos/1283008/thumb/6.jpg"
          alt="sec-3-img-1"
        />
        <div className="sec-three-text">
          <h1>Setup your profile & preferences</h1>
          <p>
            Once you create an account, you can start to tell us your likes and
            dislikes so we can tailor the experience just for you.
          </p>
        </div>
      </div>
      <div className="sec-three-part-2">
        <img
          className="sec-three-img-2"
          src="https://www.cooksongold.com/images-prod/996_731__12.jpg"
          alt="sec-3-img-2"
        />
        <div className="sec-three-text-2">
          <h1>Review your custom box</h1>
          <p>
            Once we get to know you, we will show you the box we’ve crafted.
            This is your chance to approve it before we ship it to your house.
          </p>
        </div>
      </div>
      <div className="sec-three-part 3">
        <img
          className="sec-three-img 3"
          src="https://th.bing.com/th/id/OIP.cOHHTRLnwF6Cy5j4GpAHVQHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.25"
          alt="sec-3-img-3"
        />
        <div className="sec-three-text">
          <h1>Try it on at home</h1>
          <p>
            Your box will arrive within 3-5 days (usually sooner) and you get
            the joy to unbox your Upbox. Try it all on and send back whatever
            you’re not in love with.
          </p>
        </div>
      </div>

      <button className="sec-three-button">
        TRY IT FOR YOURSELF{" "}
        <AiOutlineRight style={{ marginLeft: "4px", fontSize: "small" }} />
      </button>
    </div>
  );
}
