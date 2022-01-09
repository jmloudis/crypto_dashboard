import CurrencyConverter from "../services/CurrencyConverter";
import React from 'react';
import {Button, Menu, Typography, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, QuestionOutlined, StockOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;

import icon from '../Images/world.png'

function NavBar() {

    const { SubMenu } = Menu;

    return (
        // Very Simple Navbar UI
        <div className="nav-container">
            <div className="logo-container">
                <Avatar />
                <Typography.Title level={2} className="logo">
                    <Link to='/'>CryptoWorld</Link>
                </Typography.Title>
            </div>
            <div className="rightMenu">
            {/*<div className="navbar-container">*/}
                <Menu theme="dark" className="navbar-container" mode="horizontal">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <a href="/">Home</a>
                    </Menu.Item>
                    <SubMenu className="submenu-container" title="Currencies" style={{}}>
                        <Menu.ItemGroup title="item 1" className="dropdown-one">
                            <Menu.Item icon={<QuestionOutlined/>} key="1">Option 1</Menu.Item>
                            <Menu.Item icon={<QuestionOutlined/>} key="2">Option 2</Menu.Item>

                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="item 2">
                            <Menu.Item icon={<StockOutlined/>}>
                                <a href="Stock.js">Option 3</a>
                                <a href="Stock2.js">Option 4</a>
                            </Menu.Item>
                        </Menu.ItemGroup>

                    </SubMenu>
                    <Menu.Item icon={<FundOutlined/>}>
                        <a href="/Currencies.js">Currencies</a>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <a href="/Exchanges.js">Exchanges</a>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <a href="/news.js">News</a>
                    </Menu.Item>

                </Menu>
            </div>
            {/*</div>*/}

            {/*<ul>*/}
            {/*    <li><a href="index.js">Home</a></li>*/}
            {/*    <li><a href="news.asp">News</a></li>*/}
            {/*    <li><a href="contact.asp">Contact</a></li>*/}
            {/*    <li><a href="about.asp">About</a></li>*/}
            {/*</ul>*/}
        </div>
    );


}

export default NavBar;