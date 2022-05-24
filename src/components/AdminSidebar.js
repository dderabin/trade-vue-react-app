// sidebar icons
import React, { useEffect } from "react";
import sb_dashboard from "./../assets/img/panel-icons/dashboard.svg";
import sb_administrator from "./../assets/img/panel-icons/administrator.svg";
import sb_signalprovider from "./../assets/img/panel-icons/signal-provider.svg";
import sb_traders from "./../assets/img/panel-icons/traders.svg";
import sb_tradesignals from "./../assets/img/panel-icons/trade-signals.svg";
import sb_tradeexecuted from "./../assets/img/panel-icons/trade-executed.svg";
import sb_tradingsymbols from "./../assets/img/panel-icons/trading-symbols.svg";
import sb_authenticator from "./../assets/img/panel-icons/g-authenticator.svg";
import sb_arrowdown from "./../assets/img/icons/arrow-down.svg";
import sb_login from "./../assets/img/panel-icons/login-logs.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Logo } from "./Logo";

//Sidebar (this should be aislated in order to be reused... for demo reasons we're creating a sidebar for each page... their styles are in DefaultTradingLayoutStyles, a.k.a. app.css in old versions.)
// before deciding to move sidebar to a FC first we need to create logic for routes links
export const AdminSidebar = ({ collapseSidebar }) => {
  const [showAdministratorScroll, setShowAdministratorScroll] = useState(false);
  const [showAdminSignalProviderScroll, setShowAdminSignalProviderScroll] =
    useState(false);
  const [showTradingSymbolsScroll, setShowTradingSymbolsScroll] =
    useState(false);
  const [showTradersScroll, setShowTradersScroll] = useState(false);
  const [showTradeSignalsScroll, setShowTradeSignalsScroll] = useState(false);
  const [showTradeExcutedScroll, setShowTradeExcutedScroll] = useState(false);

  // checking to routes to set class active on elements
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setShowAdministratorScroll(false);
      setShowAdminSignalProviderScroll(false);
      setShowTradingSymbolsScroll(false);
      setShowTradersScroll(false);
      setShowTradeSignalsScroll(false);
      setShowTradeExcutedScroll(false);
    }
  }, [location.pathname]);

  return (
    <>
      <nav
        id="sidebar"
        className={`sidebar js-sidebar ${collapseSidebar ? "collapsed" : ""}`}
      >
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
                    <Link className="sidebar-brand" to="/admin/dashboard">
                      <span className="align-middle">
                        <Logo />
                      </span>
                    </Link>

                    <div className="scrollBox">
                      <nav>
                        <ul className="mt-5">
                          <li>
                            <Link
                              to="/admin/dashboard"
                              className={`${
                                location.pathname === "/admin/dashboard"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_dashboard}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Dashboard
                            </Link>
                          </li>

                          <li className="sub-menu">
                            <Link
                              to="#0"
                              onClick={() =>
                                setShowAdministratorScroll(
                                  !showAdministratorScroll
                                )
                              }
                              className={`${
                                location.pathname.includes(
                                  "/admin/administrator"
                                )
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_administrator}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Administrator
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
                                  "/admin/administrator"
                                ) || showAdministratorScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/admin/administrator/create-admin"
                                  className={`${
                                    location.pathname ===
                                    "/admin/administrator/create-admin"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Create Administrator
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="/admin/administrator/view-admin"
                                  className={`${
                                    location.pathname ===
                                    "/admin/administrator/view-admin"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Administrator
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="sub-menu">
                            <Link
                              to="#0"
                              className={`${
                                location.pathname.includes(
                                  "/admin/signal-provider"
                                )
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() =>
                                setShowAdminSignalProviderScroll(
                                  !showAdminSignalProviderScroll
                                )
                              }
                            >
                              <img
                                src={sb_signalprovider}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Signal Provider
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
                                  "/admin/signal-provider"
                                ) || showAdminSignalProviderScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/admin/signal-provider/activate-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/admin/signal-provider/activate-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Activate Signal Provider
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="/admin/signal-provider/view-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/admin/signal-provider/view-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Signal Provider
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="sub-menu">
                            <Link
                              to="#0"
                              className={`${
                                location.pathname.includes("/admin/traders")
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() =>
                                setShowTradersScroll(!showTradersScroll)
                              }
                            >
                              <img
                                src={sb_traders}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Traders
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
                                location.pathname.includes("/traders/") ||
                                showTradersScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/admin/traders/view-copy-trader"
                                  className={`${
                                    location.pathname ===
                                    "/admin/traders/view-copy-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Copy Trader
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="/admin/traders/view-trader"
                                  className={`${
                                    location.pathname ===
                                    "/admin/traders/view-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Trader
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="sub-menu">
                            <Link
                              to="#0"
                              className={`${
                                location.pathname.includes(
                                  "/admin/trade-signals/"
                                )
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() =>
                                setShowTradeSignalsScroll(
                                  !showTradeSignalsScroll
                                )
                              }
                            >
                              <img
                                src={sb_tradesignals}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Trade Signals
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
                                  "/admin/trade-signals/"
                                ) || showTradeSignalsScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/admin/trade-signals/from-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/admin/trade-signals/from-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  From Signal Provider
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="/admin/trade-signals/from-copy-trader"
                                  className={`${
                                    location.pathname ===
                                    "/admin/trade-signals/from-copy-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  From Copy Trader
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="sub-menu">
                            <Link
                              to="#0"
                              className={`${
                                location.pathname.includes(
                                  "/admin/trade-executed/"
                                )
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() =>
                                setShowTradeExcutedScroll(
                                  !showTradeExcutedScroll
                                )
                              }
                            >
                              <img
                                src={sb_tradeexecuted}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Trade Executed
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
                                  "/admin/trade-executed/"
                                ) || showTradeExcutedScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/admin/trade-executed/executed-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/admin/trade-executed/executed-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  From Signal Provider
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="/admin/trade-executed/executed-copy-trader"
                                  className={`${
                                    location.pathname ===
                                    "/admin/trade-executed/executed-copy-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  From Copy Trader
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="sub-menu">
                            <Link
                              to="#0"
                              onClick={() =>
                                setShowTradingSymbolsScroll(
                                  !showTradingSymbolsScroll
                                )
                              }
                              className={`${
                                location.pathname.includes(
                                  "/admin/trading-symbols"
                                )
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_tradingsymbols}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Trading Symbols
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
                                  "/admin/trading-symbols"
                                ) || showTradingSymbolsScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/admin/trading-symbols/add-trade-symbol"
                                  className={`${
                                    location.pathname ===
                                    "/admin/trading-symbols/add-trade-symbol"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Add Trade Symbol
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/admin/trading-symbols/view-trade-symbols"
                                  className={`${
                                    location.pathname ===
                                    "/admin/trading-symbols/view-trade-symbols"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Trade Symbols
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link
                              to="/admin/g-auth"
                              className={`${
                                location.pathname === "/admin/g-auth"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_authenticator}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              G Authenticator
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/admin/login-logs"
                              className={`${
                                location.pathname === "/admin/login-logs"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_login}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Login Logs
                            </Link>
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
      </nav>
    </>
  );
};
