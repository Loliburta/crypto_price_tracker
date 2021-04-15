interface Props {
  image: string;
  marketCapRank: number;
  name: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange1: number;
  priceChange24: number;
  priceChange7d: number;
  marketCap: number;
}

export const Coin: React.FC<Props> = ({
  image,
  marketCapRank,
  name,
  symbol,
  price,
  volume,
  priceChange1,
  priceChange24,
  priceChange7d,
  marketCap,
}) => {
  return (
    <>
      <tr>
        <td className="coin__td">
          <div className="coin__rank">{marketCapRank}</div>
        </td>
        <td className="coin__td">
          <div className="coin__main">
            <img className="coin__main__image" src={image} alt="altcoin icon" />
            <div className="coin__main__name">{name}</div>
            <p className="coin__main__symbol">{symbol?.toUpperCase()}</p>
          </div>
        </td>
        <td className="coin__td">
          <div className="coin__data__price">${price}</div>
        </td>
        <td className="coin__td">
          {priceChange1 < 0 ? (
            <div className="coin__data__change--down">
              {priceChange1?.toFixed(2)}%
            </div>
          ) : (
            <div className="coin__data__change--up">
              +{priceChange1?.toFixed(2)}%
            </div>
          )}
        </td>
        <td className="coin__td">
          {priceChange24 < 0 ? (
            <div className="coin__data__change--down">
              {priceChange24?.toFixed(2)}%
            </div>
          ) : (
            <div className="coin__data__change--up">
              +{priceChange24?.toFixed(2)}%
            </div>
          )}
        </td>
        <td className="coin__td">
          {priceChange7d < 0 ? (
            <div className="coin__data__change--down">
              {priceChange7d?.toFixed(2)}%
            </div>
          ) : (
            <div className="coin__data__change--up">
              +{priceChange7d?.toFixed(2)}%
            </div>
          )}
        </td>
        <td className="coin__td">
          <div className="coin__data__marketcap">
            ${marketCap.toLocaleString()}
          </div>
        </td>
        <td className="coin__td">
          <div className="coin__data__volume">${volume.toLocaleString()}</div>
        </td>
      </tr>
    </>
  );
};
