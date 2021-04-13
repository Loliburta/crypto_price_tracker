export const apiCall = async (
  setCoins: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const r = await res.json();
    setCoins(r);
  } catch (err) {
    console.log(err);
  }
};
