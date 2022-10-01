import React from 'react';
import "./about.css";
import AboutImg from "../../assets/mbt_pic.jpeg";
import CV from "../../assets/MBT_CV_2022_Sept.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title"> About Me</h2>
        <span className="section__subtitle"> My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
        </div>
    </section>
  )
}

export default About