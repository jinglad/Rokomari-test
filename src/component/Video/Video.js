import React, { useEffect } from "react";
import "./Video.css";

const Video = () => {

  return (
    <div style={{ height: "auto", widht: "100%", position: 'relative' }} className="my-5">
      {/* <video controls autoplay muted loop id="myVideo">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video> */}
      <div className="video-after-container">
        <div className="container py-5">
          <div className="row">
            <div className="col-8">
              <div className="d-flex">
                <hr
                  style={{
                    height: "2px",
                    background: "#FFF",
                    width: "30px",
                    marginRight: "20px",
                    // marginTop: "-1/px",
                  }}
                />
                <h6
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#FFF",
                  }}
                >
                  Watch Videos
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
                Exclusive Video Presentation About Recent Project
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
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
                Need Any Project
              </button>
            </div>
            <div className="col-4 position-relative">
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "white",
                    position: "relative",
                    border: "2px solid black",
                  }}
                >
                  <img
                    src="/images/play-button.png"
                    alt="Play Button"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
