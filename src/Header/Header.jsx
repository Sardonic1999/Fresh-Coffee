import React from "react";
import "../Style.css";
import logo from "../images/logo.png";
import cart1 from "../images/cart-item-1.png";
import cart2 from "../images/cart-item-2.png";
import cart3 from "../images/cart-item-3.png";
import cart4 from "../images/cart-item-4.png";

const Header = () => {
  return (
    <div>
      {/* <!-- header section starts  --> */}

      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-bars" id="menu-btn"></div>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" className="fas fa-search"></label>
        </div>

        <div className="cart-items-container">
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={cart1} alt="" />
            <div className="content">
              <h3>Product 01</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={cart2} alt="" />
            <div className="content">
              <h3>Product 02</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={cart3} alt="" />
            <div className="content">
              <h3>Product 03</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={cart4} alt="" />
            <div className="content">
              <h3>Product 04</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
