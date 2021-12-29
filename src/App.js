import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';
import NavBar from './components/NavBar';

// const App = () => {

function App() {

  return (

    <div className="app">
        <div className="navBar1">
            <NavBar/>
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
