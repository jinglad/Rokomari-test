import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container py-5">
      <div className="row">
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
              Company Skills
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
            We Have Experience <br />
            for Business Planning
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
            type specimen book.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even.
          </p>
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
            Learn More
          </button>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 mb-5">
              <div style={{ width: 200, height: 200, margin: 'auto' }}>
                <CircularProgressbar
                  value={66}
                  styles={{
                    path: {
                      stroke: "#FF4917",
                    },
                  }}
                />
                <p className="skills-heading">Business Strategy</p>
              </div>
            </div>
            <div className="col-6 mb-5">
              <div style={{ width: 200, height: 200, margin: 'auto' }}>
                <CircularProgressbar
                  value={76}
                  styles={{
                    path: {
                      stroke: "#FF4917",
                    },
                  }}
                />
                <p className="skills-heading">Financial Planning</p>
              </div>
            </div>
            <div className="col-6">
              <div style={{ width: 200, height: 200, margin: 'auto' }}>
                <CircularProgressbar
                  value={46}
                  styles={{
                    path: {
                      stroke: "#FF4917",
                    },
                  }}
                />
              </div>
              <p className="skills-heading">Marketing Strategy</p>
            </div>
            <div className="col-6">
              <div style={{ width: 200, height: 200, margin: 'auto' }}>
                <CircularProgressbar
                  value={50}
                  styles={{
                    path: {
                      stroke: "#FF4917",
                    },
                  }}
                />
              </div>
              <p className="skills-heading">Relationship Buildup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
