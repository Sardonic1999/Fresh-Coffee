import React from "react";
import menu1 from "../images/menu-1.png";
import menu2 from "../images/menu-2.png";
import menu3 from "../images/menu-3.png";
import menu4 from "../images/menu-4.png";
import menu5 from "../images/menu-5.png";
import menu6 from "../images/menu-6.png";

const Menu = () => {
  return (
    <div>
      {/* <!-- menu section starts  --> */}

      <section className="menu" id="menu">
        <h1 className="heading">
          {" "}
          our <span>menu</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={menu1} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu2} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu3} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu4} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu5} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu6} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
