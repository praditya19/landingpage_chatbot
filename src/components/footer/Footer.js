import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <h3>Mitra Mediatech Software</h3>
                <p><strong>Support Center</strong> <br />mediatechsoftware18@gmail.com</p>
                <ul>
                    <li><a href="#facebook"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="#twitter"><i className="fab fa-twitter-square"></i></a></li>
                    <li><a href="#instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer;