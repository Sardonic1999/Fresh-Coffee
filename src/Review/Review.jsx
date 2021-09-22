import React from "react";
import quo1 from "../images/quote-img.png";
import pic1 from "../images/pic-1.png";
import pic2 from "../images/pic-2.png";
import pic3 from "../images/pic-3.png";

const Review = () => {
  return (
    <div>
      {/* <!-- review section starts  --> */}

      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          customer's <span>review</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={quo1} alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
              laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
              minus vel? Nemo.
            </p>
            <img src={pic1} className="user" alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="box">
            <img src={quo1} alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
              laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
              minus vel? Nemo.
            </p>
            <img src={pic2} className="user" alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="box">
            <img src={quo1} alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
              laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
              minus vel? Nemo.
            </p>
            <img src={pic3} className="user" alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
