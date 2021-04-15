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

interface Props {
  id: string;
  market_cap_rank: number;
  name: string;
  image: string;
  current_price: number;
  symbol: string;
  market_cap: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
}
export const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(1);
  const filteredCoins = coins.filter((coin: { name: string }) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    apiCall(setCoins, counter);
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
              <th className="table__rank table__th">#</th>
              <th className="table__name table__th">Name</th>
              <th className="table__th">Price</th>
              <th className="table__th">1h %</th>
              <th className="table__th">24h %</th>
              <th className="table__th">7d %</th>
              <th className="table__th">Market Cap</th>
              <th className="table__th">Volume(24h)</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin: Props) => (
              <Coin
                key={coin.id}
                marketCapRank={coin.market_cap_rank}
                name={coin.name}
                image={coin.image}
                price={coin.current_price}
                symbol={coin.symbol}
                marketCap={coin.market_cap}
                priceChange1={coin.price_change_percentage_1h_in_currency}
                priceChange24={coin.price_change_percentage_24h}
                priceChange7d={coin.price_change_percentage_7d_in_currency}
                volume={coin.total_volume}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
