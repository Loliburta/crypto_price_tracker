import { useState, useEffect } from "react";
import "./App.scss";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
export const App = () => {
  const [coins, setCoins] = useState([]);
  // useEffect(() => {
  //   const apiCall = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //       );
  //       const r = await res.json();
  //       console.log(r);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   apiCall();
  // }, []);
  return (
    <>
      <div className="searchbar">
        <h1 className="searchbar__text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="searchbar__input"
          />
        </form>
      </div>
    </>
  );
};
