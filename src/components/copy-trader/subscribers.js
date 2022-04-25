import React from "react";
import { Link } from "react-router-dom";
// import { useAlert } from "react-alert";

const SubscriberList = ({ subscriberList }) => {
  // const alert = useAlert();
  const goConfig = () => {
    console.log("click");
  };

  return (
    <>
      {subscriberList.map((trader, index) => (
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
          <td className="text-center fw-bold">
            <img
              src={trader.flag}
              alt=""
              className="img-fluid ps-2"
            />
            &nbsp;&nbsp;india
          </td>
          <td className="cubscriber" style={{textAlign: 'left'}}>{trader.email}</td>
          <td className="text-center">{trader.signalssent}</td>
          <td className="text-center fw-bold">{trader.suscribersince}</td>
         
          
         <td className="text-center">
            {trader.suscribed ? (
              <Link to={`/trade-configuration/${trader.id}`}>
                <button onClick={goConfig} className="btn btn-danger">
                  {trader.remove}
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

export default SubscriberList;
