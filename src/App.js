import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "../src/pages/login";
import {PagesLayout} from "./components/layouts/PagesLayout";
import React, {useState, useEffect} from "react";
import {DefaultLayout} from "./components/layouts/DefaultLayout";
import JoinCopyTraderPage from "./pages/copy-trading/join-copy-trader";
import {ViewCopyTraderListPage} from "./pages/copy-trading/view-copy-trader-list";
import {TradeConfigurationPage} from "./pages/copy-trading/trade-configuration";
import PriceComparisonPage from "./pages/price-comparison";
import {PortfolioPerformancePage} from "./pages/portfolio-performance";
import {ExchangeAccountPage} from "./pages/exchange-account/exchange-account";
import {DashboardPage} from "./pages/dashboard";
import {TradeTerminalPage} from "./pages/trade-terminal/trade-terminal";
import {positions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {ProfilePage} from "./pages/profile";
import {ChangePasswordPage} from "./pages/profile/change-password";
import {AuthenticationPage} from "./pages/authentication";
import ActivateSignalProviderPage from "./pages/admin/signal-provider/activate-signal-provider";
import {CreateAdminPage} from "./pages/admin/administrator/create-admin";
import {ViewAdminPage} from "./pages/admin/administrator/view-admin";
import {ViewCopyTrader} from "./pages/admin/traders/view-copy-trader";
import {AdminDashboardPage} from "./pages/admin/dashboard";
import {AdminViewSignalProviderPage} from "./pages/admin/signal-provider/view-signal-provider";
import {FromSignalProviderPage} from "./pages/admin/trade-signals/from-signal-provider";
import {FromCopyTraderPage} from "./pages/admin/trade-signals/from-copy-trader";
import {ExecutedSignalProviderPage} from "./pages/admin/trade-executed/executed-signal-provider";
import {ExecutedCopyTraderPage} from "./pages/admin/trade-executed/executed-copy-trader";
import {AddTradeSymbolPage} from "./pages/admin/trading-symbols/add-trade-symbol";
import {ViewTradeSymbolsPage} from "./pages/admin/trading-symbols/view-trade-symbols";
import {GAuthPage} from "./pages/admin/g-auth";
import {LoginLogsPage} from "./pages/admin/login-logs";
import {ViewTrader} from "./pages/admin/traders/view-trader";
import {AdminPagesLayout} from "./components/layouts/AdminPagesLayout";
import {TradeSignalsPage} from "./pages/reports/trade-signals";
import {MyTradesPage} from "./pages/reports/my-trades";
import ViewSignalProviderPage from "./pages/signal-provider/view-signal-provider";
import JoinSignalProviderPage from "./pages/signal-provider/join-signal-provider";
import ViewSignalSubscribersPage from "./pages/signal-provider/view-signal-subscribers";
import ViewSubscribersPage from "./pages/copy-trading/view-suscribers";
import { Provider } from "react-redux";
import store from './store';
import { AuthProvider } from "./store/contexts/JWTAuthContext";
import "./index.css";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
  containerStyle: {
    zIndex: 10000000
  }
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  // const locaton = useLocation();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (windowDimensions.width < 780) {
      setCollapseSidebar(true);
    } 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  useEffect(() => {
    // console.log("collapseSidebar change in Appjs: ", collapseSidebar);
  }, [collapseSidebar])

  const handleOutSidebarClickHandler = () => {
    if (windowDimensions.width < 576)
      setCollapseSidebar(true);
    else
      setCollapseSidebar(false);
  }

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="278315676653-p894mp7jnnavs0oim2si23nfc2966v5a.apps.googleusercontent.com">
      <AlertProvider template={AlertTemplate} {...options}>
        <AuthProvider>
          <Router>
            <Routes >
              <Route
                path="/"
                element={
                  <DefaultLayout>
                    <Login/>
                  </DefaultLayout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    } 
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <DashboardPage />
                  </PagesLayout>
                }
              />
              {/* <Route
                path="/favourites"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    } 
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <FavouritesPages/>
                  </PagesLayout>
                }
              /> */}
              {/* copy trading */}
              <Route
                path="/copy-trading/join-copy-trader"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    } 
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    
                    <JoinCopyTraderPage/>
                  </PagesLayout>
                }
              />
              <Route
                path="/copy-trading/view-copy-trader-list"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ViewCopyTraderListPage/>
                  </PagesLayout>
                }
              />
              <Route
                path="/trade-configuration/:id"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <TradeConfigurationPage/>
                  </PagesLayout>
                }
              />
              <Route
                path="/copy-trading/view-suscribers"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ViewSubscribersPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Signal Provider */}
              {/*  */}
          
              <Route
                path="/signal-provider/join-signal-provider"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    
                    <JoinSignalProviderPage/>
                  </PagesLayout>
                }
              />
              <Route
                path="/signal-provider/view-signal-provider"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ViewSignalProviderPage/>
                  </PagesLayout>
                }
              />
              <Route
                path="/signal-provider/view-subscribers"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ViewSignalSubscribersPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Price Comparison */}
              {/*  */}
              <Route
                path="/price-comparison"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <PriceComparisonPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Trade Terminal */}
              {/*  */}
              <Route
                path="/trade-terminal"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <TradeTerminalPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Portfolio Performance */}
              {/*  */}
              <Route
                path="/portfolio-performance"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <PortfolioPerformancePage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Reports */}
              {/* <Route
                path="/reports"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <TradeReportPage/>
                  </PagesLayout>
                }
              /> */}
              {/*  */}
              <Route
                path="/reports/trade-signals"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <TradeSignalsPage/>
                  </PagesLayout>
                }
              />
              <Route
                path="/reports/my-trades"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <MyTradesPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Exchange Account */}
              {/*  */}
              <Route
                path="/exchange-account"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ExchangeAccountPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              {/* Profile */}
              <Route
                path="/profile"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ProfilePage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              <Route
                path="/profile/change-password"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <ChangePasswordPage/>
                  </PagesLayout>
                }
              />
              {/*  */}
              <Route
                path="/authentication"
                element={
                  <PagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                    onOutsideSidebarClickHandler={() => handleOutSidebarClickHandler()}
                  >
                    <AuthenticationPage/>
                  </PagesLayout>
                }
              />
              {/*  */}

              <Route
                path="/admin/dashboard"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <AdminDashboardPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="/admin/administrator/create-admin"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <CreateAdminPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="/admin/administrator/view-admin"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ViewAdminPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/signal-provider/activate-signal-provider"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ActivateSignalProviderPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/signal-provider/view-signal-provider"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <AdminViewSignalProviderPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/traders/view-copy-trader"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ViewCopyTrader/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/traders/view-trader"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ViewTrader/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/trade-signals/from-signal-provider"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <FromSignalProviderPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/trade-signals/from-copy-trader"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <FromCopyTraderPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/trade-executed/executed-signal-provider"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ExecutedSignalProviderPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/trade-executed/executed-copy-trader"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ExecutedCopyTraderPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/trading-symbols/add-trade-symbol"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <AddTradeSymbolPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/trading-symbols/view-trade-symbols"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <ViewTradeSymbolsPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/g-auth"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <GAuthPage/>
                  </AdminPagesLayout>
                }
              />
              <Route
                path="admin/login-logs"
                element={
                  <AdminPagesLayout
                    collapseSidebar={collapseSidebar}
                    handleHamburguerClick={() =>
                      setCollapseSidebar(!collapseSidebar)
                    }
                  >
                    <LoginLogsPage/>
                  </AdminPagesLayout>
                }
              />
              {/*  */}
            </Routes>
          </Router>
        </AuthProvider>
      </AlertProvider>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;


