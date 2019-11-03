import React from 'react';
import './main.css';

import logo from '../assets/logo.jpg';


export default function Main({ match }) {

    return (
        <div className="main-container">
            <nav>
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