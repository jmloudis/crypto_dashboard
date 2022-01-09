import { useState} from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery} from "../services/cryptoApi";

function Currencies(){

    const {data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

    console.log(cryptos)

    if (cryptos.symbol === 'SHIB') {
        const shiba = millify(cryptos.currency.price, {precision: 10})
        
    }


    return (
        <div>
            <Row gutters={[32, 32]} className="crypto-card-container">
                {cryptos.map((currency) =>(
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price, {
                                    precision: 3
                                })}</p>
                                <p>MarketCap: {millify(currency.marketCap)}</p>
                                <p>24h Change: {millify(currency.change)}%</p>

                            </Card>
                        </Link>

                    </Col>
                ))}
            </Row>
            Crypto Currencies
        </div>

    );
}

export default Currencies;