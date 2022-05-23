import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      <div className="row">
        <div className="col-6">
          <div>
            <img
              src="/images/about-us.png"
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
              About US
            </h6>
          </div>
          <h2
            style={{
              fontSize: "50px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#14212A",
            }}
          >
            Professional Business Guidance Agency
          </h2>

          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
            <br />
            <br />
            Unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <ul className="about-ul">
            <li>Business {"&"} Consulting Agency</li>
            <li>Business {"&"} Consulting Agency</li>
          </ul>
          <button style={{
            padding: '15px 30px',
            border: "none",
            borderRadius: "34px",
            background: '#FF4917',
            color: 'white',
            fontSize: '20px',
            fontWeight: 700,
          }}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
