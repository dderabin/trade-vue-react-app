import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import icon_up from "./../../assets/img/icons/dir_up_green.svg";

const Subscription = () => {
  const [signalData] = useState({
    series: [{
      name: 'series1',
      data: [400, 340, 260, 500, 540, 480, 490, 200, 180, 250, 200, 150]
    }],
    options: {
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
      // tooltip: {
      //   x: {
      //     format: function(val) {
      //       return ''
      //     },
         
      //   },
      // },
    },
  })

  const [copyData] = useState({
    series: [{
      name: 'series1',
      data: [400, 340, 260, 500, 540, 480, 490, 200, 180, 250, 200, 150]
    }],
    options: {
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
      // tooltip: {
      //   x: {
      //     format: 'dd/MM/yy HH:mm'
      //   },
      // },
    },
  })

  return (
    <div className='row subscriber-page'>
      <div className='col-md-12'>
        <div className='subscriber-card'>
          <div className='signal-sub'>
            <div className='chart-section'>
              <span>Signal Subscribers</span>
              <span>19945</span>
              <div className='d-xl-block d-none chat_section_graph'>
                <Chart
                  options={signalData.options}
                  series={signalData.series}
                  type="area"
                  height={250}
                />
              </div>
              <div className='d-block d-sm-none'>
                <Chart
                  options={signalData.options}
                  series={signalData.series}
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
                    <span>2456</span>
                    <span>Signal Sent</span>
                  </div>
                  <div className='profit-section'>
                    <div className='profit-value'>
                      <img src={icon_up} alt="icon_up" />
                      <span>56%</span>
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
              <span>19945</span>
              <div className='d-xl-block d-none chat_section_graph'>
                <Chart
                  options={copyData.options}
                  series={copyData.series}
                  type="area"
                  height={250}
                />
              </div>
              <div className='d-block d-sm-none'>
                <Chart
                  options={copyData.options}
                  series={copyData.series}
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
                    <span>2456</span>
                    <span>Copy Trades</span>
                  </div>
                  <div className='profit-section'>
                    <div className='profit-value'>
                      <img src={icon_up} alt="icon_up" />
                      <span>56%</span>
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
