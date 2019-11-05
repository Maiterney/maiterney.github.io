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
import {Line} from 'react-chartjs-2';

export default function Main({ match }) {

    let chartOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
            xAxes: [{
                ticks: { display: false },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: { display: false },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        }
      };
      

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: "Wordpress",
            fillColor: "rgba(41, 128, 185, 0.2)",
            strokeColor: "none",
            pointColor: "rgba(255, 255, 255, 0.2)",
            pointStrokeColor: "rgba(41, 128, 185, 0)",
            pointHighlightFill: "rgba(255, 255, 255, 0.2)",
            pointHighlightStroke: "rgba(41, 128, 185, 0)",
            data: [0, 10, 20, 42, 44, 50, 52, 53, 55, 68, 71, 74]
          }, {
            label: "React",
            fillColor: "rgba(41, 128, 185, 0.2)",
            strokeColor: "none",
            pointColor: "rgba(255, 255, 255, 0.2)",
            pointStrokeColor: "rgba(41, 128, 185, 0)",
            pointHighlightFill: "rgba(255, 255, 255, 0.2)",
            pointHighlightStroke: "rgba(41, 128, 185, 0)",
            data: [28, 33, 42, 49, 56, 57, 60, 62, 67, 70, 72, 77]
          }]
      };

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
                        <p className="_title_name">Maiterney</p>
                        <h4 className="_career">Desenvolvedor Front-end</h4>
                        <h4 className="_career _ghost">HTML5 > SASS > GULP > JAVASCRIPT</h4>
                        <h4 className="_career _ghost _negative_rotate">WORDPRESS > PHP > REACT > NODE</h4>
                    </li>
                </ul>
                <ul className="social-media">
                    <li className="linkedin">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="github">
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/Maiterney">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="codepen">
                        <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/dashboard/">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
                <Line 
                data={data} 
                options={chartOptions}
                />
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
                    <li className="linkedin">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maiterney-vilela-15607214a/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="github">
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/Maiterney">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="codepen">
                        <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/dashboard/">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}