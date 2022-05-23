import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div style={{background: '#F5F5F5'}}>
      <div className="container py-5" style={{ background: "#14212A" }}>
        <div className="row">
          <div className="col-6">
            <div className="text-center">
              <img
                src="/images/Character.png"
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex">
              <hr
                style={{
                  height: "2px",
                  background: "#FF4917",
                  width: "30px",
                  marginRight: "20px",
                  // marginTop: "-1/px",
                }}
              />
              <h6
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#FF4917",
                }}
              >
                What We Do
              </h6>
            </div>
            <h2
              style={{
                fontSize: "50px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#FFF",
              }}
            >
              Why Choose Our <br />
              Business Agency
            </h2>

            <p
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#FFF",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <ul className="we-do-ul">
              <li>Business {"&"} Consulting Agency</li>
              <li>Business {"&"} Consulting Agency</li>
            </ul>
            <button
              style={{
                padding: "15px 30px",
                border: "none",
                borderRadius: "34px",
                background: "#FF4917",
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Join With Us ß
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <div className="row mt-5 w-75">
        <SingleStat
          icon="/images/stat-1.png"
          title="Project Completed"
          number="3568"
        />
        <SingleStat
          icon="/images/stat-2.png"
          title="Satisfies Client"
          number="3568"
        />
        <SingleStat
          icon="/images/stat-3.png"
          title="International Awards"
          number="3568"
        />
        <SingleStat
          icon="/images/stat-4.png"
          title="Expert Team Members"
          number="3568"
        />
      </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

const SingleStat = ({ icon, title, number }) => {
  return (
    <div className="col-3">
      <div className="text-center">
        <img src={icon} alt="Statistic" />
        <h4 style={{fontWeight: 700, marginTop: "10px"}}>{number}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
};
