import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

// import icon_down from "./../../assets/img/icons/dir_up_green.svg";
import icon_dropdown from "../../assets/img/icons/drop-down.svg";

const data_list = {
  2020: [30.33, -8.59, -24.87, 34.46, 9.42, -3.12, 24.63, 2.70, -7.75, 28.7, 20.00, 10.00],//, 115.91],
  2019: [-7.70, -11.22, 8.02, 29.08, 62.42, 25.46, -6.33, -4.81, -13.56, 10.29, -17.55, -5.10],// 69.00],
  2018: [-27.99, 1.60, -32.67, 33.71, -19.07, -14.79, 21.06, -9.30, -5.93, -4.47, -37.24, -7.09],// 102.18],
}
const mobile_data = [115.91, 10.00, 20.00, 28.7, -7.75, 2.7, 24.63, -3.12, 9.42, 34.46, -24.87, -8.59, 30.33]
const MonthlyScorecard = () => {
  const [data, setData] = useState({
    series: [{
      name: 'Cash Flow',
      data: [
        30.33, -8.59, -24.87, 34.46, 9.42, -3.12, 24.63, 2.70, -7.75, 28.7, 20.00, 10.00
      ]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: 0,
              to: 100,
              color: '#75B20F'
            }, {
              from: -100,
              to: 0,
              color: '#E1191C'
            }],
            backgroundBarColors: ['rgba(209,43,43'],
            backgroundBarOpacity: 0.05
          },
          columnWidth: '80%',
        }
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        // title: {
        //   text: 'Growth',
        // },
        labels: {
          show: false,
          formatter: function (y) {
            return y.toFixed(0);
          }
        }
      },
      xaxis: {
        type: 'none',
        categories: [
          // 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
          '', '', '', '', '', '', '', '', '', '', '', ''
        ],
        labels: {
          rotate: -90
        }
      },
      grid: {
        yaxis: {
          lines: {
              show: false
          }
        },
        padding: {
          left: 0
        },
        xaxis: {
          lines: {
              show: false
          }
        },
      },
      tooltip: {
        enabled: false
      }
    },
  })

  const [mobile_option, setMobileOption] = useState({
    series: [{
      name: 'Cash Flow',
      data: [
        30.33, -8.59, -24.87, 34.46, 9.42, -3.12, 24.63, 2.70, -7.75, 28.7, 20.00, 10.00
      ]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: 0,
              to: 100,
              color: '#75B20F'
            }, {
              from: -100,
              to: 0,
              color: '#E1191C'
            }],
            backgroundBarColors: ['rgba(209,43,43'],
            backgroundBarOpacity: 0.05
          },
          columnWidth: '80%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        // title: {
        //   text: 'Growth',
        // },
        labels: {
          show: false,
          formatter: function (y) {
            return y.toFixed(0);
          }
        },
      },
      xaxis: {
        type: 'none',
        categories: [
          // 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
          '', '', '', '', '', '', '', '', '', '', '', ''
        ],
        labels: {
          rotate: -90
        },
      },
      grid: {
        yaxis: {
          lines: {
              show: false
          }
        },
        padding: {
          left: 0
        },
        xaxis: {
          lines: {
              show: false
          }
        },
      },
      tooltip: {
        enabled: false
      }
    },
  })

  const [selected, setSelected] = useState(data_list[2020]);
  const [total, setTotal] = useState(0);
  const month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].reverse();
  const [visible, setVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('2020');
  const [visibleMore, setVisibleMore] = useState(false);

  useEffect(()=>{
    console.log("selected datalist: ", selected);
    // console.log("selected datalist reverse: ", selected.reverse());
    let total = 0;
    selected.forEach((item) => { total += item; })
    console.log("total: ", total.toFixed(2));
    setTotal(total.toFixed(2));

    setMobileOption({
      ...mobile_option,
      series: [{
        ...mobile_option.series,
        data: selected
      }]
    })
    setData({
      ...data,
      series: [{
        ...data.series,
        data: selected
      }]
    })
    // selected.reverse();
  }, [selected])

  useEffect(()=> {
    console.log("visible state: ", visible);
  }, [visible])

  return (
    <div className='scorecard-page'>
      <div className='scorecard-content first_scorecard-content d-xl-block d-none'>
        <div className='chart-section'>
          <div className='chart-area'>
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className='chart-table'>
          <div className='table-header'>
            <span>YEAR</span>
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
            <span>JUL</span>
            <span>AUG</span>
            <span>SEP</span>
            <span>OCT</span>
            <span>NOV</span>
            <span>DEC</span>
            <span>TOTAL</span>
            <span style={{ width: '20px'}}></span>
          </div>
          {Object.keys(data_list).reverse().map(function(key, index) {
            let total = 0;
            return (
              <div 
                key={key}
                className={'table-content ' + (selectedLabel === key ? 'table-content-active':'')} 
                onClick={() => {
                  setSelected(data_list[key].reverse())
                  setSelectedLabel(key)
                }}
              >
                <span style={{color: '#5FA9D0'}}>{key}</span>
                {data_list[key].map((item, i) => {
                  total += parseFloat(item);
                  if(item >= 0)
                    return(
                      <span key={i} style={{color: '#B3D47F'}}>{item}</span>
                    )
                  else
                    return(
                      <span key={i} style={{color: 'red'}}>{item}</span>
                    )

                })}
                <span>{total.toFixed(2)}</span>
                <span style={{ width: '20px'}}></span>
              </div>
            )
          })}
          <div className=''>
            <div className=''>
              <div className="text-center">
                <button className="btn btn-primary mt-4">
                  Show more
                </button>
                <p className="mt-2 mb-4">
                  Past performance is not indicative of future
                  results. Stats are updated on a daily basis at
                  00:00 GMT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='scorecard-content second_scorecard-content d-block d-sm-none'>
        <div className='select-dropdown' onClick={()=>setVisible(true)}>
          <span>{selectedLabel}</span>
          <img src={icon_dropdown} alt='dir_down'/>
        </div>
        <div className='chart-section'>
          <div className='chart-area'>
            <Chart
              options={mobile_option.options}
              series={mobile_option.series}
              type="bar"
              height={250}
            />
          </div>
        </div>
        <div className='mobile chart-table'>
          <div className={'table-content ' + (visibleMore === true ? 'table-more': '')}>
            <div className='chart-item'>
              <span>Total</span>
              <span style={total > 0 ? {color: '#3dae23'}: {color: '#e1191d'}}>{total}</span>
            </div>
            {selected.map((item, index) => {
              if(!visibleMore && index >= 3 )
                return (<></>)
              else 
                return (
                  <div key={index} className='chart-item'>
                    <span>{month_name[index]}</span>
                    {selected[11-index] >= 0 ? (
                      <span style={{color: '#3dae23'}}>{selected[11-index].toFixed(2)}</span>
                    ):(
                      <span style={{color: '#e1191d'}}>{selected[11-index].toFixed(2)}</span>
                    )}
                  </div>
                )
            })}
          </div>
          <div className=''>
            <div className=''>
              <div className="text-center">
                <button 
                  className="btn btn-primary mt-4" 
                  onClick={()=>setVisibleMore(visibleMore => visibleMore = !visibleMore)}
                >
                  Show more
                </button>
                <p className="mt-2 mb-4">
                  Past performance is not indicative of future
                  results. Stats are updated on a daily basis at
                  00:00 GMT.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={'select-year'}> */}
        </div>
      </div>
      <div className={'select-year d-block d-sm-none ' + (visible===true ? 'select-open': '')}>
        <div className={'year-content ' + (visible===true? 'year-content-open': '')}>
          <div className='year-item' onClick={() => console.log("2020")}>
            <button className='btn btn-close' onClick={()=>setVisible(false)}></button>
          </div>
          <div className='year-item' onClick={() => {
            setSelected(data_list[2020])
            setSelectedLabel("2020")
            setVisible(false)
          }}>
            <span>2020</span>
          </div>
          <div className='year-item' onClick={() => {
            setSelected(data_list[2019])
            setSelectedLabel("2019")
            setVisible(false)
          }}>
            <span>2019</span>
          </div>
          <div className='year-item' onClick={() => {
            setSelected(data_list[2018])
            setSelectedLabel("2018")
            setVisible(false)
          }}>
            <span>2018</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyScorecard;
