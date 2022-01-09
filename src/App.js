import NewsFeed from './services/NewsFeed';
import CurrencyConverter from './services/CurrencyConverter';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Currencies from './components/Currencies';
import Details from './components/Details';
import Exchanges from './components/Exchanges';
import News from './components/News';



import CryptoDash from "./components/CryptoDash";
// import { NavBar } from './components';
import "./app.css";
import {BrowserRouter , Route,  Routes, Link, Router} from "react-router-dom";
import {Layout, Typography, Space} from 'antd';

// const App = () => {

function App() {

  return (

      <div className="app">
          <div className="main">
              {/*<Layout>*/}
              <div className="navbar">
                  <NavBar />
              </div>
                  <div className="routes">
                      <Routes>
                          <Route path="/" element={<Homepage />}/>
                          <Route path="/currencies" element={<Currencies />}/>
                          <Route path="/crypto/:coinId" element={<Details />}/>
                          <Route path="/exchanges" element={<Exchanges />}/>
                          <Route path="/news" element={<News />}/>

                      </Routes>
                  </div>
              <div className="footer">
                  <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                      CryptoWorld <br/>
                      Developed by Jordan Loudis<br/>
                      <Space>
                          <a href="https://github.com/jmloudis">Github</a>
                          <a href="https://www.linkedin.com/in/jordan-loudis-4856561ba/">LinkedIn</a>
                          <a href="https://twitter.com/JordanDev7">Twitter</a>
                      </Space>
                  </Typography.Title>

              </div>

          </div>


      </div>



  );
}

export default App;
