import CurrencyConverter from "./CurrencyConverter";
import React from 'react';
import {Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import icon from '../Images/world.png'

function NavBar() {

    return (
        // Very Simple Navbar UI
        <div className="nav-container">
            <div className="logo-container">
                <Avatar />
                {/*<Typography.Title level={2} className="logo">*/}
                {/*    <Link to='/'>CryptoWorld</Link>*/}
                {/*</Typography.Title>*/}
            </div>
            <ul>
                <li><a href="index.js">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    );


}

export default NavBar;