interface Props {
  image: string;
  name: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange: number;
  marketCap: number;
}

export const Coin: React.FC<Props> = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <>
      <tr>
        <td className="coin__td">
          <div className="coin__main">
            <img className="coin__main__image" src={image} alt="altcoin icon" />
            <div className="coin__main__name">{name}</div>
            <p className="coin__main__symbol">{symbol.toUpperCase()}</p>
          </div>
        </td>
        <td className="coin__td">
          <div className="coin__data__price">${price}</div>
        </td>
        <td className="coin__td">
          {priceChange < 0 ? (
            <div className="coin__data__change--down">
              {priceChange.toFixed(2)}%
            </div>
          ) : (
            <div className="coin__data__change--up">
              +{priceChange.toFixed(2)}%
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
