import React from 'react';
import { useState } from 'react';
import './services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
        
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Full stack <br /> Developer
                    </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Full stack Web Developer</h3>
                        <p className="services__modal-description">Service with more than
                            8 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Work with development teams and product managers to ideate software solutions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Build the front-end of applications through appealing UI/UX design.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Develop and manage well-functioning databases and back-end features.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Test software to ensure responsiveness and efficiency.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Create security and data protection settings.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Build features and applications with a mobile responsive design.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Write technical documentation.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Work with data scientists and analysts to improve software.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        WordPress <br /> Web Development
                    </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"> WordPress Web Development</h3>
                        <p className="services__modal-description">Service with more than
                            3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Design and develop websites ensuring strong optimization and functionality.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Good hands in WordPress and woo commerce.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Develop WordPress custom themes, templates and plugins.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Evaluating code to ensure it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        IT <br /> Instructor
                    </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">IT Teacher / Instructor</h3>
                        <p className="services__modal-description">8 years of experience in teaching High School and College Students.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Design and organize lesson plans and other instructional programs.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Plan, schedule and implement curriculum-based classes.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Plan and provide in-house as well as online classes for the students.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Maintain, manage, and organize all instructional materials.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Implement best teaching practices to enhance student-learning processes.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">Respond to student inquiries and provide meaningful advice.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>

        

    </section>
  )
}

export default Services