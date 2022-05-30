import React, { useState } from 'react';
import { useTraderHistory } from '../../hooks';
import { EXCHANGE_MAP } from '../../store/consts';
import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";

const Portfolio = () => {
  const { historyList } = useTraderHistory();
  const [toogle, setToogle] = useState(0);

  const showToogle = (i) => {
    if (i === toogle) {
      setToogle(0);
    } else {
      setToogle(i);
    }
  };

  return (
    <div className="card mb-0 card-light-grey">
      <div className="card-body mob-pad-0">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="bg-white">
              <tr>
                <th className="thincell"> </th>
                <th scope="col" className="text-center font ">
                  Date
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font ps-4">
                  Source
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font">
                  Exchange
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font">
                  Market
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font">
                  Excution
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font">
                  Ticker
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font">
                  Open Price
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col" className="text-center font">
                  Stop Loss
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              { historyList.map((item, index) => {
                return (<React.Fragment key={index}>
                  <tr>
                    <td className="small" onClick={() => showToogle(index + 1)}>
                      <img
                        src="/img/uploads/plus.svg"
                        alt=""
                        className="img-fluid text-center cursor-pointer"
                      />
                    </td>
                    <td className="text-center">{item.signalTime.split('T')[0]}</td>
                    <td className="text-center">{}</td>
                    <td className="text-center">{EXCHANGE_MAP[item.exchangePlatform]}</td>
                    <td className="text-center">{item.signalType}</td>
                    <td className="text-center">Market</td>
                    <td className="text-center">{item.symbol.from + item.symbol.to}</td>
                    <td className="text-center">{item?.entryPrice || ''}</td>
                    <td className="text-center">{item.stopLoss}</td>
                  </tr>
                  {toogle === index + 1 && (
                    <div className="toggle">
                      { item.targets.map((target, index) => {
                        return (
                          <p key={index} className={item.targets.length === index + 1 ? "mb-0" : ""}>
                            <strong>Take Profit {index + 1}:</strong> {parseFloat(target.amount).toFixed(2)}
                          </p>
                        )
                      })}
                    </div>
                  )}
                </React.Fragment>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
