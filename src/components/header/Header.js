import React, { Component } from 'react';
import Navbar from './Navbar';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar />
                <div className="top">
                    <h1> Solusi Cerdas <br />untuk Perusahaan Anda</h1>
                </div>
            </header>
        )
    }
}

export default Header;
