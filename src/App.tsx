import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPrice, setCurrentPrice] = useState("0");

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://api.coincap.io/v2/assets/bitcoin').then((response => {
        return response?.data?.data?.priceUsd;
      }));
      const parsedPrice = Number.parseFloat(data).toFixed(2);
      setCurrentPrice(parsedPrice); 
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Current BTC price is:</h1>
      <div className="card">
        <span>
          $ {currentPrice}
        </span>
      </div>
      <p className="author-credits">
        Made with 💛 by <a href='https://github.com/MarcosRSouza' target='_blank'>MarcosRSouza.dev</a>
      </p>
    </>
  )
}

export default App;
