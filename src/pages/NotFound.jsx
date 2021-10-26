import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function NotFound() {
    return (
        <div className="notfound_container">
            <img src="../../assets/images/404-notfound.gif" alt="" />
            <Link className="link_style" to="/">Vamos al inicio</Link>
        </div>
    )
};

export default NotFound;