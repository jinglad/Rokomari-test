import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ background: "#14212A" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <h4 style={{ color: "white", fontSize: "40px", fontWeight: 700 }}>
              Company
            </h4>
            <p style={{ color: "#788B9A" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className="col-8">
            <div className="ml-3 p-3" style={{ border: "2px solid #34495C" }}>
              <h4 style={{ color: "white", fontSize: "25px", fontWeight: 700 }}>
                Subscribe Our Newsletters
              </h4>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  style={{
                    border: "none",
                    width: "400px",
                    background: "transparent",
                    borderBottom: "1px solid #34495C",
                    outline: 'none',
                    color: 'white',
                  }}
                />
                <button
                  style={{
                    padding: "15px 30px",
                    border: "none",
                    borderRadius: "34px",
                    background: "#FF4917",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginLeft: "30px ",
                  }}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul style={{ listStyle: "none" }}>
              <li className="footer-list">Company History</li>
              <li className="footer-list">Latest News {"&"} Blog </li>
              <li className="footer-list">Popular Services</li>
              <li className="footer-list">Business {"&"} Consulting</li>
              <li className="footer-list">Financial Planning</li>
            </ul>
          </div>
          <div className="col-3">
            <h4 className="footer-subheading">Company</h4>
            <ul style={{ listStyle: "none" }}>
              <li className="footer-list">About Company</li>
              <li className="footer-list">World Wide Clients </li>
              <li className="footer-list">Happy People's</li>
              <li className="footer-list">Winning awards</li>
              <li className="footer-list">Company Statistics</li>
            </ul>
          </div>
          <div className="col-3">
            <h4 className="footer-subheading">Contact Us</h4>
            <ul style={{ listStyle: "none" }}>
              <li className="footer-list">Call: +8801917 009887</li>
              <li className="footer-list">Email: support@gmail.com </li>
              <li className="footer-list">
                Address: 123/A Broklyn Stree, New York, USA
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h4 className="footer-subheading">Follow Instagram</h4>
            <div className="row">
              <SingleImage image="/images/footer-img-1.png" />
              <SingleImage image="/images/footer-img-2.png" />
              <SingleImage image="/images/footer-img-3.png" />
              <SingleImage image="/images/footer-img-2.png" />
              <SingleImage image="/images/footer-img-4.png" />
              <SingleImage image="/images/footer-img-1s.png" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <p style={{color: "#788B9A"}}>© 2012-2022 <span style={{color: '#FF4917'}}>Company</span></p>
          <div className="d-flex justify-content-around" style={{color: "#788B9A"}}>
            <p className="mr-2">Terms</p>
            <p className="mr-2">Privacy</p>
            <p>Program Policies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SingleImage = ({ image }) => {
  return (
    <div className="col-4">
      <div style={{width: '90%', marginBottom: '5px'}}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
