import React, { useState } from 'react';
import { useTraderHistory } from '../../hooks';
import { EXCHANGE_MAP } from '../../store/consts';
import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";
import circle_plus_icon from "./../../assets/img/uploads/plus.svg";
import circle_minus_icon from "./../../assets/img/uploads/minus.png";

const Portfolio = () => {
  const { historyList } = useTraderHistory();
  const [toggle, setToggle] = useState(0);

  const showToogle = (i) => {
    if (i === toggle) {
      setToggle(0);
    } else {
      setToggle(i);
    }
  };

  return (
    <div className="card mb-0 card-light-grey">
      <div className="card-body mob-pad-0">
        <div className="table-responsive" style={{ whiteSpace: 'nowrap'}}>
          <table className="table table-striped">
            <thead className="bg-white">
              <tr>
                <th className="thincell"> </th>
                <th scope="col">
                  Date
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Source
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Order Id
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Exchange
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Pair
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Type
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Position
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Leverage
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Order Type
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Buy Price
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Quantity
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  SL Price
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  SL Quantity
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  State
                  <img
                    src={tableArrow_icon}
                    alt=""
                    className="img-fluid margin"
                  />
                </th>
                <th scope="col">
                  Profit or Loss
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
                        src={toggle !== index + 1 ? circle_plus_icon : circle_minus_icon}
                        alt=""
                        className="img-fluid text-center cursor-pointer"
                        width={20}
                        height={20}
                      />
                    </td>
                    <td>
                      {item.signalTime.split('T')[0]}
                    </td>
                    <td>
                      {item.createdBy.userName}
                    </td>
                    <td>
                      #{item._id}
                    </td>
                    <td>
                      {EXCHANGE_MAP[item.exchangePlatform]}
                    </td>
                    <td>
                      {item.symbol.from + item.symbol.to}
                    </td>
                    <td>
                      {item.signalType.toLowerCase() !== 'spot' ? 'Futures' : 'Spot'}
                    </td>
                    <td>
                      {(item.signalType.toLowerCase() === 'long' || item.signalType.toLowerCase() === 'short') && item.signalType}
                    </td>
                    <td>
                      {item?.leverage || ''}
                    </td>
                    <td>
                      {item.hasOwnProperty('entryPrice') ? 'Limit' : 'Market'}
                    </td>
                    <td>
                      {item?.entryPrice || 'Market Price'}
                    </td>
                    <td>
                      {parseFloat(item.amount).toFixed(2)}
                    </td>
                    <td>
                      {item.stopLoss}
                    </td>
                    <td>
                      100%
                    </td>
                    <td>
                      {item.state}
                    </td>
                    <td>
                      {item.profitPercent}
                    </td>
                  </tr>
                  {toggle === index + 1 && (
                    <tr><td colSpan={10}>
                      <div className="toggle" style={{ width: 'fit-content'}}>
                        { item.targets.map((target, index) => {
                          return (
                            <p key={index} className={item.targets.length === index + 1 ? "mb-0" : ""}>
                              <strong>Take Profit {index + 1}:</strong> {parseFloat(target.amount).toFixed(2)}
                            </p>
                          )
                        })}
                      </div>
                    </td></tr>
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
