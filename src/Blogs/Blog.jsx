import React from "react";
import blog1 from "../images/blog-1.jpeg";
import blog2 from "../images/blog-2.jpeg";
import blog3 from "../images/blog-3.jpeg";

const Blog = () => {
  return (
    <div>
      {/* <!-- blogs section starts  --> */}

      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blog1} alt="" />
            </div>
            <div className="content">
              <a href="#" className="title">
                tasty and refreshing coffee
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog2} alt="" />
            </div>
            <div className="content">
              <a href="#" className="title">
                tasty and refreshing coffee
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="" />
            </div>
            <div className="content">
              <a href="#" className="title">
                tasty and refreshing coffee
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
