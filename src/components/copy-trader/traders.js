import React from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const TraderList = ({ traderList }) => {
  const alert = useAlert();
  const goConfig = () => {
    console.log("click");
  };

  return (
    <>
      {traderList.map((trader, index) => (
        <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              <div>
                <img
                  src={trader.traderimage}
                  alt=""
                  className="img-fluid table-pic"
                />
              </div>
              <span to={`/trade-configuration/${trader.id}`}>
                <div>
                  <div className="fw-light">{trader.firstname}</div>
                  <span className="fw-bold">{trader.lastname}</span>
                </div>
              </span>
            </div>
          </td>
          <td className="text-center">{trader.subscribers}</td>
          <td className="cubscriber">{trader.membership}</td>
          <td className="text-center">{trader.signalssent}</td>
          <td className="text-center">{trader.copytrades}</td>
          <td className="text-center">
            <img src="img/uploads/profit-up.svg" alt="" className="img-fluid" />
            <span className="text-green">{trader.profit} </span>
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
                  onClick={() => {
                    alert.success(`You have suscribed to ${trader.firstname}`);
                  }}
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
