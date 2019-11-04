import React from 'react';
import './main.css';

import logo from '../assets/logo.jpg';
import mouse from '../assets/mouse.svg';
import coding from '../assets/coding.svg';
import gamepad from '../assets/gamepad.svg';
import pen from '../assets/pen.svg';
import smartphone from '../assets/smartphone.svg';
import about_img from '../assets/about_img.gif';
import tecnologies from '../assets/tecnologies.jpg';

export default function Main({ match }) {

    return (
        <div className="main-container">
            <nav>
                <div className="_float_icons">
                    <div className="_icon _mouse">
                        <i className="_mouse_i">
                            <img src={mouse} alt="" />
                        </i>
                    </div>
                    <div className="_icon _coding">
                        <i className="_coding_i">
                            <img src={coding} alt="" />
                        </i>
                    </div>
                    <div className="_icon _gamepad">
                        <i className="_gamepad_i">
                            <img src={gamepad} alt="" />
                        </i>
                    </div>
                    <div className="_icon _pen">
                        <i className="_pen_i">
                            <img src={pen} alt="" />
                        </i>
                    </div>
                    <div className="_icon _smartphone">
                        <i className="_smartphone_i">
                            <img src={smartphone} alt="" />
                        </i>
                    </div>
                </div>
                <div className="logo">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                        <img src={logo} alt="tindev" />
                    </a>
                </div>
                <ul className="menu">
                    <li>
                        <p>funcionou</p>
                    </li>
                </ul>
                <ul className="social-media">
                    <li className="linkedin">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="github">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="linkedin">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="about">
                <div className="about_image">
                    <div className="about_img">
                        <img src={about_img} alt="" />
                    </div>
                </div>

                <div className="about_text">
                    <h2>About</h2>
                    <p>
                        I started programming in 2016 through Workana, first contact with Wordpress and PHP.
                        I worked on Rakuten, Tray, Shopify and Wordpress layout projects:
                        barberjack.com.br
                        bookdistribuidora.com.br
                        Developed projects at Workana from 2016 to 2018, worked with the following technologies:
                        HTML,
                        CSS,
                        JavaScript,
                        PHP,
                        Gulp.
                        I started at Geek Development where we developed Wordpress, Web Systems and Layout projects.
                        Technologies I work for at Geek:
                        HTML5 Semantic,
                        SASS,
                        Gulp,
                        NodeJs,
                        React,
                        React Native,
                        PHP,
                        Python.
                    </p>
                </div>
            </section>

            <section className="tecnologies">

                <div className="tecnologies_text">
                    <h2>Technologies</h2>
                    <p>
                        Most recently I have been working in the React ecosystem with all the usual
                        suspects i.e Redux, TypeScript, Webpack, etc. I'm a big fan of all things CSS,
                        and spend copious amounts of time browsing Codepen as well as contributing some
                        pens myself.
                    </p>
                </div>

                <div className="tecnologies_image">
                    <div className="tecnologies_img">
                        <img src={tecnologies} alt="" />
                    </div>
                </div>


            </section>
            <footer>
                <ul className="footer_page">
                    <li className="linkedin_footer">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                    </li>

                    <li className="linkedin_footer">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                    </li>

                     <li className="linkedin_footer">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}