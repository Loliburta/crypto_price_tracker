export const apiCall = async (
  setCoins: React.Dispatch<React.SetStateAction<never[]>>,
  counter: number
) => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${counter}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
    );
    const r = await res.json();
    setCoins(r);
  } catch (err) {
    console.log(err);
  }
};
