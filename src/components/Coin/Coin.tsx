interface Props {
  image: string;
  name: string;
  symbol: string;
  price: number;
  volume: number;
}

export const Coin: React.FC<Props> = ({
  image,
  name,
  symbol,
  price,
  volume,
}) => {
  return (
    <>
      <div className="coin__row">
        <div className="coin">
          <img src={image} alt="altcoin icon" />
          <h1>{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <div className="coin__data">
          <div className="coin__price">{price}</div>
          <div className="coin__volume">{volume}</div>
        </div>
      </div>
    </>
  );
};
