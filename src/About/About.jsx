import React from "react";
import about from "../images/about-img.jpeg";

const About = () => {
  return (
    <div>
      {/* <!-- about section starts  --> */}

      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>

        <div className="row">
          <div className="image">
            <img src={about} alt="" />
          </div>

          <div className="content">
            <h3>what makes our coffee special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
