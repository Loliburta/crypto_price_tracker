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
      <div className="headline">Coinmarketcrap</div>
      <div className="searchbar">
        <Icon className="searchbar__icon" icon={magnifyingGlass} />
        <input
          type="text"
          placeholder="Search"
          className="searchbar__input"
          onChange={handleChange}
        />
      </div>

      <table className="coin">
        <thead>
          <tr>
            <th className="table__name">Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
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
    </>
  );
};
