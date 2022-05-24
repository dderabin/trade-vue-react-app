import React from 'react'
import { useLocation } from "react-router-dom";

export const ShowBreadcrumbs = () => {
  const location = useLocation();
  return (
    <span>
      {location.pathname === "/favourites"
        ? "Favourites"
        : location.pathname === "/copy-trading/join-copy-trader"
        ? "Join as Copy Trader"
        : location.pathname === "/copy-trading/view-copy-trader-list"
        ? "View Copy Traders"
        : location.pathname === "/copy-trading/view-suscribers"
        ? "View Subscribers"
        : location.pathname === "/copy-trading/trade-configuration"
        ? "Trade Configuration"
        : location.pathname === "/signal-provider/join-signal-provider"
        ? "Join as Signal Provider"
        : location.pathname === "/signal-provider/view-signal-provider"
        ? "View Signal Provider"
        : location.pathname === "/signal-provider/view-subscribers"
        ? "View Signal Subscribers"
        : location.pathname === "/portfolio-performance"
        ? "Portfolio Performance"
        : location.pathname === "/reports/trade-signals"
        ? "Trade Signals"
        : location.pathname === "/reports/my-trades"
        ? "My Trades"
        : location.pathname === "/exchange-account/exchange-account"
        ? "Exchange Account"
        : ""}
    </span>
  );
};
