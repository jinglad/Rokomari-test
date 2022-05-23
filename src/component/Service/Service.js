import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div style={{ background: "#F5F5F5", position: 'relative' }}>
      <div>
        <img src="/images/bg-corner-1.png" alt="Background" style={{width: '250px', zIndex: 1,position: 'absolute', top: 0, left: 0 }} />
      </div>
      <div>
        <img src="/images/bg-corner-2.png" alt="Background" style={{width: '280px', position: 'absolute', top: 0, left: 0}} />
      </div>
      <div className="container py-5">
        <div style={{ width: "300px", margin: "auto" }}>
          <div className="d-flex">
            <hr
              style={{ height: "2px", background: "#FF4917", width: "20px" }}
            />
            <p
              className="mx-3"
              style={{
                color: "#FF4917",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              Company Services
            </p>
            <hr
              style={{ height: "2px", background: "#FF4917", width: "20px" }}
            />
          </div>
        </div>
        <h2
          style={{
            color: "#14212A",
            fontSize: "50px",
            letterSpacing: "-.02em",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          We Provide Most Exclusive <br /> Service for Business
        </h2>
        <div className="row mt-5">
          <SingleService
            icon="/images/service-1.png"
            title="Creative data"
            description="It is a long established fact that a reader will be distracted"
          />
          <SingleService
            icon="/images/service-2.png"
            title="Business Strategy"
            description="It is a long established fact that a reader will be distracted"
          />
          <SingleService
            icon="/images/service-3.png"
            title="Relationship Buildup"
            description="It is a long established fact that a reader will be distracted"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

const SingleService = ({ icon, title, description }) => {
  return (
    <div className="col-4">
      <div className="single-service">
        <img src={icon} alt="Icon" className="mb-4" />
        <h5>{title}</h5>
        <p>{description}</p>
        <>
          <img src="/images/arrow-btn.png" alt="Arrow Button" style={{cursor: 'pointer'}} />
        </>
      </div>
    </div>
  );
};
