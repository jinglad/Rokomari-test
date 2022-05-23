import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="position-relative">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <SingleBanner />
          </div>
          <div className="carousel-item">
            <SingleBanner />
          </div>
          <div className="carousel-item">
            <SingleBanner />
          </div>
        </div>
        <div className="container" style={{ zIndex: 10, marginTop: "-120px" }}>
          <div className="position-relative">
            <button className="freez-btn1 mr-5">
              <span className="banner-btn-text">Get Started Now</span>
              <span className="popper-color"></span>
            </button>
            <button className="freez-btn2">
              <span className="banner-btn-text">Our Services</span>
              <span className="popper-color"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const SingleBanner = () => {
  return (
    <div className="banner-container position-relative">
       <div>
          <img
            src="/images/banner-bgc-1.png"
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: '118px', zIndex: 1 }}
          />
        </div>
        <div>
          <img
            src="/images/banner-bgc-2.png"
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: '150px' }}
          />
        </div>
        <div>
          <img
            src="/images/banner-bgc-3.png"
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: '200px' }}
          />
        </div>
      <div className="container">
        <div className="row single-banner">
          <div className="col-8">
            <h6 className="banner-subheading">Business {"&"} Consulting</h6>
            <h2 className="banner-heading">
              Making Difference Growth Your Business With Modern Ideas
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
