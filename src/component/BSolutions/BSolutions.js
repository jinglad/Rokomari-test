import React from "react";

const BSolutions = () => {
  return (
    <div className="container py-5">
      <div style={{ width: "300px", margin: "auto" }}>
        <div className="d-flex">
          <hr style={{ height: "2px", background: "#FF4917", width: "20px" }} />
          <p
            className="mx-3"
            style={{
              color: "#FF4917",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Our Core Features
          </p>
          <hr style={{ height: "2px", background: "#FF4917", width: "20px" }} />
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
        We are Specialist for Many <br />
        Business Solutions
      </h2>
      <div className="row mt-4">
        <SingleBSolution image="/images/bgs-1.png" />
        <SingleBSolution image="/images/bgs-2.png" />
        <SingleBSolution image="/images/bgs-3.png" />
        <SingleBSolution image="/images/bgs-4.png" />
        <SingleBSolution image="/images/bgs-5.png" />
        <SingleBSolution image="/images/bgs-6.png" />
      </div>
    </div>
  );
};

export default BSolutions;

const SingleBSolution = ({image}) => {
  return (
    <div className="col-4 mb-4">
      <div>
        <img src={image} alt="Business Solution" className="position-relative" />
      </div>
      <div style={{position: 'absolute', bottom: "0px", left: "15px"}}>
        <img src="/images/bgs-corner-1.png" alt="Background" />
      </div>
      <div style={{position: 'absolute', bottom: "0px", left: "15px", zIndex: 1}}>
        <img src="/images/bgs-corner-2.png" alt="Background" />
      </div>
      <div style={{position: 'absolute', left: '30px', bottom: '10px', color: 'white', zIndex: 10}}>
      <img src="/images/arrow-btn-white.png" alt="Arrow Button" style={{cursor: 'pointer', marginBottom: '10px'}} />
      <h6 style={{fontSize: '20px'}}>Free Consulting</h6>
      <p>Join us for consultatoins</p>
      </div>
    </div>
  )
}
