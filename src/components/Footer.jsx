import React from 'react';
import logoBlack from '../assets/photos/icons/logo-black.PNG';
import facebookIcon from '../assets/photos/icons/facebook.PNG';
import youtubeIcon from '../assets/photos/icons/youtube.PNG';
import instagramIcon from '../assets/photos/icons/instagram.PNG';

import "../styles/shared.css";
import "../styles/style.css";


const Footer = () => {
    return (
        <footer>
            <img src={logoBlack} alt="logo-black" />
            <h3>Hamdaoui Academy</h3>
            <p>
                Tunisian E-learning platform that provides free and paid Web development
                courses and tutorials in the Arabic language.
            </p>

            <ul id="social-media">
                <li>
                    <a href="https://www.facebook.com/">
                        <img src={facebookIcon} alt="facebook_icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <img src={youtubeIcon} alt="youtube_icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <img src={instagramIcon} alt="instagram_icon" />
                    </a>
                </li>
            </ul>

            <ul className="more-info">
                <li><a href="">Contact Us</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">Sitemap</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Help and Support</a></li>
                <li><a href="">Tests</a></li>
            </ul>

            <p id="rights">All rights reserved for HamdaouiAcademy.com © 2022</p>
        </footer>
    );
};

export default Footer;
