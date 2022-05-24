// import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const GridTraderList = ({ traderList }) => {
  // const navigate = useNavigate();
  const alert = useAlert();

  return (
    <div className="grid-view-card-wrapper">
      {traderList.map((trader, index) => (
        <div key={index} className="grid-view-card">
          <Link to={`/trade-configuration/${trader.id}`}>
            <div className="grid-card-body">
              <img
                src={trader.userInfo.avatar}
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
                      {trader.userInfo.firstName}
                    </div>
                    <div className="card-text font-12 mb-0">
                      <span className="font-regular font-13">
                        {" "}
                        {trader.userInfo.lastName} |{" "}
                      </span>
                      India
                      <img
                        src={trader.flag}
                        alt=""
                        className="img-fluid ps-2"
                      />
                    </div>
                  </div>
                  <div className="grid-view-action-buttons">
                    <div style={{display: 'flex'}}>
                      {trader.suscribed ? (
                        <button
                          disabled=""
                          onClick={() => {
                            alert.error(
                              `You cancel your suscription to ${trader.userInfo.firstName}`
                            );
                            trader.suscribed = false;
                          }}
                          className="btn btn-primary btn-suscribed"
                          style={{
                            minWidth: "100px",
                            maxWidth: "100px",
                            fontSize: "12px",
                            flexGrow: "1",
                            height: "fit-content",
                          }}
                        >
                          Suscribed
                        </button>
                      ) : (
                        <button
                          disabled=""
                          onClick={() => {
                            alert.error(
                              `You have suscribed to ${trader.userInfo.firstName}`
                            );
                          }}
                          className="btn btn-success"
                          style={{
                            minWidth: "100px",
                            maxWidth: "100px",
                            fontSize: "12px",
                            flexGrow: "1",
                            height: "fit-content",
                          }}
                        >
                          Copy
                        </button>
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
    // <div className="row gx-3">
    //   {traderList.map((trader, index) => (
    //     <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-xs-6 p-2">
    //       <div className="card mb-0 special-card-body">
    //         <img src={trader.traderimage} className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <div className="row gx-2 pt-2">
    //             <div className="col-12">
    //               <p
    //                 className="font-16 font-bold text-dark mb-2"
    //                 style={{ whiteSpace: "nowrap" }}
    //               >
    //                 {trader.firstname} |
    //                 <span className="font-regular font-12">
    //                   {" "}
    //                   {trader.firstname}
    //                 </span>
    //               </p>
    //               <p className="card-text font-12 mb-0">
    //                 India
    //                 <img src={trader.flag} alt="" className="img-fluid ps-2" />
    //               </p>
    //             </div>
    //           </div>
    //           <div className="row gx-2 pt-2">
    //             <div className="my-auto">
    //               {trader.suscribed ? (
    //                 <button
    //                   disabled=""
    //                   onClick={() => {
    //                     alert.error(
    //                       `You cancel your suscription to ${trader.firstname}`
    //                     );
    //                     trader.suscribed = false;
    //                   }}
    //                   className="btn btn-primary"
    //                 >
    //                   Suscribed
    //                 </button>
    //               ) : (
    //                 <button
    //                   disabled=""
    //                   onClick={() => {
    //                     alert.error(
    //                       `You have suscribed to ${trader.firstname}`
    //                     );
    //                   }}
    //                   className="btn btn-info"
    //                 >
    //                   Suscribe
    //                 </button>
    //               )}

    //               <Link to={`/trade-configuration/${trader.id}`}>
    //                 <button
    //                   onClick={goConfig}
    //                   className="btn btn-success font-12 border-radius-none m-1"
    //                 >
    //                   {trader.configure}
    //                 </button>
    //               </Link>
    //             </div>
    //           </div>
    //           <hr className="my-2" />
    //           <div className="d-flex gx-4 pb-2">
    //             <div className="col-xl-3 col-lg-3 col-3 border-right">
    //               <div className="text-center">
    //                 <h5 className="mb-0 font-14 ">2250</h5>
    //                 <p className="font-12 mb-0">Subscriber</p>
    //               </div>
    //             </div>
    //             <div className="col-xl-3 col-lg-3 col-3 border-right">
    //               <div className="text-center">
    //                 <h5 className="mb-0 font-14">7109</h5>
    //                 <p className="font-12 mb-0">Copies</p>
    //               </div>
    //             </div>
    //             <div className="col-xl-3 col-lg-3 col-3 border-right">
    //               <div className="text-center">
    //                 <h5 className="mb-0 font-14">2389</h5>
    //                 <p className="font-12 mb-0">Signals</p>
    //               </div>
    //             </div>
    //             <div className="col-xl-3 col-lg-3 col-3">
    //               <div className="text-center">
    //                 <h5 className="mb-0 font-14 text-green">89%</h5>
    //                 <p className="font-12 mb-0">Profit (12m)</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default GridTraderList;
