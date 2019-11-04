import React from 'react';
import './main.css';

import logo from '../assets/logo.jpg';
import mouse from '../assets/mouse.svg';
import coding from '../assets/coding.svg';
import gamepad from '../assets/gamepad.svg';
import pen from '../assets/pen.svg';
import smartphone from '../assets/smartphone.svg';
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
                            <img src={mouse} alt=""/>
                        </i>
                    </div>
                    <div className="_icon _coding">
                        <i className="_coding_i">
                            <img src={coding} alt=""/>
                        </i>
                    </div>
                    <div className="_icon _gamepad">
                        <i className="_gamepad_i">
                            <img src={gamepad} alt=""/>
                        </i>
                    </div>
                    <div className="_icon _pen">
                        <i className="_pen_i">
                            <img src={pen} alt=""/>
                        </i>
                    </div>
                    <div className="_icon _smartphone">
                        <i className="_smartphone_i">
                            <img src={smartphone} alt=""/>
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

            <section className="">

            </section>
        </div>
    );
}