import { useState, useEffect } from "react";
// Components
import { Coin } from "./Coin/Coin";
// Utils
import { apiCall } from "../utils/apiCall";
// Icons
import { Icon } from "@iconify/react";
import magnifyingGlass from "@iconify-icons/radix-icons/magnifying-glass";
// SCSS
import "./App.scss";

export const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const filteredCoins = coins.filter((coin: { name: string }) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    apiCall(setCoins);
  }, []);

  return (
    <>
      <div className="headline">CoinTracker</div>
      <div className="searchbar">
        <label htmlFor="input">
          <Icon className="searchbar__icon" icon={magnifyingGlass} />
        </label>
        <input
          id="input"
          type="text"
          placeholder="Search"
          className="searchbar__input"
          onChange={handleChange}
        />
      </div>

      <div className="table__wrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="table__name table__th">Name</th>
              <th className="table__th">Price</th>
              <th className="table__th">24h %</th>
              <th className="table__th">Market Cap</th>
              <th className="table__th">Volume(24h)</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map(
              (coin: {
                id: string;
                name: string;
                image: string;
                current_price: number;
                symbol: string;
                market_cap: number;
                price_change_percentage_24h: number;
                total_volume: number;
              }) => (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketCap={coin.market_cap}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
