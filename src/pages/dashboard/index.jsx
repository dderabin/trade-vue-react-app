import open_dir_icon from "./../../assets/img/icons/open_dir.svg";
import dash_portfolio_icon from "./../../assets/img/icons/case_active.svg";
import dash_portfolio_icon_deactive from "./../../assets/img/icons/case_deactive.svg";
import dash_scorecard_icon from "./../../assets/img/icons/dash_scorecard.svg";
import dash_subscription_icon from "./../../assets/img/icons/dash_subscription.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import icon_setting from "../../assets/img/icons/setting-mobile.svg";
import icon_dir_down from "../../assets/img/icons/dir_down.svg";
import Portfolio from '../../components/user-dashboard/Portfolio'
import Profitability from '../../components/user-dashboard/Profitability'
import MonthlyScorecard from '../../components/user-dashboard/MonthlyScorecard'
import Subscription from '../../components/user-dashboard/Subscription'
import { usePortfolioValues } from "../../hooks";

export const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Portfolio');
  const [visibleOption, setVisibleOption] = useState(false);
  const {
    totalTrades = 0,
    totalInvestment = 0,
    profit = 0,
    portfolioValue = 0,
  } = usePortfolioValues()  

  return (
    <div className="dash-page" onClick={() => {if(visibleOption === true)setVisibleOption(false)}}>
      {/* <div className="container-fluid p-0"> */}
      <div className="container-fluid p-0">
        {/* <div className="card mb-0 d-none d-xl-block "> */}
          <div className="card-body dash-header">
            <div className="dash-item d-xl-block d-none">
              <span className="value">{totalTrades}</span>
              <span className="label">Total Trades</span>
            </div>
            <div className="dash-item d-xl-block d-none">
              {/* <img src={plus_icon} alt="plus" /> */}
              <span className="plus">+</span>
            </div>
            <div className="dash-item">
              <span className="value">${parseFloat(totalInvestment || '0').toFixed(2)}</span>
              <span className="label d-xl-block d-none">Total Investment</span>
              <span className="label d-block d-sm-none investment">Investment</span>
            </div>
            <div className="dash-item">
              {/* <img src={plus_icon} alt="plus" /> */}
              <span className="plus">+</span>
            </div>
            <div className="dash-item">
              <div style={{ display: 'flex', alignItems: 'baseline'}}>
                <span className="value">${profit || '0'}</span>&nbsp;
                {/* <span className="sub-value">(3.0%)</span> */}
              </div>
              <span className="label">Profit</span>
            </div>
            <div className="dash-item">
              {/* <img src={equal_icon} alt="plus" /> */}
              <span className="plus">=</span>
            </div>
            <div className="dash-item">
              <span className="value"><img src={open_dir_icon} alt="open direction" style={{backgroundColor: 'white', width: '18px', height: '10px' }} />${parseFloat(portfolioValue || '0').toFixed(2)}</span>
              <span className="label">Portfolio Value</span>
            </div>
          </div>

        {/* <div className="card mb-0 d-xl-block d-none dash-content"> */}
        <div className="card mb-0 dash-content">
          <div className="card-head dash-tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'Portfolio' ? 'active': ''}`}
                  id="portfolio-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#portfolio"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                  onClick={() => setActiveTab("Portfolio")}
                >
                  <img 
                    src={activeTab === 'Portfolio'? dash_portfolio_icon : dash_portfolio_icon_deactive}
                    alt="Portfolio" style={{ width: '18px', height: '18px'}} 
                  />&nbsp;
                  <span className="d-none d-xl-block">Portfolio</span>
                </button>
              </li>
              {/* <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'Profitability' ? 'active': ''}`}
                  id="profitability-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profitability"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                  onClick={() => setActiveTab("Profitability")}
                >
                  <img src={dash_profitability_icon} alt="Portfolio" />&nbsp;
                  <span className="d-none d-xl-block">Profitability</span>
                </button>
              </li> */}
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'Monthly Scorecard' ? 'active': ''}`}
                  id="scorecard-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#scorecard"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                  onClick={() => setActiveTab("Monthly Scorecard")}
                >
                  <img src={dash_scorecard_icon} alt="Monthly Scorecard" />&nbsp;
                  <span className="d-none d-xl-block">Monthly Scorecard</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'Subscription' ? 'active': ''}`}
                  id="subscription-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#subscription"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                  onClick={() => setActiveTab("Subscription")}
                >
                  <img src={dash_subscription_icon} alt="Portfolio" />&nbsp;
                  <span className="d-none d-xl-block">Subscription</span>
                </button>
              </li>
            </ul>
            {/* <div className="tab-title">
              {activeTab}
            </div> */}
            <hr></hr>
          </div>
          <div className="card-body tab-content">
            <div className="tab-content-title">
              <div className="tab-title">
                {activeTab}
              </div>
              <div className="plus-option">
                <div className="option-btn" onClick={() => setVisibleOption(visibleOption => visibleOption = !visibleOption)}>
                  <img src={icon_setting} alt="settomg icon" className="option-icon" />
                  <img src={icon_dir_down} alt="drowdown icon" className="option-dropdown-icon"/>
                </div>
                { visibleOption && 
                  <div className="option-content">
                    <Link to="/trade-terminal"><span onClick={() => setVisibleOption(false)}>Create New Trade</span></Link>
                    <Link to="/copy-trading/view-copy-trader-list"><span onClick={() => setVisibleOption(false)}>View Copy Traders</span></Link>
                    <Link to="/signal-provider/view-signal-provider"><span onClick={() => setVisibleOption(false)}>View Signal Providers</span></Link>
                    <Link to="/price-comparison"><span onClick={() => setVisibleOption(false)}>View Live Price</span></Link>
                    <Link to=""><span onClick={() => setVisibleOption(false)}>Write a New Post</span></Link>
                  </div>
                }
              </div>
            </div>
            {/* {activeTab === 'Portfolio' && <Portfolio />} */}
            {activeTab === 'Portfolio' && <><Profitability /><br /><Portfolio /></>}
            {/* {activeTab === 'Profitability' && <Profitability />} */}
            {activeTab === 'Monthly Scorecard' && <MonthlyScorecard />}
            {activeTab === 'Subscription' && <Subscription />}
          </div>
        </div>

        {/* { activeTab === 'Profitability' && (
          <div className="card mb-0 dash-content mt-4">
            <div className="card-head dash-tab">
              <div className="tab-title coin-base">
                Coin-Wise Distribution
              </div>
              <hr></hr>
            </div>
            <div className="card-body tab-content">
            <div className="row portfolio-page">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="bg-white">
                    <tr>
                      <th scope="col" className="text-start px-md-6">
                        Coin
                      </th>
                      <th scope="col" className="text-start px-md-6">
                        Total Trades
                        <img
                          src={tableArrow_icon}
                          alt=""
                          className="img-fluid margin"
                        />
                      </th>
                      <th scope="col" className="text-start px-md-6">
                        Average Profit
                        <img
                          src={tableArrow_icon}
                          alt=""
                          className="img-fluid margin"
                        />
                      </th>
                      <th scope="col" className="text-start px-md-6">
                        Average Loss
                        <img
                          src={tableArrow_icon}
                          alt=""
                          className="img-fluid margin"
                        />
                      </th>
                      <th scope="col" className="text-start px-md-6">
                        Net Profitability
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
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                    <tr>
                      <td className="text-start px-md-6">ETHUSDT</td>
                      <td className="text-start px-md-6">Universal</td>
                      <td className="text-start px-md-6">Signal Provider</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                      <td className="text-start px-md-6">22-Feb-2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-12 my-auto">
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
                    <a href="/" className="btn d-xl-block d-none btn-light">
                      6
                    </a>
                    <a href="/" className="btn d-xl-block d-none btn-light">
                      7
                    </a>
                    <a href="/" className="btn d-xl-block d-none btn-light">
                      8
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
        )} */}
      </div>
    </div>
  );
};
