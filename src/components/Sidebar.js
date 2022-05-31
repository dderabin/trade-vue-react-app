// sidebar icons

// import sb_fav from "./../assets/img/icons/favourite-icon-dark.svg";
import sb_copytrading from "./../assets/img/icons/conpytrading-icon-dark.svg";
import sb_signaltrading from "./../assets/img/icons/signalprovider-icon-dark.svg";
import sb_pricecomparison from "./../assets/img/icons/pricecomparison-icon-dark.svg";
import sb_tradeterminal from "./../assets/img/icons/tradeterminal-icon-dark.svg";
import sb_portolioperformance from "./../assets/img/icons/portfolioperformance-icon-dark.svg";
import sb_exchangeaccount from "./../assets/img/icons/exchangeaccount-icon-dark.svg";
import sb_arrowdown from "./../assets/img/icons/arrow-down.svg";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Logo } from "./Logo";
// import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

export const Sidebar = ({ collapseSidebar, onOutsideSidebarClickHandler }) => {
  const [showCopyTraderScroll, setShowCopyTraderScroll] = useState(false);
  const [showSignalTradingScroll, setShowSignalTradingScroll] = useState(false);

  const closeCollapse = () => {
    setShowCopyTraderScroll(false)
    setShowSignalTradingScroll(false)
  }

  const location = useLocation();
  return (
    <>
      <nav
        id="sidebar"
        className={`sidebar js-sidebar ${collapseSidebar ? "collapsed" : ""}`}
      >
        {/* <OutsideClickHandler onOutsideClick={onOutsideSidebarClickHandler}> */}

        <div className="sidebar-content js-simplebar" data-simplebar="init">
          <div className="simplebar-wrapper">
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset">
                <div
                  className="simplebar-content-wrapper"
                  tabIndex="0"
                  role="region"
                  aria-label="scrollable content"
                >
                  <div className="simplebar-content">
                    <div className="d-flex">
                      <Link className="sidebar-brand" to="#">
                        <span className="align-middle">
                          <Logo className={`sidebar-logo`} />
                        </span>
                      </Link>
                    </div>

                    <div className="scrollBox">
                      <nav>
                        <ul className="mt-5">
                          {/* <li>
                            <Link
                              onClick={() => closeCollapse()}
                              to="/favourites"
                              className={`${
                                location.pathname === "/favourites"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_fav}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Favourites
                            </Link>
                          </li> */}
                          <li>
                            <Link
                            onClick={() => closeCollapse()}
                              to="/trade-terminal"
                              className={`${
                                location.pathname === "/trade-terminal"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_tradeterminal}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Trade Terminal
                            </Link>
                          </li>
                          <li className="sub-menu">
                            <Link
                              to="#0"
                              onClick={() =>{
                                closeCollapse()
                                setShowCopyTraderScroll(!showCopyTraderScroll)
                              }}
                              className={`${
                                location.pathname.includes("/copy-trading")
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_copytrading}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Copy Trading
                              <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </Link>
                            <ul
                              className={`${
                                location.pathname.includes("/copy-trading") ||
                                showCopyTraderScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/copy-trading/join-copy-trader"
                                  className={`${
                                    location.pathname ===
                                    "/copy-trading/join-copy-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Join as Copy Trader
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/copy-trading/view-copy-trader-list"
                                  className={`${
                                    location.pathname ===
                                    "/copy-trading/view-copy-trader-list"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Copy Traders
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="/copy-trading/view-suscribers"
                                  className={`${
                                    location.pathname ===
                                    "/copy-trading/view-suscribers"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Subscribers
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-menu" onClick={() => {
                                closeCollapse()
                                setShowSignalTradingScroll(
                                  !showSignalTradingScroll
                                )
                              }}>
                            <Link
                              to="#0"
                              className={`${
                                location.pathname.includes("/signal-provider/")
                                  ? "active"
                                  : ""
                              } `}
                              
                            >
                              <img
                                src={sb_signaltrading}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Signal Trading
                              <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </Link>
                            <ul
                              className={`${
                                location.pathname.includes(
                                  "/signal-provider/"
                                ) || showSignalTradingScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/signal-provider/join-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/join-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Join as Signal Provider
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/signal-provider/view-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/view-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Signal Provider
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/signal-provider/view-subscribers"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/view-subscribers"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Subscribers
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                            onClick={() => closeCollapse()}
                              to="/price-comparison"
                              className={`${
                                location.pathname === "/price-comparison"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_pricecomparison}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Price Comparison
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeCollapse()}
                              to="/portfolio-performance"
                              className={`${
                                location.pathname === "/portfolio-performance"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_portolioperformance}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Portfolio Performance
                            </Link>
                          </li>
                          <li>
                            <Link
                            onClick={() => closeCollapse()}
                              to="/exchange-account"
                              className={`${
                                location.pathname.includes("/exchange-account")
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_exchangeaccount}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Exchange Account
                              {/* <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span> */}
                            </Link>
                            {/* <ul
                              className={`${
                                showExchangeScroll ? "showScrollMenu" : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/exchange-account/exchange-account"
                                  className={`${
                                    location.pathname ===
                                    "/exchange-account/exchange-account"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Update Account
                                </Link>
                              </li>
                            </ul> */}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="simplebar-placeholder"></div>
          </div>
          <div className="simplebar-track simplebar-horizontal">
            <div className="simplebar-scrollbar"></div>
          </div>
          <div className="simplebar-track simplebar-vertical">
            <div className="simplebar-scrollbar"></div>
          </div>
        </div>
        {/* </OutsideClickHandler> */}

      </nav>
    </>
  );
};
