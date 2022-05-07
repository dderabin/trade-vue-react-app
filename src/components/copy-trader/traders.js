import React from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import AxiosInstance from "../../axiosClient";
import { useSelector } from "react-redux";

const TraderList = ({ traderList }) => {
  const { userId } = useSelector(state => state.appState)
  const alert = useAlert();
  const goConfig = () => {
    console.log("click");
  };

  const handleSubscribe = () => {
    
  }

  return (
    <>
      {traderList.filter(({_id}) => _id !== userId).map((trader, index) => (
        <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              <div>
                <img
                  src={`${AxiosInstance.defaults.baseURL}/users/avatar/${trader?.userInfo?.avatar?.slice(0, -4) || null}`}
                  alt=""
                  className="img-fluid table-pic"
                />
              </div>
              <span to={`/trade-configuration/${trader.id}`}>
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
          <td className="text-center">{trader.copytrades}</td>
          <td className="text-center">
            <img src="img/uploads/profit-up.svg" alt="" className="img-fluid" />
            <span className="text-green">{trader?.copyTrader?.profitRate || 0} </span>
          </td>
          <td className="text-center">
            {trader.suscribed ? (
              <button
                disabled=""
                onClick={() => {
                  alert.error(
                    `You cancel your suscription to ${trader.firstname}`
                  );
                  trader.suscribed = false;
                }}
                className="btn btn-primary btn-suscribed cursor-default"
                style={{ minWidth: "90px", maxWidth: "90px", fontSize: '12px', padding: '9px'}}
              >
                Subscribed
              </button>
            ) : (
              <Link to={`/trade-configuration/${trader.id}`}>
                <button
                  disabled=""
                  onClick={handleSubscribe}
                  className="btn btn-success"
                  style={{ minWidth: "90px", maxWidth: "90px" }}
                >
                Copy
              </button>
              </Link>
              
            )}
          </td>
         <td className="text-center">
            {trader.suscribed ? (
              <Link to={`/trade-configuration/${trader.id}`}>
                <button onClick={goConfig} className="btn btn-success">
                  {trader.configure}
                </button>
              </Link>
            ) : (
              ""
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TraderList;
