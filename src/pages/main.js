import React from 'react';
import './main.css';

import logo from '../assets/logo.jpg';
import mouse from '../assets/mouse.svg';
import coding from '../assets/coding.svg';
import gamepad from '../assets/gamepad.svg';
import pen from '../assets/pen.svg';
import smartphone from '../assets/smartphone.svg';

export default function Main({ match }) {

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

            <section className="">

            </section>
        </div>
    );
}