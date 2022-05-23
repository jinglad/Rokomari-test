import React from "react";

const Blog = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <div>
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
              Important Articles
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
            Something Know Our <br />
            Latest News {"&"} Blog
          </h2>
        </div>
        <div>
          <button
            style={{
              padding: "15px 30px",
              border: "none",
              borderRadius: "34px",
              background: "#FF4917",
              color: "white",
              fontSize: "20px",
              fontWeight: 700,
              marginTop: "50px ",
            }}
          >
            View All News
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <SingleBlog
          title="How Performance Visiblety with GitLab CI and Hood"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been"
          image="/images/blog-1.png"
        />
        <SingleBlog title="How Performance Visiblety with GitLab CI and Hood"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been"
          image="/images/blog-2.png" />
        <SingleBlog title="How Performance Visiblety with GitLab CI and Hood"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been"
          image="/images/blog-3.png" />
      </div>
    </div>
  );
};

export default Blog;

const SingleBlog = ({ title, description, image }) => {
  return (
    <div className="col-4">
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" style={{
              color: '#FF4917',
            }}>
              Learn More <img src="/images/blog-arrow.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
