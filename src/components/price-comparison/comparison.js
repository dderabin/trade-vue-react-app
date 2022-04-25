import React from "react";

const PriceItemList = ({ coinList }) => {
  return (
    <>
      {coinList.map((coin, index) => (
        <li key={index}>
          <div className="d-flex">
            <div className="my-auto">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                alt=""
                className="img-fluid circle-icon-1"
              />
            </div>
            <div>
              <div className="flex-column">
                <span className="font-14 text-dark font-bold">{coin.name}</span>
                <div className="divider"></div>
                <span className="font-12 d-block">
                  <span className="badge bg-info me-1">{coin.cmc_rank}</span>
                  <span className="symbols font-bold">{coin.symbol}</span>
                  <span className="font-11 fw-bolder ms-1">
                    Mcap{" "}
                    {(
                      parseFloat(coin.quote.USD.market_cap) / 1000000000
                    ).toFixed(2)}
                    B
                  </span>
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default PriceItemList;
