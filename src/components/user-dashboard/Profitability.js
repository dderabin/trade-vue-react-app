import React, { useEffect, useState } from 'react';

import icon_up from "./../../assets/img/icons/dir_up_green.svg";
import icon_down from "./../../assets/img/icons/dir_down_red.svg";
import usePortfolioValues from '../../hooks/usePortfolioValues';
import { GET_PORTFOLIO_VALUES } from '../../store/api';

const Profitability = () => {
  const [portfolioValues, setPortfolioValues] = useState({
    totalTrades: 0,
    totalInvestment: 0,
    profit: 0,
    portfolioValue: 0,
    avgProfit: 0,
    avgLos: 0
  })
  
  useEffect(() => {
    let mounted = true;
    const interval = setInterval(async() => {
      if (mounted) {
        const response = await GET_PORTFOLIO_VALUES();
        setPortfolioValues(response.data)
      }
    }, 1000)
    return () => {
      mounted = false;
      clearInterval(interval);
    }
  }, [])
  return (
    <div className='row profitability-page'>
      <div className='col-md-3 col-6'>
        <div className='profit-card bg-white content-item'>
          <span>Total Trades</span>
          <span>{portfolioValues.totalTrades}</span>
        </div>
      </div>
      <div className='col-md-6 col-12'>
        <div className='profit-card bg-white'>
          <div className='avg-profit'>
            <div className='avg-content'>
              <img src={icon_up} alt="icon_up" />
              <span>${parseFloat(portfolioValues.avgProfit).toFixed(2)}</span>
            </div>
            <div>
              <span>Avg. Profit</span>
            </div>
            <div className='banner-bottom'></div>
          </div>
          <div className='avg-loss'>
            <div className='avg-content'>
              <img src={icon_down} alt="icon_down" />
              <span>${parseFloat(portfolioValues.avgLoss).toFixed(2)}</span>
            </div>
            <div>
              <span>Avg. Loss</span>
            </div>
            <div className='banner-bottom'></div>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='profit-card bg-white content-item'>
          <span>Profitable</span>
          <span>{parseFloat(portfolioValues.profit).toFixed(2)}%</span>
        </div>
      </div>
    </div>
  )
}

export default Profitability;
