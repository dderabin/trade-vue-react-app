import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { Helmet } from "react-helmet";

export const TradeSignalsPage = () => {
  const [listView, setListView] = useState("list");
  const [toogle, setToogle] = useState(0);
  const [open, setOpen] = useState(false);

  const showToogle = (i) => {
    if (i === toogle) {
      setToogle(0);
    } else {
      setToogle(i);
    }
  };

  const openMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Trade Signals · TraderPro</title>
      </Helmet>
      <div className="container-fluid p-0">
        
        <div className="card grey-card mb-0">
          <div className="card-body export-card">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-12 text-end export-data">
                
                <span>View Provider Signals</span>

                <div className="dropdown d-xl-inline drop-btn export-data-button">
                  <button
                    className="btn btn-white dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    onClick={() => openMenu()}
                    // aria-expanded="true"
                  >
                    Export Data
                  </button>
                  {open === true && (
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setOpen(false);
                      }}
                    >
                      <ul className="menu-dropdown-toggle">
                        <li onClick={() => openMenu()}>
                          <a className="dropdown-item" href="#0">
                            PDF
                          </a>
                        </li>
                        <li onClick={() => openMenu()}>
                          <a className="dropdown-item" href="#0">
                            XLS
                          </a>
                        </li>
                      </ul>
                    </OutsideClickHandler>
                  )}
                </div>
                {/* <a href="viewcopy-trader-list.html">
                  <img
                    src="img/uploads/list-view.svg"
                    alt=""
                    className="img-fluid px-2"
                  />
                </a>
                <a href="viewcopy-trader-grid.html">
                  <img
                    src="img/uploads/grid-view.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-0 card-light-grey">
          <div className="card-body mob-pad-0">
            {listView === "list" ? (
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
                        Provider Name
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
                    <tr>
                      <td className="small" onClick={() => showToogle(1)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="text-center">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 1 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(2)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="text-center">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 2 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(3)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 3 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(4)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 4 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(5)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 5 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(6)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 6 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(7)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 7 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(8)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 8 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                    <tr>
                      <td className="small" onClick={() => showToogle(9)}>
                        <img
                          src="/img/uploads/plus.svg"
                          alt=""
                          className="img-fluid text-center cursor-pointer"
                        />
                      </td>
                      <td className="font">4/4/2021</td>
                      <td className="text-center">Papad Wala</td>
                      <td className="text-center">universal</td>
                      <td className="text-center">Spot</td>
                      <td className="text-center">Market</td>
                      <td className="text-center">TRXUSDT</td>
                      <td className="text-center">1899.00</td>
                      <td className="text-center">1850.00</td>
                    </tr>
                    {toogle === 9 && (
                      <div className="toggle">
                        <p>
                          <strong>Take Profit 1:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 2:</strong> 0.00
                        </p>
                        <p>
                          <strong>Take Profit 3:</strong> 0.00
                        </p>
                        <p class="mb-0">
                          <strong>Take Profit 4:</strong> 0.00
                        </p>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <div className="row gx-3">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="card mb-0 special-card-body">
                      <img
                        src="img/uploads/card/1.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="row gx-2 pt-2">
                          <div className="col-xl-6 col-lg-6 col-6">
                            <p className="font-16 font-bold text-dark mb-2">
                              Micheal |
                              <span className="font-regular font-12">
                                Micheal Crist
                              </span>
                            </p>
                            <p className="card-text font-12 mb-0">
                              India
                              <img
                                src="img/uploads/india.svg"
                                alt=""
                                className="img-fluid"
                              />
                            </p>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                            <a
                              href="#0"
                              className="btn btn-primary font-12 border-radius-none"
                            >
                              Subscribe
                            </a>
                            <a
                              href="trade-configuration.html"
                              className="btn btn-success font-12 border-radius-none"
                            >
                              Configure
                            </a>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="row gx-4 pb-2">
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2250</h5>
                              <p className="font-12 mb-0">Subscriber</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">7109</h5>
                              <p className="font-12 mb-0">Copies</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2389</h5>
                              <p className="font-12 mb-0">Signals</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3">
                            <div className="text-center">
                              <h5 className="mb-0 font-24 text-green">89%</h5>
                              <p className="font-12 mb-0">Profit (12m)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="card mb-0 special-card-body">
                      <img
                        src="img/uploads/card/2.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="row gx-2 pt-2">
                          <div className="col-xl-6 col-lg-6 col-6">
                            <p className="font-16 font-bold text-dark mb-2">
                              Micheal |
                              <span className="font-regular font-12">
                                Micheal Crist
                              </span>
                            </p>
                            <p className="card-text font-12 mb-0">
                              India
                              <img
                                src="img/uploads/india.svg"
                                alt=""
                                className="img-fluid"
                              />
                            </p>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                            <a
                              href="#0"
                              className="btn btn-primary font-12 border-radius-none"
                            >
                              Subscribe
                            </a>
                            <a
                              href="trade-configuration.html"
                              className="btn btn-success font-12 border-radius-none"
                            >
                              Configure
                            </a>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="row gx-4 pb-2">
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2250</h5>
                              <p className="font-12 mb-0">Subscriber</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">7109</h5>
                              <p className="font-12 mb-0">Copies</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2389</h5>
                              <p className="font-12 mb-0">Signals</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3">
                            <div className="text-center">
                              <h5 className="mb-0 font-24 text-green">89%</h5>
                              <p className="font-12 mb-0">Profit (12m)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-3 mt-3">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="card mb-0 special-card-body">
                      <img
                        src="img/uploads/card/3.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="row gx-2 pt-2">
                          <div className="col-xl-6 col-lg-6 col-6">
                            <p className="font-16 font-bold text-dark mb-2">
                              Micheal |
                              <span className="font-regular font-12">
                                Micheal Crist
                              </span>
                            </p>
                            <p className="card-text font-12 mb-0">
                              India
                              <img
                                src="img/uploads/india.svg"
                                alt=""
                                className="img-fluid"
                              />
                            </p>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                            <a
                              href="#0"
                              className="btn btn-primary font-12 border-radius-none"
                            >
                              Subscribe
                            </a>
                            <a
                              href="trade-configuration.html"
                              className="btn btn-success font-12 border-radius-none"
                            >
                              Configure
                            </a>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="row gx-4 pb-2">
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2250</h5>
                              <p className="font-12 mb-0">Subscriber</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">7109</h5>
                              <p className="font-12 mb-0">Copies</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2389</h5>
                              <p className="font-12 mb-0">Signals</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3">
                            <div className="text-center">
                              <h5 className="mb-0 font-24 text-green">89%</h5>
                              <p className="font-12 mb-0">Profit (12m)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="card mb-0 special-card-body">
                      <img
                        src="img/uploads/card/4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="row gx-2 pt-2">
                          <div className="col-xl-6 col-lg-6 col-6">
                            <p className="font-16 font-bold text-dark mb-2">
                              Micheal |
                              <span className="font-regular font-12">
                                Micheal Crist
                              </span>
                            </p>
                            <p className="card-text font-12 mb-0">
                              India
                              <img
                                src="img/uploads/india.svg"
                                alt=""
                                className="img-fluid"
                              />
                            </p>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                            <a
                              href="#0"
                              className="btn btn-primary font-12 border-radius-none"
                            >
                              Subscribe
                            </a>
                            <a
                              href="trade-configuration.html"
                              className="btn btn-success font-12 border-radius-none"
                            >
                              Configure
                            </a>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="row gx-4 pb-2">
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2250</h5>
                              <p className="font-12 mb-0">Subscriber</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">7109</h5>
                              <p className="font-12 mb-0">Copies</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                              <h5 className="mb-0 font-24">2389</h5>
                              <p className="font-12 mb-0">Signals</p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-3">
                            <div className="text-center">
                              <h5 className="mb-0 font-24 text-green">89%</h5>
                              <p className="font-12 mb-0">Profit (12m)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="row mt-4">
              <div className="col-xl-3 col-lg-3 col-12 my-auto">
                <p className="mb-0 d-none d-sm-block">
                  Showing 1 to 10 of 57 entries
                </p>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
                <div className="btn-group">
                  <a href="/" className="btn btn-light">
                    Previous
                  </a>
                  <a href="/" className="btn btn-light active">
                    1
                  </a>
                  <a href="/" className="btn btn-light">
                    2
                  </a>
                  <a href="/" className="btn btn-light">
                    3
                  </a>
                  <a href="/" className="btn btn-light">
                    4
                  </a>
                  <a href="/" className="btn btn-light">
                    5
                  </a>
                  <a href="/" className="btn btn-light">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default FromSignalProviderPage;
