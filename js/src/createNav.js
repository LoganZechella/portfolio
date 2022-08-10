import React from 'react';
import ReactDOM, { render } from 'react-dom';

function createNavbar() {
    render(<Navbar />, document.getElementById('navbar'));
        return(
            <div class="dropdown-nav">
                <div class="menu-container">
                    <div class="burger-container">
                        <div id="burger">
                            <div class="bar topBar"></div>
                            <div class="bar btmBar"></div>
                        </div>
                    </div>
                    <ul class="menu">
                        <li class="menu-item"><a href="#">About</a></li>
                        <li class="menu-item"><a href="#signup-window" onclick="signupLink()">Waitlist</a></li>
                        <li class="menu-item"><a href="#login-window" onclick="loginLink()">Login</a></li>
                        <li class="menu-item"><a href="landingPage.html">PRYSM</a></li>
                    </ul>
                </div>
            </div>
        )
};

export default createNavbar;
