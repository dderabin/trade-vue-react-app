import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { RealTimeChartWidget } from "react-tradingview-widgets";
import "font-awesome/css/font-awesome.css";
import {
  Modal,
  ModalBody,
  ModalHeader
} from 'reactstrap'
import icon_modal_close from "./../../assets/img/icons/modal-close.svg";
import icon_modal_minus from "./../../assets/img/icons/modal-minus.svg";
import axios from "../../axiosClient";
import Axios from "axios"
import { useDispatch } from "react-redux";
import { AppActions } from '../../store/actions'
import useTraderHistory from "../../hooks/useTradeHistory";
// const re = /^[0-9\b]+$/;
// const positiveFlotReg = /^(?!0\d)\d*(\.\d+)?$/;

export const TradeTerminalPage = () => {


  return (
    <div className="tt-wrapper">
      <GraphicalChartArea />
    </div>
  );
};

export const GraphicalChartArea = () => {
  const { historyList } = useTraderHistory()
  const [updateState, setUpdateState] = useState({})
  const [createOpen, setCreateOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [active, setActive] = useState('buy');
  const [exchanges, setExchanges] = useState([])
  const [chosenExchange, setChosenExchange] = useState('')
  const [tradingSymbol, setTradingSymbol] = useState({
    tradingSymbol: 'BTCUSDT',
    from: 'BTC',
    to: 'USDT'
  })
  const [chartInfo, setChartInfo] = useState(null)
  const handleBuy = () => {
    setActive('buy');
  }
  const handleUpdate = () => {
    setActive('update');
  }
  const contractChange = (data) => {
    console.log('data =>', data)
    setChosenExchange(data)
    console.log(chosenExchange)
  };


  function setCryptos(coins) {
    let tradingSymbol = coins
    let cryptosArr = tradingSymbol.split('U')
    console.log('cryptosArr =>', cryptosArr)
    let cryptos = {
      tradingSymbol: cryptosArr[0].toUpperCase() + 'U' + cryptosArr[1].toUpperCase(),
      from: cryptosArr[0].toUpperCase(),
      to: 'U' + cryptosArr[1].toUpperCase()
    }
    console.log('cryptossssss =>', cryptos)
    setTradingSymbol(cryptos)
  }

  async function getExchanges() {
    try {
      const response = await axios.get('/exchanges/list')
      let exhchagesList = response.data.map(item => {
        return {
          key: item,
          text: item,
          value: item
        }
      })
      console.log('exchange Iterration =>', exhchagesList)
      setExchanges(exhchagesList)
      setChosenExchange(exhchagesList[0].value)
    }
    catch (err) {
      console.log('err is =>', err.response)
    }
  }

  async function getBinancePriceAPI() {
    try {
      let response = await Axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${tradingSymbol.tradingSymbol}`)
      // console.log('response in binance =>', response.data)
      let info = {
        name: response.data.symbol,
        price: Number(response.data.lastPrice).toFixed(2),
        priceChangePercent: Number(response.data.priceChangePercent).toFixed(2),
        highestPrice: Number(response.data.highPrice).toFixed(2),
        lowestPrice: Number(response.data.lowPrice).toFixed(2),
        volume: Number(response.data.volume).toFixed(2),
        qouteVolume: Number(response.data.quoteVolume).toFixed(2),
      }
      setChartInfo(info)
    }
    catch (err) {
      console.log('errrrr in binance =>', err)
    }
  }
  async function getFTXPriceAPI() {
    try {
      let response = await Axios.get(`https://ftx.com/api/markets/${tradingSymbol.from}/${tradingSymbol.to}`)
      console.log('response in ftx =>', response.data.result)
      let info = {
        name: response.data.result.name,
        price: Number(response.data.result.price).toFixed(2),
        priceChangePercent: Number(response.data.result.change24h * 100).toFixed(2),
        highestPrice: Number(response.data.result.priceHigh24h).toFixed(2),
        lowestPrice: Number(response.data.result.priceLow24h).toFixed(2),
        volume: Number(response.data.result.quoteVolume24h).toFixed(2),
        qouteVolume: Number(response.data.result.quoteVolume24h).toFixed(2),
      }
      setChartInfo(info)
    }
    catch (err) {
      console.log('errrrr in ftx =>', err)
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updateStateMaking(history) {
    if (history.state === 'ordered' || history.state === 'preOrder' || history.state === 'position') {
      setEditOpen(true)
      setUpdateState(history)
      setActive('update')
    }
  }

  useEffect(() => {
    getExchanges()
  }, [])
  useEffect(() => {
    // if (chosenExchange.includes('binance')) {
    //   getBinancePriceAPI()
    //   // let BinanceWebSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${tradingSymbol.tradingSymbol}@ticker`)
    //   // console.log('BinanceWebSocket =>', BinanceWebSocket)
    // }
    // else {
    //   getFTXPriceAPI()
    // }
    let mounted = true;
    const interval = setInterval(() => {
      if (chosenExchange.includes('binance')) {
        mounted && getBinancePriceAPI()
      }
      else {
        mounted && getFTXPriceAPI()
      }
    }, 1000);
    return () => {
      mounted = false;
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenExchange, tradingSymbol.tradingSymbol])

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
                <span className="symbol">{tradingSymbol.tradingSymbol}</span>{" "}
                <span className={`${chartInfo && chartInfo.priceChangePercent < 0 ? 'red' : 'green'} symbol-value`}>{chartInfo && numberWithCommas(chartInfo.price)}</span>{" "}
                <span className="symbol-unit" style={{ marginRight: "15px" }}>{tradingSymbol.to}</span>
                <span className={`${chartInfo && chartInfo.priceChangePercent < 0 ? 'red' : 'green'} symbol-fee`}>
                  {chartInfo &&
                    numberWithCommas(((chartInfo.price * chartInfo.priceChangePercent) / 100).toFixed(2))} ({chartInfo && chartInfo.priceChangePercent} %)
                </span>
              </div>
            </div>
            <div className="tt-coin-stats-24change-wrapper">
              <div className="tt-coin-stats-24change">
                <div className="change24-item">
                  <span className="change24-label">24h High</span>
                  <div className="change24-value">{chartInfo && numberWithCommas(chartInfo.highestPrice)}</div>
                </div>
                <div className="change24-item">
                  <span className="change24-label">24h Low</span>
                  <div className="change24-value">{chartInfo && numberWithCommas(chartInfo.lowestPrice)}</div>
                </div>
                <div className="change24-item">
                  <span className="change24-label">24h Vol({tradingSymbol.from})</span>
                  <div className="change24-value">{chartInfo && numberWithCommas(chartInfo.volume)}</div>
                </div>
                <div className="change24-item">
                  <span className="change24-label">24h Vol({tradingSymbol.to})</span>
                  <div className="change24-value">{chartInfo && numberWithCommas(chartInfo.qouteVolume)}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ minHeight: "500px" }}>
            <RealTimeChartWidget
              symbol={chosenExchange === 'ftx' ? `FTX:${tradingSymbol.tradingSymbol}` : `BINANCE:${tradingSymbol.tradingSymbol}`}
              locale="en"
              interval="D"
              autosize="true"
            />
          </div>
          <div className="tt-history" style={{ marginTop: "10px" }}>
            <div className="card pt-3" style={{ height: "300px" }}>
              <h3 className="ps-3 mb-3 trade-title">Trade History</h3>
              <div className="trade-history">
                <div className="card-body pt-0">
                  <div className="table-responsive">
                    <table className="w-100 main_table">
                      <thead className="rounded" style={{ backgroundColor: "#F2F4F5" }}>
                        <tr >
                          <th scope="col" className="fw-bold" style={{ color: "#264655", paddingLeft: "10px", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            Order Id
                          </th>
                          <th scope="col" className="fw-bold" style={{ color: "#264655", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            Market Type
                          </th>
                          <th scope="col" className="fw-bold" style={{ color: "#264655", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            From
                          </th>
                          <th scope="col" className="fw-bold" style={{ color: "#264655", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            To
                          </th>
                          <th scope="col" className="fw-bold" style={{ color: "#264655", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            Open Price
                          </th>
                          <th scope="col" className="fw-bold" style={{ color: "#264655", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            Stop Loss
                          </th>
                          <th scope="col" className="fw-bold" style={{ color: "#264655", textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bolder' }}>
                            State
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <TraderHistoryList traderHistoryList={historyList} onEditOpen={setEditOpen} /> */}
                        {historyList.map((history, index) => (
                          <tr style={{ fontWeight: 'bold', textAlign: 'center', cursor: (history.state === 'ordered' || history.state === 'preOrder' || history.state === 'position') && 'pointer' }} key={index} onClick={() => updateStateMaking(history)}>
                            <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center' }}>{history._id}</td>
                            <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center' }}>{history.exchangePlatform}</td>
                            <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center' }}>{history.symbol.from}</td>
                            <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center' }}>{history.symbol.to}</td>
                            <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center' }}>{history.entryPrice}</td>
                            <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center' }}>{history.stopLoss}</td>
                            <td style=
                              {{
                                height: '38px',
                                fontSize: '0.7rem', textAlign: 'center',
                                color: history.state === 'closedWithError' || history.state === 'closedByStopLoss' ? 'red'
                                  : history.state === 'closedByLastTarget' || history.state === 'closedByMiddleTargets' || history.state === 'inPosition' ? 'orange'
                                    : history.state === 'ordered' ? 'green' : 'black'
                              }}>
                              {history.state}
                            </td>
                          </tr>
                        ))}

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
                  onClick={() => {
                    console.log('btnclicked');
                    setCreateOpen(true)
                  }}
                >
                  Create Trade</button>
              </div>
            </div>
          </div>
        </div>
        <BuyNowUpdatePositionBar
          updateState={updateState}
          setUpdateState={setUpdateState}
          chartInfo={chartInfo}
          exchanges={exchanges}
          active={active}
          tradingSymbol={tradingSymbol}
          chosenExchange={chosenExchange}
          handleBuy={handleBuy}
          handleUpdate={handleUpdate}
          contractChange={contractChange}
          setCryptos={setCryptos}
        />
      </div>
      <Modal
        isOpen={createOpen}
      >
        <ModalHeader>
          <div className="head-hr">
            <hr onClick={() => setCreateOpen(false)} />
          </div>
          <div >
            <button type="button" className="btn btn-outline-light text-dark close-btn" onClick={() => setCreateOpen(false)}>
              <img src={icon_modal_close} alt="" className="img-fluid" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <BuySellForm
            updateState={updateState}
            editState={editOpen}
            setUpdateState={setUpdateState}
            chartInfo={chartInfo}
            exchanges={exchanges}
            active={active}
            tradingSymbol={tradingSymbol}
            chosenExchange={chosenExchange}
            handleBuy={handleBuy}
            handleUpdate={handleUpdate}
            contractChange={contractChange}
            setCryptos={setCryptos}
          />
        </ModalBody>
      </Modal>
      <Modal
        isOpen={editOpen}
      >
        <ModalHeader >
          <div className="head-hr">
            <hr onClick={() => setEditOpen(false)} />
          </div>
          <div>
            <button type="button" className="btn btn-outline-light text-dark close-btn" onClick={() => setEditOpen(false)}>
              <img src={icon_modal_close} alt="" className="img-fluid" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <BuySellForm editState={editOpen}
            updateState={updateState}
            setUpdateState={setUpdateState}
            chartInfo={chartInfo}
            exchanges={exchanges}
            active={active}
            tradingSymbol={tradingSymbol}
            chosenExchange={chosenExchange}
            handleBuy={handleBuy}
            handleUpdate={handleUpdate}
            contractChange={contractChange}
            setCryptos={setCryptos}
          />
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
export const BuyNowUpdatePositionBar = (props) => {
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
          className={`wrapper-with-fade wrapper-visible ${fullMenu ? "" : "d-none"
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
            <BuySellForm editState={false}
              updateState={props.updateState}
              setUpdateState={props.setUpdateState}
              chartInfo={props.chartInfo}
              exchanges={props.exchanges}
              active={props.active}
              tradingSymbol={props.tradingSymbol}
              chosenExchange={props.chosenExchange}
              handleBuy={props.handleBuy}
              handleUpdate={props.handleUpdate}
              contractChange={props.contractChange}
              setCryptos={props.setCryptos}
            />
          )}
        </div>
      </div>
    </>
  );
};

export const BuySellForm = (props) => {
  const dispatch = useDispatch()
  const { historyList } = useTraderHistory()
  const [type, setType] = useState('self')
  const [signalType, setActiveBtn] = useState('spot');
  const [activeCrypto, setActiveCrypto] = useState('USDT');
  const [order, setOrder] = useState('limit')
  const [position, setPosition] = useState('Spot')
  const [leverage, setLeverage] = useState('5')
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLoss, setPriceStop] = useState('');
  const [amount, setAmount] = useState(0);
  const { editState } = props.editState;
  const [buyProfit, setBuyProfit] = useState([
    { price: 0, amount: 0 }
  ])
  const [updateProfit, setUpdateProfit] = useState([
    { price: 0, amount: 0 }
  ])

  const handleChangePrice = (event) => {
    const { value } = event.target
    if (value === '') {
      setEntryPrice('')
      return
    }
    parseFloat(value) >= 0 && setEntryPrice(value)    
  }
  
  const handleChangeQuantity = (event) => {
    const { value } = event.target
    if (value === '') {
      setAmount('')
      return
    }
    parseFloat(value) >= 0 && setAmount(value)
  }

  const handleChangePriceStop = (price) => {
    const priceNum = parseFloat(price);
    const entryPriceNum = parseFloat(entryPrice);
    if (priceNum >= 0) {
      if (position.toLowerCase() === 'short') {
        setPriceStop(priceNum > entryPriceNum ? priceNum : entryPriceNum)
      }
      else {
        setPriceStop(priceNum < entryPriceNum ? priceNum : entryPriceNum)
      }
    }
  }

  const handleChangeProfit = (name, value, index_num) => {
    let valueVar = value;
    if (valueVar !== '' && parseFloat(valueVar) < 0) return;
    // let valueVar = Number(value)
    // console.log("handlechangeprofit: ", name, Number(value), index_num);
    // if (Number(value) < 0 || Number.isNaN(value))
    //   valueVar = 0
    // if (position.toLowerCase() === 'short') {
    //   if (Number(value) < entryPrice)
    //     valueVar = Number(value)
    //   else
    //     valueVar = entryPrice
    // }
    // else {
    //   if (Number(value) > entryPrice)
    //     valueVar = Number(value)
    //   else
    //     valueVar = entryPrice
    // }
    // let sum = 0;
    // buyProfit.map(item => {
    //   sum += item.amount
    // })
    // let remaining = 0
    setBuyProfit(buyProfit => buyProfit.map((item, index) => {
      if (index === index_num) {
        item[name] = valueVar
      }
      return item
    }))
    // if (sum > 100) {
    //   setBuyProfit(buyProfit => buyProfit.map((item, index) => {
    //     if (index === index_num) {
    //       item.amount = Number(profitNumber)
    //     }
    //     return item
    //   }))
    // }
  }

  const handleChangeProfitList = (type) => {
    if (type === 'add') {
      if (buyProfit.length < 4) {
        let item = { price: 0, amount: 0 }
        setBuyProfit(buyProfit => [...buyProfit, item])
      }
    } else if (type === 'remove') {
      if (buyProfit.length > 1) {
        setBuyProfit(buyProfit => buyProfit.slice(0, buyProfit.length - 1))
      }
    }
  }


  const handleChangeUpdateProfit = (name, value, index_num) => {
    console.log("handlechangeUpdateprofit: ", name, value, index_num);
    if (value < 0 || Number.isNaN(value))
      value = 0

    setUpdateProfit(buyProfit => updateProfit.map((item, index) => {
      if (index === index_num) {
        item[name] =
          value
      }
      return item
    }))
  }
  const handleChangeUpdateProfitList = (type) => {
    if (type === 'add') {
      if (updateProfit.length < 4) {
        let item = { price: 10, quantity: 3000 }
        setUpdateProfit(updateProfit => [...updateProfit, item])
      }
    } else if (type === 'remove') {
      setUpdateProfit(updateProfit => updateProfit.slice(0, updateProfit.length - 1))
    }
  }
  function signalProviderCheckBox() {
    if (type === 'self' || type === 'copyTrader')
      setType('signalProvider')
    else if (type === 'signalProvider')
      setType('self')
    else
      setType('self')
  }

  function copyTraderCheckBox() {
    if (type === 'self' || type === 'signalProvider')
      setType('copyTrader')
    else if (type === 'copyTrader')
      setType('self')
    else
      setType('self')
  }

  const handleSubmitOrder = () => {
    const signalTypeStr = signalType.toLowerCase() === 'spot' ? (order.toLowerCase() === 'limit' ? 'Spot' : position) : position;
    dispatch(AppActions.signalAddAction({
      type,
      exchangePlatform: props.chosenExchange,
      from: props.tradingSymbol.from,
      to: props.tradingSymbol.to,
      signalType: signalTypeStr,
      entryPrice: order.toLowerCase() !== 'market' ? parseFloat(entryPrice) : undefined,
      amount: activeCrypto === props.tradingSymbol.from ? parseFloat(amount) : parseFloat(amount) / props.chartInfo.price,
      stopLoss: parseFloat(stopLoss),
      leverage: signalType.toLowerCase() !== 'spot' ? parseInt(leverage) : undefined,
      targets: buyProfit.map(item => ({price: parseFloat(item.price), amount: parseFloat(item.amount)}))
    }))
  }

  // const options = [
  //   {
  //     key: 'Binance',
  //     text: 'Binance',
  //     value: 'Binance',
  //     image: { avatar: true, src: 'img/binance-icon.png' },
  //   },
  //   {
  //     key: 'FTX',
  //     text: 'FTX',
  //     value: 'FTX',
  //     image: { avatar: true, src: 'img/ftx-icon.png' },
  //   }
  // ];


  // useEffect(() => {
  //   props.getExchanges()
  // }, [])

  useEffect(() => {
    setPosition('Spot')
    setLeverage(0)
    setOrder('limit')
    setEntryPrice(0)
    setAmount(0)
    setPriceStop(0)
    setBuyProfit([
      { price: 0, amount: 0 }
    ])
    setUpdateProfit([
      { price: 0, amount: 0 }
    ])
  }, [signalType])
  useEffect(() => {
    if (props.updateState === {}) {
      setType('self')
      setActiveBtn('spot')
      setActiveCrypto(props.tradingSymbol.from)
      setOrder('limit')
      setPosition('Spot')
      setLeverage(0)
      setEntryPrice(0)
      setPriceStop(0)
      setAmount(0)
      setBuyProfit([
        { price: 0, amount: 0 }
      ])
      setUpdateProfit([
        { price: 0, amount: 0 }
      ])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active])
  // useEffect(() => {
  //   if(props.updateState != undefined){
  //   if(props.updateState.state === 'preOrder' || props.updateState === 'ordered') {

  //     setEntryPrice(props.updateState.entryPrice)
  //     setPriceStop(props.updateState.stopLoss)
  //     setBuyProfit(...props.updateState.targets)
  //   }
  //   else {
  //     setPriceStop(props.updateState.stopLoss)
  //     setBuyProfit(...props.updateState.targets)
  //   }
  // }
  // }, [props.updateState])

  useEffect(() => {
    setActiveCrypto(props.tradingSymbol.to)
    console.log("updated props.tradingSymbol: ", props.tradingSymbol)
  }, [props.tradingSymbol])
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="frontend"
        role="tabpanel"
        aria-labelledby="frontend-tab"
      >
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12">
            <ul className="nav nav-tabs join-tabs-ul trade-ul" role="tablist">
              <li className={`nav-item ${props.active === "buy" ? "active" : ""}`} role="presentation" style={{ width: "50%" }}>
                <button
                  className={`nav-link`}
                  id="frontend-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#frontend"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                  onClick={props.handleBuy}
                >
                  Buy Now
                </button>
              </li>
              <li className={`nav-item ${props.active === "update" ? "active" : ""}`} role="presentation" style={{ width: "50%" }}>
                <button
                  className={`nav-link`}
                  id="backend-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#backend"
                  type="button"
                  role="tab"
                  aria-controls="backend"
                  aria-selected="false"
                  onClick={props.handleUpdate}
                >
                  Update Position
                </button>
              </li>
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
              {props.active === "buy" ?
                <>
                  {/* Exchange select ( Binance | FTX ) */}
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-input"
                          placeholder="Exchange*"
                          disabled
                        />
                        <span style={{ width: '50%' }}
                          className="input-group-text p-0 border-0"
                        >
                          <select
                            className="form-select"
                            onChange={(e) => props.contractChange(e.target.value)}
                            value={props.chosenExchange}
                          >
                            {props.exchanges.map(item => (
                              <option key={item.key} value={item.value}>
                                {item.value === 'testnet-binanceusdm' ? 'Binance' : item.value}
                              </option>

                            )
                            )}
                            {/* <option defaultValue={""} value="btc-usdt">
                              BTCUSDT
                            </option>
                            {props.chosenExchange !== 'ftx' &&
                              <option defaultValue={""} value="matic-usdt">
                                MATICUSDT
                              </option>
                            }
                            <option defaultValue={""} value="eth-usdt">
                              ETHUSDT
                            </option>
                            <option defaultValue={""} value="bnb-usdt">
                              BNBUSDT
                            </option> */}
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Trading Symbol select ( BTCUSDT | MATICUSDT | ETHUSDT | BNBUSDT ) */}
                  <div className="row mt-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-input"
                          placeholder="Trading Symbol*"
                          disabled
                        />
                        <span style={{ width: '50%' }}
                          className="input-group-text p-0 border-0"
                        >
                          <select
                            className="form-select with-group-label" 
                            onChange={(e) => props.setCryptos(e.target.value)}
                            value={props.tradingSymbol.tradingSymbol}
                          >
                            <option  value="BTCUSDT">
                              BTCUSDT
                            </option>
                            {props.chosenExchange !== 'ftx' &&
                              <option  value="MATICUSDT">
                                MATICUSDT
                              </option>
                            }
                            <option  value="ETHUSDT">
                              ETHUSDT
                            </option>
                            <option  value="BNBUSDT">
                              BNBUSDT
                            </option>
                          </select>
                        </span>

                      </div>
                    </div>
                  </div>
                  {/* Signal Type select ( Spot | Features ) */}
                  <div className="row mt-3 ">
                    <div className="btn-group terminal-button">
                      <button type="button" style={{ borderRight: 'none', width: '50%' }} onClick={() => { setActiveBtn('spot'); setPosition('Spot') }} className={`trade-type btn ${signalType === 'spot' ? 'btn-trade' : 'btn-white'}`}>Spot</button>
                      <button type="button" style={{ borderLeft: 'none', width: '50%' }} onClick={() => { setActiveBtn('futures'); setPosition('Short') }} className={`trade-type btn ${signalType === 'futures' ? 'btn-trade' : 'btn-white'}`}>Futures</button>
                    </div>
                  </div>
                  {signalType === 'futures' && <>
                    <div className="row mt-3">
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control form-input"
                                disabled
                                placeholder="Position"
                                style={signalType === "spot" ? { backgroundColor: '#e9ecef' } : {}} />
                              
                                <span style={{ width: '50%' }}
                                  className="input-group-text p-0 border-0"
                                >
                                  <select
                                    className="form-select select-left" style={{ borderLeft: 'none' }}
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                  >
                                    <option defaultValue={""} value="Short">
                                      Short
                                    </option>
                                    <option value="Long">Long</option>
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
                                type="text"
                                className="form-control form-input"
                                disabled
                                placeholder="leverage"
                                style={signalType === "spot" ? { backgroundColor: '#e9ecef' } : {}} />                            
                                <span style={{ width: '50%' }}
                                  className="input-group-text p-0 border-0"
                                >
                                  <select
                                    className="form-select select-left" style={{ borderLeft: 'none' }}
                                    defaultValue={'5'}
                                    onChange={(e) => setLeverage(e.target.value)}
                                  >
                                    <option value="1">1X</option>
                                    <option value="2">2X</option>
                                    <option value="3">3X</option>
                                    <option value="5">5X</option>
                                    <option value="10">10X</option>
                                    <option value="15">15X</option>
                                    <option value="20">20X</option>
                                  </select>
                                </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>}
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
                              placeholder="Order"
                              disabled
                            />
                            <span style={{ width: '50%' }}
                              className="input-group-text p-0 border-0"
                            >
                              <select
                                className="form-select select-left" style={{ borderLeft: 'none' }}
                                onChange={(e) => {
                                  setOrder(e.target.value)
                                  e.target.value === 'market' ? setEntryPrice(props.chartInfo.price) : setEntryPrice(0)
                                }}
                                value={order}
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
                    { order !== 'market' && (<>
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <label htmlFor="" style={{ color: "#989898", fontSize: "15px" }}>
                              {/* Buy Now Price */}
                              Price *
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => setEntryPrice(parseFloat(entryPrice) - 1 >= 0 ? parseFloat(entryPrice) - 1 : 0)} type="button">-</button>
                              </div>
                              <input
                                type="text"
                                className="form-control price-border"
                                onChange={handleChangePrice}
                                value={entryPrice}
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => setEntryPrice(parseFloat(entryPrice) + 1)} type="button" style={order === 'market' ? { backgroundColor: '#e9ecef' } : {}}>+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>)}
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label htmlFor="" style={{ color: "#989898" }}>
                            Quantity
                          </label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => setAmount(parseFloat(amount) - 1 >= 0 ? parseFloat(amount) - 1 : 0)} type="button">-</button>
                            </div>
                            <input
                              type="text"
                              className="form-control price-border"
                              onChange={handleChangeQuantity}
                              value={amount}
                            />
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => setAmount(parseFloat(amount) + 1)} type="button">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label></label>
                          <div className="input-group mb-3 mt_3" style={{ width: '100%' }}>
                            <button type="button" style={{ borderRight: 'none', width: '50%', fontFamily: 'Regular, serif', fontWeight: '600' }} onClick={() => setActiveCrypto(props.tradingSymbol.from, () => { handleChangeQuantity() })} className={`terminal_button trade-type btn ${activeCrypto === props.tradingSymbol.from ? 'btn-trade' : 'btn-white'}`}>{props.tradingSymbol.from}</button>
                            <button type="button" style={{ borderLeft: 'none', width: '50%', borderRight: '1px solid #ced4da', fontFamily: 'Regular, serif', fontWeight: '600' }} onClick={() => setActiveCrypto(props.tradingSymbol.to)} className={`terminal_button trade-type btn ${activeCrypto === props.tradingSymbol.to ? 'btn-trade' : 'btn-white'}`}>{props.tradingSymbol.to}</button>
                          </div>
                        </div></div>
                    </div>

                  </div>
                  <hr></hr>
                  <div className="row">
                    <span className="trade-subtitle">Stop Loss</span>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-12 col-12">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label htmlFor="" style={{ color: "#989898" }}>
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
                                if (e.target.value !== '')
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
                  </div>
                  <hr></hr>
                  <div className="row">
                    <span className="trade-subtitle">Take Profit</span>
                  </div>
                  {buyProfit && buyProfit.map((item, index) => {
                    return (
                      <div className="row mt-2" key={index}>
                        <div className="col-sm-6 col-6">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                              <label htmlFor="" style={{ color: "#989898" }}>
                                Price
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeProfit("price", parseFloat(item.price) - 1, index)} type="button">-</button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control price-border"
                                  name="price"
                                  onChange={e => handleChangeProfit("price", e.target.value, index)}
                                  value={item.price}
                                />
                                <div className="input-group-prepend">
                                  <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeProfit("price", parseFloat(item.price) + 1, index)} type="button">+</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-6">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                              <label htmlFor="" style={{ color: "#989898" }}>
                                Quantity
                              </label>
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangeProfit("amount", parseFloat(item.amount) - 1, index)} type="button">-</button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control price-border"
                                  name="amount"
                                  onChange={e => handleChangeProfit("amount", e.target.value, index)}
                                  value={item.amount}
                                />
                                <div className="input-group-prepend">
                                  <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangeProfit("amount", parseFloat(item.amount) + 1, index)} type="button">+</button>
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
                      <div className="profit-ui" onClick={() => handleChangeProfitList("add")}>
                        <img
                          src="img/uploads/plus.svg"
                          alt=""
                          className="img-fluid me-1"
                          style={{ height: '16px' }}
                        />
                        <span style={{ color: '#199B4D', fontWeight: '500', fontSize: "14px" }}>Add Take Profit</span>
                      </div>
                      <div className="profit-ui" onClick={() => handleChangeProfitList("remove")}>
                        <img
                          src={icon_modal_minus}
                          alt=""
                          className="img-fluid me-1"
                        />
                        <span style={{ color: '#EF3B45', fontWeight: '500', fontSize: "14px" }}>Remove Take Profit</span>
                      </div>


                    </div>

                  </div>
                  <div className="row mt-3">
                    <div className="form-check" style={{ paddingLeft: '2.5em', marginBottom: '10px' }}>
                      <input type="checkbox" className="form-check-input" id="subscriber"
                        onChange={(e) => {
                          copyTraderCheckBox()
                        }}
                        checked={type === 'copyTrader'} />
                      <label className="form-check-label" htmlFor="subscriber">Copy The Order For My Subscribers</label>
                    </div>
                    <div className="form-check" style={{ paddingLeft: '2.5em' }}>
                      <input type="checkbox" className="form-check-input" id="sendorder"
                        onChange={(e) => {
                          signalProviderCheckBox()
                        }}
                        checked={type === 'signalProvider'}
                      />
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
                        ) : (
                          <button className="btn btn-success submit-order" onClick={handleSubmitOrder}>Submit Order</button>
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
                          className="form-control form-input"
                          placeholder="Exchange*"
                          disabled
                        />
                        <span style={{ width: '50%' }}
                          className="input-group-text p-0 border-0"
                        >
                          <select
                            className="form-select select-left" style={{ borderLeft: 'none' }}
                            onChange={(e) => props.contractChange(e.target.value)}
                            value={props.chosenExchange}
                          >
                            {props.exchanges.map(item => (
                              <option key={item.key} value={item.value}>
                                {item.value === 'testnet-binanceusdm' ? 'Binance' : item.value}
                              </option>
                            )
                            )}
                            {/* <option defaultValue={""} value="btc-usdt">
                              BTCUSDT
                            </option>
                            {props.chosenExchange !== 'ftx' &&
                              <option defaultValue={""} value="matic-usdt">
                                MATICUSDT
                              </option>
                            }
                            <option defaultValue={""} value="eth-usdt">
                              ETHUSDT
                            </option>
                            <option defaultValue={""} value="bnb-usdt">
                              BNBUSDT
                            </option> */}
                          </select>

                          {/* <Dropdown
                            fluid
                            selection
                            options={props.exchanges}
                            disabled
                            style={{ backgroundColor: '#e9ecef' }}
                            onChange={(e, data) => props.contractChange(data)}
                            value={props.chosenExchange}
                          // defaultValue={props.exchanges.length > 0 ? props.exchanges[0] : ''}
                          /> */}
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
                          placeholder="Order ID*"
                          disabled
                        />
                        <span style={{ width: '50%' }}
                          className="input-group-text p-0 border-0 bg-primary"
                        >
                          <select
                            className="form-select select-left" style={{ borderLeft: 'none' }}
                          >
                            {historyList.map((history, index) => {
                              return (<option key={index}>#{history._id}</option>)
                            })}
                          </select>
                        </span>

                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="input-group">
                        <input
                          disabled
                          type="text"
                          className="form-control form-input"
                          placeholder="Trading Symbol*"
                          style={{ backgroundColor: '#e9ecef' }}
                        />
                        <span style={{ width: '50%' }}
                          className="input-group-text p-0 border-0"
                        >
                          <select
                            disabled
                            className="form-select select-left" style={{ borderLeft: 'none', backgroundColor: '#e9ecef' }}
                            value={props.tradingSymbol.tradingSymbol}
                          >
                            {/* <option defaultValue={""} value="maticusdt">
                              MATICUSDT
                            </option>
                            <option value="market">Market</option> */}
                          </select>
                        </span>

                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 ">
                    <div className="btn-group terminal-button">
                      <button type="button" style={{ borderRight: 'none', width: '50%' }} disabled onClick={() => setActiveBtn('spot')} className={`trade-type btn ${signalType === 'spot' ? 'btn-trade' : 'btn-white'}`}>Spot</button>
                      <button type="button" style={{ borderLeft: 'none', width: '50%' }} disabled onClick={() => setActiveBtn('futures')} className={`trade-type btn ${signalType === 'futures' ? 'btn-trade' : 'btn-white'}`}>Futures</button>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <div className="input-group">
                            <input
                              type="text"
                              disabled
                              className="form-control form-input"
                              placeholder="Position*"
                              style={{ backgroundColor: '#e9ecef' }}
                            />
                            <span style={{ width: '50%', backgroundColor: '#e9ecef' }}
                              className="input-group-text p-0 border-0 bg-primary"
                            >
                              <select
                                disabled
                                className="form-select select-left" style={{ borderLeft: 'none' }}
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                              >
                                <option value="Spot">Spot</option>
                                <option defaultValue={""} value="Short">
                                  Short
                                </option>
                                <option value="Long">Long</option>
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
                              type="number"
                              className="form-control form-input"
                              disabled
                              placeholder="Leverage"
                              style={{ backgroundColor: '#e9ecef' }}
                              max={20}
                              min={0}
                              onChange={(e) => setLeverage(e.target.value)}
                              value={leverage}
                            />

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
                              placeholder="Order*"
                              disabled
                            />
                            <span style={{ width: '50%' }}
                              className="input-group-text p-0 border-0"
                            >
                              <select
                                className="form-select select-left" style={{ borderLeft: 'none' }}
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
                    { order !== 'market' && (<>
                      <div className="col-sm-6 col-6">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                            <label htmlFor="" style={{ color: "#989898" }}>
                              {/* Update Position Price */}
                              Price *
                            </label>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => setEntryPrice(parseFloat(entryPrice) - 1 >= 0 ? parseFloat(entryPrice) - 1 : 0)} type="button">-</button>
                              </div>
                              <input
                                type="text"
                                className="form-control price-border"
                                onChange={handleChangePrice}
                                value={entryPrice}
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => setEntryPrice(parseFloat(entryPrice) + 1)} type="button">+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>) }
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label htmlFor="" style={{ color: "#989898" }}>
                            Quantity
                          </label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => setAmount(parseFloat(amount) - 1 >= 0 ? parseFloat(amount) - 1 : 0)} type="button">-</button>
                            </div>
                            {/* <input type="text" className="form-control price-border" onChange={e => setQuantity(parseFloat(e.target.value))} value={quantity} /> */}
                            <input
                              type="text"
                              className="form-control price-border"
                              onChange={handleChangeQuantity}
                              value={amount}
                            />
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => setAmount(parseFloat(amount) + 1)} type="button">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label></label>
                          <div className="input-group mb-3 mt_3" style={{ width: '100%' }}>
                            <button disabled type="button" style={{ borderRight: 'none', width: '50%', cursor: 'not-allowed' }} onClick={() => setActiveCrypto(props.tradingSymbol.from)} className={`terminal_button trade-type btn ${activeCrypto === props.tradingSymbol.from ? 'btn-trade' : 'btn-white'}`}>{props.tradingSymbol.from}</button>
                            <button disabled type="button" style={{ borderLeft: 'none', width: '50%', borderRight: '1px solid #ced4da', cursor: 'not-allowed' }} onClick={() => setActiveCrypto(props.tradingSymbol.to)} className={`terminal_button trade-type btn ${activeCrypto === props.tradingSymbol.to ? 'btn-trade' : 'btn-white'}`}>{props.tradingSymbol.to}</button>
                          </div>
                        </div></div>
                    </div>

                  </div>
                  <hr></hr>
                  <div className="row">
                    <span className="trade-subtitle">Stop Loss</span>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-12 col-12">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label htmlFor="" style={{ color: "#989898" }}>
                            Price
                          </label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-price btn-left change-value-btn" onClick={() => handleChangePriceStop(stopLoss - 1)} type="button">-</button>
                            </div>
                            <input
                              type="text"
                              className="form-control price-border"
                              onChange={e => handleChangePriceStop(parseFloat(e.target.value))}
                              value={stopLoss}
                            />
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-price btn-right change-value-btn" onClick={() => handleChangePriceStop(stopLoss + 1)} type="button">+</button>
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
                  {updateProfit && updateProfit.map((item, index) => {
                    return (
                      <div className="row mt-2" key={index}>
                        <div className="col-sm-6 col-6">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                              <label htmlFor="" style={{ color: "#989898" }}>
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
                                    if (e.target.value !== '')
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
                              <label htmlFor="" style={{ color: "#989898" }}>
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
                                    if (e.target.value !== '')
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
                      <div className="profit-ui" onClick={() => handleChangeUpdateProfitList("add")}>
                        <img
                          src="img/uploads/plus.svg"
                          alt=""
                          className="img-fluid me-1"
                          style={{ height: '16px' }}
                        />
                        <span style={{ color: '#199B4D', fontWeight: '500', fontSize: "14px" }}>Add Take Profit</span>
                      </div>
                      <div className="profit-ui" onClick={() => handleChangeUpdateProfitList("remove")}>
                        <img
                          src={icon_modal_minus}
                          alt=""
                          className="img-fluid me-1"
                          style={{ height: '16px' }}
                        />
                        <span style={{ color: '#EF3B45', fontWeight: '500', fontSize: "14px" }}>Remove Take Profit</span>
                      </div>


                    </div>

                  </div>
                  <div className="row mt-3">
                    <div className="form-check" style={{ paddingLeft: '2.5em', marginBottom: '10px' }}>
                      <input type="checkbox" className="form-check-input" id="subscriber"
                        onChange={(e) => {
                          copyTraderCheckBox()
                        }}
                        checked={type === 'copyTrader'} />
                      <label className="form-check-label" htmlFor="subscriber">Copy The Order For My Subscribers</label>
                    </div>
                    <div className="form-check" style={{ paddingLeft: '2.5em' }}>
                      <input type="checkbox" className="form-check-input" id="sendorder"
                        onChange={(e) => {
                          signalProviderCheckBox()
                        }}
                        checked={type === 'signalProvider'}
                      />
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
                        ) : (
                          <button className="btn btn-success submit-order"
                          // onClick={(e) => submitOrder()}
                          >Update Order</button>
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
    </div >
  );
};

