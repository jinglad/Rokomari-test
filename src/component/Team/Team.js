import React from "react";

const Team = () => {
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
            Meet Our Advisors
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
        We have an Exclusive <br />
        Team Member
      </h2>
      <div className="row mt-4">
        <SingleUser image="/images/team-1.png" />
        <SingleUser image="/images/team-2.png" />
        <SingleUser image="/images/team-3.png" />
        <SingleUser image="/images/team-4.png" />
      </div>
    </div>
  );
};

export default Team;

const SingleUser = ({ image }) => {
  return (
    <div className="col-3">
      <div className="text-center">
        <img src={image} alt="Team member" style={{position: 'relative'}} />
        <h6 className="mt-3" style={{fontSize: '26px'}}>User Name</h6>
        <p>Business Developer</p>
      </div>
      <div style={{ position: "absolute", top: "0px", left: "15px", zIndex: 1 }}>
        <img src="/images/team-bgc-1.png" alt="Background" />
      </div>
      <div
        style={{ position: "absolute", top: "0px", left: "15px" }}
      >
        <img src="/images/team-bgc-2.png" alt="Background" />
      </div>
      <div>
        <a href="https://www.facebook.com/" target="_blank" norefferer>
        <img src="/images/fb-icon.png" alt="Fb Icon" style={{ position: "absolute", top: "10px", left: "35px", zIndex:10 }} />
        </a>
      </div>
    </div>
  );
};
