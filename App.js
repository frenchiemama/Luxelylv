import logo from './mainpagelogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to LuxelyLV, where luxury meets convenience in the heart of Las Vegas.
        Our exclusive collection of designer dresses is curated for those who love to make an entrance—whether 
        it’s a high-profile event, a romantic evening, or a night of pure indulgence on the Strip. Effortless 
        elegance is just a rental away—select your dream look, wear it with confidence, and return it hassle-free. 
        Because unforgettable moments deserve unforgettable style.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/luxelylv/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >Instagram @luxelylv
        </a>
      </header>
    </div>
  );
}

export default App;
