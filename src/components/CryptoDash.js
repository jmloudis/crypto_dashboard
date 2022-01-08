import NavBar from "./NavBar";
import CurrencyConverter from "./CurrencyConverter";
import NewsFeed from "./NewsFeed";
import Rank from "./Rank";


function CryptoDash() {
     return (
         <div className="app-2">
             <div className="navBar1">
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