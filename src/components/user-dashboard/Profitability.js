import React from 'react';
import { Divider } from 'semantic-ui-react';

import icon_up from "./../../assets/img/icons/dir_up_green.svg";
import icon_down from "./../../assets/img/icons/dir_down_red.svg";

const Profitability = () => {
  return (
    <div className='row profitability-page'>
      <div className='col-md-3 col-6'>
        <div className='profit-card bg-white content-item'>
          <span>Total Trades</span>
          <span>25</span>
        </div>
      </div>
      <div className='col-md-6 col-12'>
        <div className='profit-card bg-white'>
          <div className='avg-profit'>
            <div className='avg-content'>
              <img src={icon_up} alt="icon_up" />
              <span>$0.00</span>
            </div>
            <div>
              <span>Avg. Profit</span>
            </div>
            <div className='banner-bottom'></div>
          </div>
          <div className='avg-loss'>
            <div className='avg-content'>
              <img src={icon_down} alt="icon_down" />
              <span>$0.00</span>
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
          <span>50.00%</span>
        </div>
      </div>
    </div>
  )
}

export default Profitability;
