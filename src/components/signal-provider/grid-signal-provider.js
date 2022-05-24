import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const GridProviderList = ({ providerList }) => {
  const navigate = useNavigate();
  const alert = useAlert();

  return (
    <div className="grid-view-card-wrapper">
      {providerList.map((provider, index) => (
        <div key={index} className="grid-view-card">
          <Link to={`/trade-configuration/${provider.id}`}>
            <div className="grid-card-body">
              <img
                src={provider.providerimage}
                className="card-img-top"
                alt="..."
              />
              <div className="grid-card-text">
                <div className="grid-card-text-flag">
                  <div className="">
                    <div
                      className="font-16 font-bold text-dark mb-2"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {provider.firstname}
                    </div>
                    <div className="card-text font-12 mb-0">
                      <span className="font-regular font-13">
                        {" "}
                        {provider.lastname} |{" "}
                      </span>
                      India
                      <img
                        src={provider.flag}
                        alt=""
                        className="img-fluid ps-2"
                      />
                    </div>
                  </div>
                  <div className="grid-view-action-buttons">
                    <div>
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
                          style={{
                            minWidth: "70px",
                            maxWidth: "70px",
                            fontSize: "10px",
                          }}
                        >
                          Subscribed
                        </button>
                      ) : (
                        <button
                          disabled=""
                          onClick={() => {
                            alert.error(
                              `You have suscribed to ${provider.firstname}`
                            );
                          }}
                          className="btn btn-success"
                          style={{
                            minWidth: "70px",
                            maxWidth: "70px",
                            fontSize: "10px",
                          }}
                        >
                          Copy
                        </button>
                      )}

                      {provider.suscribed ? (
                        <button
                          onClick={() =>
                            navigate(`/trade-configuration/${provider.id}`)
                          }
                          className="btn btn-success ms-1"
                          style={{
                            minWidth: "70px",
                            maxWidth: "70px",
                            fontSize: "10px",
                          }}
                        >
                          {provider.configure}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="d-flex gx-4 pb-2">
                  <div className="col-xl-3 col-lg-3 col-3 border-right">
                    <div className="text-center">
                      <h5 className="mb-0 font-18 ">2250</h5>
                      <p className="font-10 mb-0">Subscribers</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-3 border-right">
                    <div className="text-center">
                      <h5 className="mb-0 font-18">7109</h5>
                      <p className="font-10 mb-0">Copies</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-3 border-right">
                    <div className="text-center">
                      <h5 className="mb-0 font-18">2389</h5>
                      <p className="font-10 mb-0">Signals</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-3">
                    <div className="text-center">
                      <h5 className="mb-0 font-18 text-green fw-bold">89%</h5>
                      <p className="font-10 mb-0">Profit (12m)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridProviderList;
