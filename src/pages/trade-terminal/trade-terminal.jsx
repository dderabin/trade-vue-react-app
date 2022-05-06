import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { RealTimeChartWidget } from "react-tradingview-widgets";
// import traderHistory from "./data/history";
import TraderHistoryList from "../../components/trade-terminal/trade-history";
import {Dropdown}  from 'semantic-ui-react';
import "font-awesome/css/font-awesome.css";
import {
  Modal,
  ModalBody,
  // ModalFooter,
  // Button,
  ModalHeader
} from 'reactstrap'
import icon_modal_close from "./../../assets/img/icons/modal-close.svg";
import icon_modal_minus from "./../../assets/img/icons/modal-minus.svg";
import { useTraderHistory } from "../../hooks";

let wsbn = null;
let object = null;

export const TradeTerminalPage = () => {
  useEffect(() => {
    wsbn = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    wsbn.onmessage = (event) => {
      object = JSON.parse(event.data);
      console.log("wsbn message object", object)
    }
  }, [])
  return (
    <div className="tt-wrapper">
      <GraphicalChartArea />
    </div>
  );
};
const options = [
  {
      key: 'Binance',
      text: 'Binance',
      value: 'Binance',
      image: { avatar: true, src: 'img/binance-icon.png' },
  },
  {
      key: 'FTX',
      text: 'FTX',
      value: 'FTX',
      image: { avatar: true, src: 'img/ftx-icon.png' },
  }
];

export const GraphicalChartArea = () => {
  const { traderHistory } = useTraderHistory()
  const [historyList] = useState(traderHistory);
  const [createOpen, setCreateOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)  
  
  return (
    <>
      <Helmet>
        <title>Trade Terminal · TraderPro</title>
      </Helmet>
      <div className="tt-chart-wrapper mb-5">
        <div className="tt-osciloscope">
          <div className="tt-coin-info">
            <div className="tt-coin-value-symbol">
              <div className="symbol-group">
                <span className="symbol">BTCUSDT</span>{" "}
                <span className="red symbol-value">39182.60</span>{" "}
                <span className="symbol-unit" style={{ marginRight: "15px" }}>USDT</span>
                <span className="green symbol-fee">795.72 (2.07%)</span>
              </div>
            </div>
            <div className="tt-coin-stats-24change-wrapper">
              <div className="tt-coin-stats-24change">
                <div className="change24-item">
                  <span className="change24-label">24h High</span>
                  <div className="change24-value">45,000.0</div>
                </div>
                <div className="change24-item">
                  <span className="change24-label">24h Low</span>
                  <div className="change24-value">34,023.0</div>
                </div>
                <div className="change24-item">
                  <span className="change24-label">24h Vol(BTC)</span>
                  <div className="change24-value">286,005.940</div>
                </div>
                <div className="change24-item">
                  <span className="change24-label">24h Vol(USDT)</span>
                  <div className="change24-value">10,851,926.67</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{minHeight: "500px"}}>
            <RealTimeChartWidget
              symbol="BINANCE:BTCUSD"
              locale="en"
              interval="D"
              autosize="true"
            />
          </div>
          <div className="tt-history" style={{marginTop: "10px"}}>
            <div className="card pt-3" style={{height: "300px"}}>
              <h3 className="ps-3 mb-3 trade-title">Trade History</h3>
              <div className="trade-history">
                <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="w-100 main_table">
                        <thead className="rounded" style={{backgroundColor: "#F2F4F5"}}>
                          <tr >
                            <th scope="col" className="fw-bold" style={{color:"#264655", paddingLeft: "10px"}}>
                              Order Id 
                            </th>
                            <th scope="col" className="fw-bold" style={{color:"#264655", paddingLeft: "10px"}}>
                              Market Type
                            </th>
                            <th scope="col" className="fw-bold" style={{color:"#264655", paddingLeft: "10px"}}>
                              Open Price
                            </th>
                            <th scope="col" className="fw-bold" style={{color:"#264655", paddingLeft: "10px"}}>
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                            <TraderHistoryList traderHistoryList={historyList} onEditOpen={setEditOpen} />
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="css-mobile">
            <div className="css-vurnku">
              <div className="css-1488ivs">
                <button className="css-btc-buy"
                  onClick={()=>{
                    console.log('btnclicked');
                    setCreateOpen(true)
                  }}  
                >
                  Create Trade</button>
              </div>
            </div>
          </div>
        </div>
        <BuyNowUpdatePositionBar />
      </div>
      <Modal
        isOpen={createOpen}
      >
        <ModalHeader>
          <div className="head-hr">
            <hr onClick={()=>setCreateOpen(false)} />
          </div>
          <div >
            <button type="button" className="btn btn-outline-light text-dark close-btn" onClick={()=>setCreateOpen(false)}>
              <img src={icon_modal_close} alt="" className="img-fluid" style={{width: '20px', height: '20px'}} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <BuySellForm editState={editOpen} />
        </ModalBody>
      </Modal>
      <Modal
        isOpen={editOpen}        
      >
        <ModalHeader >
          <div className="head-hr">
            <hr onClick={()=>setEditOpen(false)} />
          </div>
          <div>
            <button type="button" className="btn btn-outline-light text-dark close-btn" onClick={()=>setEditOpen(false)}>
              <img src={icon_modal_close} alt="" className="img-fluid" style={{width: '20px', height: '20px'}} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <BuySellForm editState={editOpen} />
        </ModalBody>
      </Modal>
    </>
  );
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export const BuyNowUpdatePositionBar = () => {
  const [fullMenu, setFullMenu] = useState(true);
  // const [currentRightMenu, setCurrentRightMenu] = useState("");
  const [currentRightMenu] = useState("");

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (windowDimensions.width > 1075) {
      setFullMenu(true);
    } else {
      setFullMenu(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  return (
    <>
      {/* toolbar start */}
      <div className="tt-right-column tt-right-column-expanded">
        {/* toolbar ends */}

        <div
          className={`wrapper-with-fade wrapper-visible ${
            fullMenu ? "" : "d-none"
          }`}
        >
          {currentRightMenu === "coin-info" ? (
            <>
              <h1>BTCUSDT</h1>
              <h2>Bitcoin / TetherUS</h2>
              <h3>BINANCE</h3>
              <legend>Crypto</legend>
              <div className="price-values">
                <span className="current-price">36658.93</span>
                <span className="current-coin">USD</span>
                <div className="price-current-ticker">-507.17 (1.35%)</div>
                <div className="market-status">MARKET OPEN</div>
              </div>
            </>
          ) : (
            <BuySellForm editState={false} />
          )}
        </div>
      </div>
    </>
  );
};

export const BuySellForm = (props) => {
  const [active, setActive] = useState('buy');
  const [signalType, setActiveBtn] = useState('spot');
  const [activeCryto, setActiveCryto] = useState('usdt');
  const [price, setPrice] = useState(0);
  const [entryPrice, setQuantity] = useState(0);
  const [stopLoss, setPriceStop] = useState(0);
  const [amount, setQuantityStop] = useState(0);
  const { editState } = props
  const [buyProfit, setBuyProfit] = useState([
    { price: 0, amount: 0 }
  ])
  const [updateProfit, setUpdateProfit] = useState([
    { price: 0, amount: 0 }
  ])

  const handleBuy = () => {
    setActive('buy');
  }
  const handleUpdate = () => {
    setActive('update');
  }
  const contractChange = (e, {value}) => {
    e.persist();
    console.log(value)
  };

  const handleChangePrice = (price) => {
    if (price >= 0)
      setPrice(price)
  }

  
  const handleChangeQuantity = (price) => {
    if (price >= 0)
    setQuantity(price)
  }
  
  const handleChangePriceStop = (price) => {
    if (price >= 0)
      setPriceStop(price)
  }

  const handleChangeQuantityStop = (price) => {
    if (price >= 0)
      setQuantityStop(price)
  }

  const handleChangeProfit = (name, value, index_num) => {
    console.log("handlechangeprofit: ", name, value, index_num);
    if(value < 0 || value == NaN)
      value = 0   

    setBuyProfit(buyProfit => buyProfit.map((item, index) => {
      if(index === index_num) {
        item[name] =
         value
      }
      return item
    }))
  }
  
  const handleChangeProfitList = (type) => {
    if(type === 'add') {
      if(buyProfit.length < 4) {
        let item = { price: 0, quantity: 0 }
        setBuyProfit(buyProfit => [...buyProfit, item])
      }
    } else if (type === 'remove') {
      if(buyProfit.length > 1) {
        setBuyProfit(buyProfit => buyProfit.slice(0, buyProfit.length-1))
      }
    }
  }

  const handleChangeUpdateProfit = (name, value, index_num) => {
    console.log("handlechangeUpdateprofit: ", name, value, index_num);
    if(value < 0 || value == NaN)
      value = 0   

    setUpdateProfit(buyProfit => updateProfit.map((item, index) => {
      if(index === index_num) {
        item[name] =
         value
      }
      return item
    }))
  }
  
  const handleChangeUpdateProfitList = (type) => {
    if(type === 'add') {
      if(updateProfit.length < 4) {
        let item = { price: 10, quantity: 3000 }
        setUpdateProfit(updateProfit => [...updateProfit, item])
      }
    } else if (type === 'remove') {
      setUpdateProfit(updateProfit => updateProfit.slice(0, updateProfit.length-1))
    }
  }
  return (
    <div className="tab-content" id= "myTabContent">
      
      <div
        className="tab-pane fade show active"
        id="frontend"
        role="tabpanel"
        aria-labelledby="frontend-tab"
      >
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12">
            <ul className="nav nav-tabs join-tabs-ul trade-ul" role="tablist">
              <li className={`nav-item ${active === "buy" ? "active" : ""}`} role="presentation" style={{width:"50%"}}>
                <button
                  className={`nav-link`}
                  id="frontend-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#frontend"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                  onClick={handleBuy}
                >
                  Buy Now
                </button>
              </li>
              <li className={`nav-item ${active === "update" ? "active" : ""}`} role="presentation" style={{width:"50%"}}>
                <button
                  className={`nav-link`}
                  id="backend-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#backend"
                  type="button"
                  role="tab"
                  aria-controls="backend"
                  aria-selected="false"
                  onClick={handleUpdate}
                >
                  Update Position
                </button>
              </li>
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
              {active === "buy" ?
                <>    
                              
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Exchange*" />
                      <span style={{width: '50%'}}
                        className="input-group-text p-0 border-0"
                      >
                        <Dropdown
                          fluid
                          selection
                          options={options}
                          onChange={contractChange}
                          defaultValue='Binance'
                        />
                        
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Trading Symbol*" />
                      <span style={{width: '50%'}}
                        className="input-group-text p-0 border-0"
                      >
                        <select
                          className="form-select select-left" style={{borderLeft: 'none'}}
                        >
                          <option defaultValue={""} value="maticusdt">
                            MATICUSDT
                          </option>
                          <option value="market">Market</option>
                        </select>
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="btn-group terminal-button">

                    <button type="button" style={{borderRight: 'none', width: '50%'}} onClick={() => setActiveBtn('spot')} className={`trade-type btn ${signalType === 'spot' ? 'btn-trade' : 'btn-white'}`}>Spot</button>
                    <button type="button" style={{borderLeft: 'none', width: '50%'}} onClick={() => setActiveBtn('future')} className={`trade-type btn ${signalType === 'future' ? 'btn-trade' : 'btn-white'}`}>Futures</button>
                    
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Position*" />
                          <span style={{width: '50%'}}
                            className="input-group-text p-0 border-0"
                          >
                            <select
                              className="form-select select-left" style={{borderLeft: 'none'}}
                            >
                              <option defaultValue={""} value="maticusdt">
                                Short
                              </option>
                              <option value="market">Market</option>
                            </select>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="input-group">
                          <input
                            id="leverage-input"
                            type="text"
                            className="form-control form-input"
                            placeholder="Leverage*" />
                          <span style={{width: '50%'}}
                            className="input-group-text p-0 border-0"
                          >
                            <select
                              className="form-select select-left" style={{borderLeft: 'none'}}
                            >
                              <option defaultValue={""} value="maticusdt">
                                10X
                              </option>
                              <option value="market">Market</option>
                            </select>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Order*" />
                          <span style={{width: '50%'}}
                            className="input-group-text p-0 border-0"
                          >
                            <select
                              className="form-select select-left"  style={{borderLeft: 'none'}}
                            >
                              <option value="limit">
                                Limit
                              </option>
                              <option value="market">Market</option>
                            </select>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898", fontSize: "15px"}}>
                          Price *
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangePrice(price - 1)} type="button">-</button>
                          </div>
                          <input 
                            type="text"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                              handleChangePrice(parseFloat(e.target.value))
                            }}
                            value={price}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangePrice(price + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Quantity
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeQuantity(entryPrice - 1)} type="button">-</button>
                          </div>
                          <input 
                            type="text"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                              handleChangeQuantity(parseFloat(e.target.value))
                            }}
                            value={entryPrice}  
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeQuantity(entryPrice + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label></label>
                        <div className="input-group mb-3 mt_3" style={{width: '100%'}}>
                          <button type="button" style={{borderRight: 'none', width: '50%', fontFamily: 'Regular, serif', fontWeight: '600'}} onClick={() => setActiveCryto('usdt')} className={`terminal_button trade-type btn ${activeCryto === 'usdt' ? 'btn-trade' : 'btn-white'}`}>USDT</button>
                          <button type="button" style={{borderLeft: 'none', width: '50%', borderRight: '1px solid #ced4da', fontFamily: 'Regular, serif', fontWeight: '600'}} onClick={() => setActiveCryto('btc')} className={`terminal_button trade-type btn ${activeCryto === 'btc' ? 'btn-trade' : 'btn-white'}`}>BTC</button>
                        </div>
                    </div></div>
                  </div>
                  
                </div>
                <hr></hr>
                <div className="row">
                  <span className="trade-subtitle">Stop Loss</span>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Price
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangePriceStop(stopLoss - 1)} type="button">-</button>
                          </div>
                          <input
                            type="text"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                                handleChangePriceStop(parseFloat(e.target.value))
                            }}
                            value={stopLoss}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangePriceStop(stopLoss + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Quantity
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeQuantityStop(amount - 1)} type="button">-</button>
                          </div>
                          <input
                            type="text"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                                handleChangeQuantityStop(parseFloat(e.target.value))
                            }}
                            value={amount}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeQuantityStop(amount + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <hr></hr>
                <div className="row">
                  <span className="trade-subtitle">Take Profit</span>
                </div>
                {buyProfit && buyProfit.map((item, index)=> {
                  return (
                    <div className="row mt-2" key={index}>
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <label htmlFor="" style={{color: "#989898"}}>
                              Price 
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeProfit("price", item.price - 1, index)} type="button">-</button>
                              </div>
                              <input
                                type="text"
                                className="form-control price-border"
                                name="price"
                                onChange={e => {
                                  if(e.target.value !== '')
                                    handleChangeProfit("price", parseFloat(e.target.value), index)
                                }}
                                value={item.price}
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeProfit("price", item.price + 1, index)} type="button">+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <label htmlFor="" style={{color: "#989898"}}>
                              Quantity
                            </label>
                            <div className="input-group ">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeProfit("amount", item.amount - 1, index)} type="button">-</button>
                              </div>
                              <input
                                type="text"
                                className="form-control price-border"
                                name="amount"
                                onChange={e => {
                                  if(e.target.value !== '')
                                    handleChangeProfit("amount", parseFloat(e.target.value), index)
                                }}
                                value={item.amount}
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeProfit("amount", item.amount + 1, index)} type="button">+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="row mt-2">
                  <div className="d-flex justify-content-between profit-action mt-3">
                    <div className="profit-ui" onClick={()=>handleChangeProfitList("add")}>
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid me-1"
                        style={{height:'16px'}}
                      />
                      <span style={{color: '#199B4D', fontWeight: '500', fontSize: "14px"}}>Add Take Profit</span>
                    </div>
                    <div className="profit-ui" onClick={() => handleChangeProfitList("remove")}>
                      <img
                        src={icon_modal_minus}
                        alt=""
                        className="img-fluid me-1"
                      />
                      <span style={{color: '#EF3B45', fontWeight: '500', fontSize: "14px"}}>Remove Take Profit</span>
                    </div>
                    
                    
                  </div>
                  
                </div>
                <div className="row mt-3">
                  <div className="form-check" style={{paddingLeft: '2.5em', marginBottom: '10px'}}>
                    <input type="checkbox" className="form-check-input" id="subscriber" />
                    <label className="form-check-label" htmlFor="subscriber">Copy The Order For My Subscribers</label>
                  </div>
                  <div className="form-check" style={{paddingLeft: '2.5em'}}>
                    <input type="checkbox" className="form-check-input" id="sendorder" />
                    <label className="form-check-label" htmlFor="sendorder">Send The Order As A Signal</label>
                  </div>
                </div>
                <div className="row mt-3 pb-3">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="d-grid gap-2">
                      {editState ? (
                        <>
                          <button className="btn btn-success submit-order">Log In</button>
                          <button className="btn btn-success submit-order">Register Now</button>
                        </>
                      ):(
                        <button className="btn btn-success submit-order">Submit Order</button>
                      )}
                    </div>
                  </div>
                </div>
              </>
               : 
              <>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Exchange*" />
                      <span style={{width: '50%'}}
                        className="input-group-text p-0 border-0"
                      >
                        <Dropdown
                          fluid
                          selection
                          options={options}
                          onChange={contractChange}
                          defaultValue='Binance'
                        />
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Order ID*" />
                      <span style={{width: '50%'}}
                        className="input-group-text p-0 border-0 bg-primary"
                      >
                        <select
                          className="form-select select-left" style={{borderLeft: 'none'}}
                        >
                          <option defaultValue={""} value="#852126265">
                            #852126265
                          </option>
                        </select>
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Trading Symbol*" />
                      <span style={{width: '50%'}}
                        className="input-group-text p-0 border-0"
                      >
                        <select
                          className="form-select select-left" style={{borderLeft: 'none'}}
                        >
                          <option defaultValue={""} value="maticusdt">
                            MATICUSDT
                          </option>
                          <option value="market">Market</option>
                        </select>
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="btn-group terminal-button">
                    <button type="button" style={{borderRight: 'none', width: '50%'}} onClick={() => setActiveBtn('spot')} className={`trade-type btn ${signalType === 'spot' ? 'btn-trade' : 'btn-white'}`}>Spot</button>
                    <button type="button" style={{borderLeft: 'none', width: '50%'}} onClick={() => setActiveBtn('future')} className={`trade-type btn ${signalType === 'future' ? 'btn-trade' : 'btn-white'}`}>Futures</button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Position*" />
                          <span style={{width: '50%'}}
                            className="input-group-text p-0 border-0 bg-primary"
                          >
                            <select
                              className="form-select select-left" style={{borderLeft: 'none'}}
                            >
                              <option value="maticusdt">
                                Short
                              </option>
                              <option value="market">Market</option>
                            </select>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="input-group">
                          <input
                            id="position-leverage-input"
                            type="text"
                            className="form-control form-input"
                            placeholder="Leverage*" />
                          <span style={{width: '50%'}}
                            className="input-group-text p-0 border-0"
                          >
                            <select
                              className="form-select select-left" style={{borderLeft: 'none'}}
                            >
                              <option value="maticusdt">
                                10X
                              </option>
                              <option value="market">Market</option>
                            </select>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Order*" />
                          <span style={{width: '50%'}}
                            className="input-group-text p-0 border-0"
                          >
                            <select
                              className="form-select select-left" style={{borderLeft: 'none'}}
                            >
                              <option value="limit">
                                Limit
                              </option>
                              <option value="market">Market</option>
                            </select>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Price *
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangePrice(price - 1)} type="button">-</button>
                          </div>
                          <input
                            type="number"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                              handleChangePrice(parseFloat(e.target.value))
                            }}
                            value={price}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangePrice(price + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Quantity
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeQuantity(entryPrice - 1)} type="button">-</button>
                          </div>
                          {/* <input type="text" className="form-control price-border" onChange={e => setQuantity(parseFloat(e.target.value))} value={quantity} /> */}
                          <input
                            type="number"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                              handleChangeQuantity(parseFloat(e.target.value))
                            }}
                            value={entryPrice}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeQuantity(entryPrice + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label></label>
                        <div className="input-group mb-3 mt_3" style={{width: '100%'}}>
                          <button type="button" style={{borderRight: 'none', width: '50%'}} onClick={() => setActiveCryto('usdt')} className={`terminal_button trade-type btn ${activeCryto === 'usdt' ? 'btn-trade' : 'btn-white'}`}>USDT</button>
                          <button type="button" style={{borderLeft: 'none', width:'50%', borderRight: '1px solid #ced4da'}} onClick={() => setActiveCryto('btc')} className={`terminal_button trade-type btn ${activeCryto === 'btc' ? 'btn-trade' : 'btn-white'}`}>BTC</button>
                        </div>
                    </div></div>
                  </div>
                  
                </div>
                <hr></hr>
                <div className="row">
                  <span className="trade-subtitle">Stop Loss</span>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Price 
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangePriceStop(stopLoss - 1)} type="button">-</button>
                          </div>
                          <input
                            type="text"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                                handleChangePriceStop(parseFloat(e.target.value))
                            }}
                            value={stopLoss}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangePriceStop(stopLoss + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <label htmlFor="" style={{color: "#989898"}}>
                          Quantity
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeQuantityStop(amount - 1)} type="button">-</button>
                          </div>
                          <input
                            type="text"
                            className="form-control price-border"
                            onChange={e => {
                              if(e.target.value !== '')
                                handleChangeQuantityStop(parseFloat(e.target.value))
                            }}
                            value={amount}
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeQuantityStop(amount + 1)} type="button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <hr></hr>
                <div className="row">
                  <span className="trade-subtitle">Take Profit</span>
                </div>
                {updateProfit && updateProfit.map((item, index)=> {
                  return (
                    <div className="row mt-2" key={index}>
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <label htmlFor="" style={{color: "#989898"}}>
                              Price 
                            </label>
                            <div className="input-group ">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeUpdateProfit("price", item.price - 1, index)} type="button">-</button>
                              </div>
                              <input
                                type="text"
                                className="form-control price-border"
                                name="price"
                                onChange={e => {
                                  if(e.target.value !== '')
                                    handleChangeUpdateProfit("price", parseFloat(e.target.value), index)
                                }}
                                value={item.price}
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeUpdateProfit("price", item.price + 1, index)} type="button">+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <label htmlFor="" style={{color: "#989898"}}>
                              Quantity
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeUpdateProfit("quantity", item.quantity - 1, index)} type="button">-</button>
                              </div>
                              <input
                                type="text"
                                className="form-control price-border"
                                name="quantity"
                                onChange={e => {
                                  if(e.target.value !== '')
                                    handleChangeUpdateProfit("quantity", parseFloat(e.target.value), index)
                                }}
                                value={item.quantity}
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeUpdateProfit("quantity", item.quantity + 1, index)} type="button">+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="row mt-2">
                  <div className="d-flex justify-content-between profit-action mt-3">
                    <div className="profit-ui" onClick={()=>handleChangeUpdateProfitList("add")}>
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid me-1"
                        style={{height:'16px'}}
                      />
                      <span style={{color: '#199B4D', fontWeight: '500',fontSize: "14px"}}>Add Take Profit</span>
                    </div>
                    <div className="profit-ui" onClick={() => handleChangeUpdateProfitList("remove")}>
                      <img
                        src={icon_modal_minus}
                        alt=""
                        className="img-fluid me-1"
                        style={{height:'16px'}}
                      />
                      <span style={{color: '#EF3B45', fontWeight: '500',fontSize: "14px"}}>Remove Take Profit</span>
                    </div>
                    
                    
                  </div>
                  
                </div>
                <div className="row mt-3">
                  <div className="form-check" style={{paddingLeft: '2.5em', marginBottom: '10px'}}>
                    <input type="checkbox" className="form-check-input" id="subscriber" />
                    <label className="form-check-label" htmlFor="subscriber">Copy The Order For My Subscribers</label>
                  </div>
                  <div className="form-check" style={{paddingLeft: '2.5em'}}>
                    <input type="checkbox" className="form-check-input" id="sendorder" />
                    <label className="form-check-label" htmlFor="sendorder">Send The Order As A Signal</label>
                  </div>
                </div>
                <div className="row mt-3 pb-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="d-grid gap-2">
                      {editState ? (
                        <>
                          <button className="btn btn-success submit-order">Log In</button>
                          <button className="btn btn-success submit-order">Register Now</button>
                        </>
                      ):(
                        <button className="btn btn-success submit-order" >Submit Order</button>
                      )}
                      </div>
                    </div>
                </div>
              </>
               }
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

