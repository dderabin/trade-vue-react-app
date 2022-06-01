import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import useSubscriptions from '../../hooks/useSubscriptions';

import icon_up from "./../../assets/img/icons/dir_up_green.svg";

const Subscription = () => {
  const { traderSubscription, signalSubscription,  copyData, signalData } = useSubscriptions();

  const signalOptions = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      colors: ['#A5B4F3']
    },
    stroke: {
      width: 0,
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
      ]
    },
    tooltip: {
      enabled: false
    }
  }

  const copyOptions =  {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      colors: ['#F5BAB7']
    },
    stroke: {
      width: 0,
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
      ]
    },
    tooltip: {
      enabled: false
    }
  }  

  return (
    <div className='row subscriber-page'>
      <div className='col-md-12'>
        <div className='subscriber-card'>
          <div className='signal-sub'>
            <div className='chart-section'>
              <span>Signal Subscribers</span>
              {/* <span>1561</span> */}
              <div className='d-xl-block d-none chat_section_graph'>
                <Chart
                  options={signalOptions}
                  series={[{name: 'series1', data: signalData}]}
                  type="area"
                  height={250}
                />
              </div>
              <div className='d-block d-sm-none'>
                <Chart
                  options={signalOptions}
                  series={[{name: 'series1', data: signalData}]}
                  type="area"
                  height={200}
                />
              </div>
            </div>
            <hr style={{margin: 0}}></hr>
            <div className='row'>
              <div className='col-md-12'>
                <div className='info-section'>
                  <div className='sent-section'>
                    <span>{signalSubscription.signalsCount}</span>
                    <span>Signal Sent</span>
                  </div>
                  <div className='profit-section'>
                    <div className='profit-value'>
                      <img src={icon_up} alt="icon_up" />
                      <span>{signalSubscription.profit}%</span>
                    </div>
                    <span>Profit</span>
                  </div>
                  <div className='div-section'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='copy-sub'>
            <div className='chart-section'>
              <span>Copy Trading Subscribers</span>
              {/* <span>678</span> */}
              <div className='d-xl-block d-none chat_section_graph'>
                <Chart
                  options={copyOptions}
                  series={[{name: 'series1', data: copyData}]}
                  type="area"
                  height={250}
                />
              </div>
              <div className='d-block d-sm-none'>
                <Chart
                  options={copyOptions}
                  series={[{name: 'series1', data: copyData}]}
                  type="area"
                  height={200}
                />
              </div>
            </div>
            <hr style={{margin: 0}}></hr>
            <div className='row'>
              <div className='col-md-12'>
                <div className='info-section'>
                  <div className='sent-section'>
                    <span>{traderSubscription.signalsCount}</span>
                    <span>Copy Trades</span>
                  </div>
                  <div className='profit-section'>
                    <div className='profit-value'>
                      <img src={icon_up} alt="icon_up" />
                      <span>{traderSubscription.profit}%</span>
                    </div>
                    <span>Profit</span>
                  </div>
                  <div className='div-section'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription;
