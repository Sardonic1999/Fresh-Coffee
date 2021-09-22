import React from "react";

const Contact = () => {
  return (
    <div>
      {/* <!-- contact section starts  --> */}

      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>contact</span> us{" "}
        </h1>

        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95900.66119931987!2d69.25482467724606!3d41.31113336611235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1632331260826!5m2!1suz!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
