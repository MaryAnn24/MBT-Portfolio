import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="linkedin.com/in/me-ann-tapiru"
        className="home__social-icon"
        target="__blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.facebook.com/BaricanteSexy/"
        className="home__social-icon"
        target="__blank"
      >
        <i className="uil uil-facebook"></i>
      </a>
      <a
        href="mailto:maryann.baricante24@gmail.com"
        className="home__social-icon"
        target="__blank"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
