import {useState} from "react";
import ExchangeRate from './ExchangeRate';
import axios from "axios";

function CurrencyConverter() {

    const currencies = ['USD', 'BTC', 'ETH', 'XRP', 'ADA', 'LTC', 'SHIB'];


    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD');
    const [amount, setAmount] = useState(1);

    // const [exchangeRate, setExchangeRate] = useState(0)
    //const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC')
    //const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('USD')

    // New object
    const [exchangedData, setExchangedData] = useState({
        primaryCurrency: 'BTC',
        secondaryCurrency: 'BTC',
        ExchangeRate: 0
    })
    const [result, setResult] =useState(0)

    console.log(amount)

    // API convert function for Alpha Vantage
    function convert() {

        var axios = require("axios").default;

        var options = {

            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };

        axios.request(options).then(function (response) {
            //console.log(response.data);

            // Specific API Documentation data
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            //setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);

            // setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
            // setSecondaryCurrencyExchanged(chosenSecondaryCurrency);

            setExchangedData({
                primaryCurrency: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                ExchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
            })


        }).catch(function (error) {
            console.error(error);
        });


    }
    console.log(exchangedData.ExchangeRate);

    return (
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>

            <div className="input-box">
            <table>
                <tbody>
                <tr>
                    <td>Primary Currency</td>
                    <td>
                        <input
                            type="number"
                            name="currency-amount-1"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </td>
                    <td>
                        <select
                            value={chosenPrimaryCurrency}
                            name="currency-option-1"
                            className="currency-options"
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                        >

                            {currencies.map(( i, _index )=> (<option key={_index}>{i}</option>))}

                        </select>


                    </td>

                </tr>
                <tr>
                    <td>Secondary Currency</td>
                    <td>
                        <input
                            type="number"
                            name="currency-amount-2"
                            value={result}
                            disabled={true}
                        />
                    </td>
                    <td>
                        <select
                            value={chosenSecondaryCurrency}
                            name="currency-option-2"
                            className="currency-options"
                            onChange={(e) => setChosenSecondaryCurrency(e.target.value)}

                        >

                            {currencies.map(( i, _index )=> (<option key={_index}>{i}</option>))}

                        </select>


                    </td>

                </tr>
                </tbody>
            </table>

                <button id="convert-button" onClick={convert}>
                    Convert
                </button>
            </div>

            <ExchangeRate
                exchangedData={exchangedData}
                // chosenPrimaryCurrency={primaryCurrencyExchanged}
                // chosenSecondaryCurrency={secondaryCurrencyExchanged}

            />
        </div>
    );
}

export default CurrencyConverter;