import React from "react";
import cur_01 from "../assets/images/curtains_01.jpg";
import Image from "next/image";
import Link from "next/link";
import { MOBILE_NO } from "../utils";

const ExploreOurFurnitureRange2 = () => {
  return (
    <section className="explore__our__furniture__section__2">
      <h2>Explore Our Furniture Range</h2>
      <p className="mobile_hide">
        Be it end-to-end interiors, renovation or modular solutions, we have it
        all for your home or office. With a wide range of furniture & decor, we
        have your back from start to finish.
      </p>
      <div className="furniture__cards__2">
        <div className="fancy__card">
          <Image src={cur_01} alt="" />
          <div className="content">
            <span className="tag">Get Offer</span>
            <h5>Blackout Curtains</h5>
            <p>Special for Window </p>
            <div className="price__wrapper">
              <span className="price">₹6**/-</span>
              <Link href={`tel:${MOBILE_NO}`}>Call Now</Link>
            </div>
          </div>
        </div>
        <div className="fancy__card">
          <Image src={cur_01} alt="" />
          <div className="content">
            <span className="tag">Premium</span>
            <h5>Linen Curtains</h5>
            <p>For a Gorgeous Home</p>
            <div className="price__wrapper">
              <span className="price">₹9**/-</span>
              <Link href={`tel:${MOBILE_NO}`}>Call Now</Link>
            </div>
          </div>
        </div>
        <div className="fancy__card">
          <Image src={cur_01} alt="" />
          <div className="content">
            <span className="tag">New Look</span>
            <h5>Sheer Curtains</h5>
            <p>For a Refined Home Look</p>
            <div className="price__wrapper">
              <span className="price">₹8**/-</span>
              <Link href={`tel:${MOBILE_NO}`}>Call Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurFurnitureRange2;
