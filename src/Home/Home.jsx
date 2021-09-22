import React from "react";
import "../Style.css";

const Home = () => {
  return (
    <div>
      {/* <!-- home section starts  --> */}

      <section className="home" id="home">
        <div className="content">
          <h3>fresh coffee in the morning</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>
          <a href="#" className="btn">
            get yours now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
