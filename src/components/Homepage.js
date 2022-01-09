import NavBar from "./NavBar";
import millify from "millify";
import {Typography, Row, Col, Statistic} from "antd";
import {Link } from "react-router-dom";
import { useGetCryptosQuery} from "../services/cryptoApi";
import Currencies from "./Currencies";


const {Title} = Typography

function Homepage() {

    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log(data);

    if(isFetching) return 'Loading';

    return (
        <div>
            <title level={2} className="heading"> Current Crypto Stats</title>
            <Row>
                <Col span={12}><Statistic title="Total Coins" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Crypto Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className={"home-title"}>Top 10 Currencies</Title>
                <Title level={3} className={"show-more"}><a href='Currencies.js'>Show More</a></Title>

            </div>
            <Currencies simplified/>
                <div className="home-heading-container">
                    <Title level={2} className={"home-title"}>Latest Crypto News</Title>
                    <Title level={3} className={"show-more"}><a href='Currencies.js'>Show More</a></Title>
                </div>

        </div>

    );
}

export default Homepage;