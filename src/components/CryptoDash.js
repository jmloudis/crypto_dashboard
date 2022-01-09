import NavBar from "./NavBar";
import CurrencyConverter from "../services/CurrencyConverter";
import NewsFeed from "../services/NewsFeed";
import Rank from "./Rank";


function CryptoDash() {
     return (
         <div className="app">
             <div className="navbar">
                 <NavBar />
             </div>
             <h1>Crypto Dashboard</h1>
             <div className="app_wrapper">
                 <CurrencyConverter />
                 <NewsFeed />
             </div>
         </div>
     );
}

export default CryptoDash;