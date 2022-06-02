import React from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../axiosClient";
import { useSelector } from "react-redux";
import { generateHSL } from "../../helper";

const TraderList = ({ traderList }) => {
  const { userId } = useSelector(state => state.appState)

  return (
    <>
      {traderList.filter(({ _id }) => _id !== userId).map((trader, index) => {        
        const avatar = trader?.userInfo?.avatar || null;
        console.log('trader.userInfo => ', trader.userInfo)
        return <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              { (avatar !== null || trader?.userInfo?.firstName === null) ? 
                <img
                  src={avatar ? `${AxiosInstance.defaults.baseURL}/users/avatar/${avatar.slice(0, -4)}` : require('../../assets/img/user.png')}
                  alt=""
                  className="img-fluid table-pic"
                /> : <span className="letter-avatar-big" style={{ backgroundColor: generateHSL(trader?.userInfo?.firstName+trader?.userInfo?.lastName)}}>
                  { trader?.userInfo?.firstName.slice(0,1).toUpperCase() }{ trader?.userInfo?.lastName.slice(0,1).toUpperCase() }
                </span>
              }
              <span to={`/trade-configuration/${trader._id}`}>
                <div>
                  <div className="fw-light">{trader?.userInfo?.firstName || ''}</div>
                  <span className="fw-bold">{trader?.userInfo?.lastName || ''}</span>
                </div>
              </span>
            </div>
          </td>
          <td className="text-center">{trader.subscribersCount}</td>
          <td className="cubscriber">{trader?.copyTrader?.subscribeFee || 0}</td>
          <td className="text-center">{trader.signalsCount}</td>
          <td className="text-center">{trader.signalsCount}</td>
          <td className="text-center">
            <img src="img/uploads/profit-up.svg" alt="" className="img-fluid" />
            <span className="text-green">{trader?.copyTrader?.profitRate || 0} </span>
          </td>
          <td className="text-center">
            {trader.subscribed ? (
              <button
                disabled
                className="btn btn-primary btn-suscribed cursor-default"
                style={{ minWidth: "90px", maxWidth: "90px", fontSize: '12px', padding: '9px' }}
              >
                Copying
              </button>
            ) : (
              <Link to={`/trade-configuration/${trader._id}`}>
                <button
                  className="btn btn-success"
                  style={{ minWidth: "90px", maxWidth: "90px" }}
                >
                  Copy
                </button>
              </Link>

            )}
          </td>
          <td className="text-center">
            {trader.subscribed ? (
              <Link to={`/trade-configuration/${trader._id}`}>
                <button className="btn btn-success">
                  Configure
                </button>
              </Link>
            ) : (
              <></>
            )}
          </td>
        </tr>
      })}
    </>
  );
};

export default TraderList;
