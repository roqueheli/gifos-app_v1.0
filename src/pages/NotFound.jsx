import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'

function NotFound() {
    return (
        <div className="notfound_container">
            <img src="../../assets/images/404-notfound.gif" alt="" />
            <Link className="link_style" to="/">
                <img src="https://img.icons8.com/ios/35/ffffff/home-page.png" alt="home" />
            </Link>
        </div>
    )
};

export default NotFound;