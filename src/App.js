import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';
import NavBar from './components/NavBar';

// import { NavBar } from './components';
// const App = () => {
// import "./app.css";

function App() {

  return (

    <div className="app">
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

export default App;
