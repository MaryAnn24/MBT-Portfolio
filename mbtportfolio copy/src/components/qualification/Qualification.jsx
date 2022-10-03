import React from 'react';
import { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id="skills">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master in Information Technology</h3>
                            <span className="qualification__subtitle">Angeles University Foundation - Philippines</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 Graduate
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachelor of Science in Information Technology</h3>
                            <span className="qualification__subtitle">Philippines</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2010 - 2013 (Graduate)
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Science in Secondary Education</h3>
                            <span className="qualification__subtitle">Philippines</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Unit Earner
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">License Professional Teacher</h3>
                            <span className="qualification__subtitle">Philippines</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Freelance</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">IT Instructor</h3>
                            <span className="qualification__subtitle">Philippines</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Programmer - Wordpress Developer</h3>
                            <span className="qualification__subtitle">Philippines</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2015
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification