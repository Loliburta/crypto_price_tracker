import { useState, useEffect } from "react";
import { Coin } from "./Coin/Coin";
import "./App.scss";
export const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const r = await res.json();
        console.log(r);
        setCoins(r);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);
  const filteredCoins = coins.filter((coin: { name: string }) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="searchbar">
        <h1 className="searchbar__text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="searchbar__input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        {filteredCoins.map(
          (coin: {
            id: string;
            name: string;
            image: string;
            current_price: number;
            symbol: string;
            market_cap: number;
          }) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              volume={coin.market_cap}
            />
          )
        )}
      </div>
    </>
  );
};