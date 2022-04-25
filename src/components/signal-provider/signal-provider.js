import React from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const ProviderList = ({ providerList }) => {
  const alert = useAlert();
  const goConfig = () => {

  }
  return (
    <>
      {providerList.map((provider, index) => (
        <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              <div>
                <img
                  src={provider.providerimage}
                  alt=""
                  className="img-fluid table-pic"
                />
              </div>
              <Link to={`/trade-configuration/${provider.id}`}>
                <div>
                  <div className="fw-light">{provider.firstname}</div>
                  <span className="fw-bold">{provider.lastname}</span>
                </div>
              </Link>
            </div>
          </td>
          <td className="text-center">{provider.subscribers}</td>
          <td className="cubscriber">{provider.membership}</td>
          <td className="text-center">{provider.signalssent}</td>
          <td className="text-center">{provider.copytrades}</td>
          <td className="text-center">
            <img src="img/uploads/profit-up.svg" alt="" className="img-fluid" />
            <span className="text-green">{provider.profit} </span>
          </td>
          <td className="text-center">
            {provider.suscribed ? (
              <button
                disabled=""
                onClick={() => {
                  alert.error(
                    `You cancel your suscription to ${provider.firstname}`
                  );
                provider.suscribed = false;
                }}
                className="btn btn-primary btn-suscribed cursor-default"
                style={{ minWidth: "90px", maxWidth: "90px", fontSize: '12px', padding: '9px' }}
              >
                Subscribed
              </button>
            ) : (
              <Link to={`/trade-configuration/${provider.id}`}>
                <button
                  disabled=""
                  onClick={() => {
                    alert.success(`You have suscribed to ${provider.firstname}`);
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
            {provider.suscribed ? (
              <Link to={`/trade-configuration/${provider.id}`}>
                <button onClick={goConfig} className="btn btn-success">
                  {provider.configure}
                </button>
              </Link>
            ) : (
              ""
            )}
          </td>
         {/* <td className="text-center">{provider.country}</td>
          <td className="cubscriber">{provider.email}</td>
          <td className="text-center">{provider.substatus}</td>
          <td className="text-center">{provider.subsince}</td>
          <td className="text-center">
            {provider.suscribed ? (
              <button
                disabled=""
                onClick={() => {
                  alert.error(
                    `You cancel your suscription to ${provider.firstname}`
                  );
                  provider.suscribed = false;
                }}
                className="btn btn-primary btn-suscribed"
                style={{ minWidth: "90px", maxWidth: "90px" }}
              >
                Suscribed
              </button>
            ) : (
              <button
                disabled=""
                onClick={() => {
                  alert.success(`You have suscribed to ${provider.firstname}`);
                }}
                className="btn btn-primary"
                style={{ minWidth: "90px", maxWidth: "90px" }}
              >
                Copy
              </button>
            )}
              </td>*/}
        </tr>
      ))}
    </>
  );
};

export default ProviderList;
