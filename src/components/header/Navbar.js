import React, { Component } from 'react';
import './Navbar.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li style={{ fontSize: 20 }}>Mitra Mediatech Software</li>
                </ul>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portofolio">Portofolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;