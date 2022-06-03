import "font-awesome/css/font-awesome.css";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { RealTimeChartWidget } from "react-tradingview-widgets";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import icon_modal_close from "./../../assets/img/icons/modal-close.svg";
import icon_modal_minus from "./../../assets/img/icons/modal-minus.svg";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { AppActions } from "../../store/actions";
import { useExchanges, useTraderHistory } from "../../hooks";
import { EXCHANGE_MAP } from "../../store/consts";
import OutsideClickHandler from "react-outside-click-handler";
import icon_setting from "../../assets/img/icons/setting-mobile.svg";
import tableArrow_icon from "../../assets/img/icons/table-arrow.svg";
// import html2canvas from "html2canvas";
// import pdfMake from "pdfmake/build/pdfmake";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";

export const TradeTerminalPage = () => {
  return (
    <div className="tt-wrapper">
      <GraphicalChartArea />
    </div>
  );
};

export const GraphicalChartArea = () => {
  const { historyList, csvData = [], headers } = useTraderHistory();
  const { exhchagesList } = useExchanges();
  const [updateState, setUpdateState] = useState({});
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [active, setActive] = useState("buy");
  const [exchanges, setExchanges] = useState([]);
  const [chosenExchange, setChosenExchange] = useState("");
  const [open, openMenu] = useState(false);
  const [tradingSymbol, setTradingSymbol] = useState({
    tradingSymbol: "BTCUSDT",
    from: "BTC",
    to: "USDT",
  });
  const [chartInfo, setChartInfo] = useState(null);
  const handleBuy = () => {
    setActive("buy");
  };
  const handleUpdate = () => {
    setActive("update");
  };
  const contractChange = (data) => {
    console.log("data =>", data);
    setChosenExchange(data);
    console.log(chosenExchange);
  };

  const handleExportPDFClick = () => {
    openMenu(false);
    exportPDF();
  };

  // const printToPdf = () => {
    // html2canvas(document.getElementById("print_to_pdf"), {
    //   onclone: (clonedDoc) => {
    //     clonedDoc.getElementById('export-table').style.overflowX = 'unset !impotant';
    //   }
    // }).then(canvas => {
    //   var data = canvas.toDataURL();
    //   var pdfExportSetting = {
    //     pageOrientation: 'landscape',
    //     content: [
    //       {
    //         image: data,
    //         width: 500
    //       }
    //     ]
    //   };
    //   pdfMake.createPdf(pdfExportSetting).download("trade_history.pdf");
    // });    
  // };

  const exportPDF = () => {
    const unit = "pt";
    const size = "A3"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    // var jsPDF = require('jspdf');
    require('jspdf-autotable');
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Trade History";
    let data = [...csvData];
    data.shift();

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("trade-history.pdf")
  }
  
  function setCryptos(coins) {
    let tradingSymbol = coins;
    let cryptosArr = tradingSymbol.split("U");
    console.log("cryptosArr =>", cryptosArr);
    let cryptos = {
      tradingSymbol:
        cryptosArr[0].toUpperCase() + "U" + cryptosArr[1].toUpperCase(),
      from: cryptosArr[0].toUpperCase(),
      to: "U" + cryptosArr[1].toUpperCase(),
    };
    console.log("cryptossssss =>", cryptos);
    setTradingSymbol(cryptos);
  }

  async function getBinancePriceAPI() {
    try {
      let response = await Axios.get(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${tradingSymbol.tradingSymbol}`
      );
      console.log("response in binance =>", response.data);
      let info = {
        name: response.data.symbol,
        price: Number(response.data.lastPrice).toFixed(2),
        priceChangePercent: Number(response.data.priceChangePercent).toFixed(2),
        highestPrice: Number(response.data.highPrice).toFixed(2),
        lowestPrice: Number(response.data.lowPrice).toFixed(2),
        volume: Number(response.data.volume).toFixed(2),
        qouteVolume: Number(response.data.quoteVolume).toFixed(2),
      };
      setChartInfo(info);
    } catch (err) {
      console.log("errrrr in binance =>", err);
    }
  }
  async function getFTXPriceAPI() {
    try {
      let response = await Axios.get(
        `https://ftx.com/api/markets/${tradingSymbol.from}/${tradingSymbol.to}`
      );
      console.log("response in ftx =>", response.data.result);
      let info = {
        name: response.data.result.name,
        price: Number(response.data.result.price).toFixed(2),
        priceChangePercent: Number(
          response.data.result.change24h * 100
        ).toFixed(2),
        highestPrice: Number(response.data.result.priceHigh24h).toFixed(2),
        lowestPrice: Number(response.data.result.priceLow24h).toFixed(2),
        volume: Number(response.data.result.quoteVolume24h).toFixed(2),
        qouteVolume: Number(response.data.result.quoteVolume24h).toFixed(2),
      };
      setChartInfo(info);
    } catch (err) {
      console.log("errrrr in ftx =>", err);
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // function updateStateMaking(history) {
  //   if (history.state === 'ordered' || history.state === 'preOrder' || history.state === 'position') {
  //     setEditOpen(true)
  //     setUpdateState(history)
  //     setActive('update')
  //   }
  // }

  useEffect(() => {
    if (exhchagesList.length > 0) {
      setExchanges(exhchagesList);
      setChosenExchange(exhchagesList[0].value);
    }
  }, [exhchagesList]);

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(() => {
      if (chosenExchange.includes("binance")) {
        mounted && getBinancePriceAPI();
      } else {
        mounted && getFTXPriceAPI();
      }
    }, 1000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenExchange, tradingSymbol.tradingSymbol]);

  return (
    <>
      <Helmet>
        <title>Trade Terminal · TraderPro</title>
      </Helmet>
      <div className="tt-osciloscope">
        <div className="tt-coin-info">
          <div className="tt-coin-value-symbol">
            <div className="symbol-group">
              <span className="symbol">{tradingSymbol.tradingSymbol}</span>{" "}
              <span
                className={`${
                  chartInfo && chartInfo.priceChangePercent < 0
                    ? "red"
                    : "green"
                } symbol-value`}
              >
                {chartInfo && numberWithCommas(chartInfo.price)}
              </span>{" "}
              <span className="symbol-unit" style={{ marginRight: "15px" }}>
                {tradingSymbol.to}
              </span>
              <span
                className={`${
                  chartInfo && chartInfo.priceChangePercent < 0
                    ? "red"
                    : "green"
                } symbol-fee`}
              >
                {chartInfo &&
                  numberWithCommas(
                    (
                      (chartInfo.price * chartInfo.priceChangePercent) /
                      100
                    ).toFixed(2)
                  )}{" "}
                ({chartInfo && chartInfo.priceChangePercent} %)
              </span>
            </div>
          </div>
          <div className="tt-coin-stats-24change-wrapper">
            <div className="tt-coin-stats-24change">
              <div className="change24-item">
                <span className="change24-label">24h High</span>
                <div className="change24-value">
                  {chartInfo && numberWithCommas(chartInfo.highestPrice)}
                </div>
              </div>
              <div className="change24-item">
                <span className="change24-label">24h Low</span>
                <div className="change24-value">
                  {chartInfo && numberWithCommas(chartInfo.lowestPrice)}
                </div>
              </div>
              <div className="change24-item">
                <span className="change24-label">
                  24h Vol({tradingSymbol.from})
                </span>
                <div className="change24-value">
                  {chartInfo && numberWithCommas(chartInfo.volume)}
                </div>
              </div>
              <div className="change24-item">
                <span className="change24-label">
                  24h Vol({tradingSymbol.to})
                </span>
                <div className="change24-value">
                  {chartInfo && numberWithCommas(chartInfo.qouteVolume)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: "500px" }}>
          <RealTimeChartWidget
            symbol={
              chosenExchange === "ftx"
                ? `FTX:${tradingSymbol.tradingSymbol}`
                : `BINANCE:${tradingSymbol.tradingSymbol}`
            }
            locale="en"
            interval="D"
            autosize="true"
          />
        </div>
        <div className="tt-history dash-page" style={{ marginTop: "10px" }}>
          <div className="card pt-3  dash-content">
            <div
              className="tab-content-title tab-content"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px 0 15px",
                alignItems: "center",
              }}
            >
              <div className="trade-title">Trade History</div>
              <div className="plus-option other">
                <div className="option-btn" onClick={() => openMenu(true)}>
                  <img
                    src={icon_setting}
                    alt="settomg icon"
                    className="option-icon"
                  />
                </div>
                {open === true && (
                  <OutsideClickHandler onOutsideClick={() => openMenu(false)}>
                    <ul className="option-content other">
                      <li onClick={() => handleExportPDFClick()}>
                        <a className="dropdown-item" href="#0">
                          Export to PDF
                        </a>
                      </li>
                      <li>
                        <CSVLink 
                          className="dropdown-item" 
                          data={csvData} 
                          filename={"trade-history.csv"}
                          onClick={() => openMenu(false)}
                        >
                          Export to CSV
                        </CSVLink>
                      </li>
                    </ul>
                  </OutsideClickHandler>
                )}
              </div>
            </div>
            <div className="card mb-0 card-light-grey">
              <div className="card-body mob-pad-0">
              <span id="print_to_pdf">
                <div
                  id="export-table"
                  className="table-responsive"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <table className="table table-striped">
                    <thead className="bg-white">
                      <tr>
                        <th scope="col">
                          Date
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Source
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Order Id
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Exchange
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Pair
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Type
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Position
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Leverage
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Order Type
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Buy Price
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          Quantity
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          SL Price
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          SL Quantity
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th scope="col">
                          State
                          <img
                            src={tableArrow_icon}
                            alt=""
                            className="img-fluid margin"
                          />
                        </th>
                        <th>
                          TP1 Price
                        </th>
                        <th>
                          TP1 Quantity
                        </th>
                        <th>
                          TP2 Price
                        </th>
                        <th>
                          TP2 Quantity
                        </th>
                        <th>
                          TP3 Price
                        </th>
                        <th>
                          TP3 Quantity
                        </th>
                        <th>
                          TP4 Price
                        </th>
                        <th>
                          TP4 Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyList.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{item.signalTime.split("T")[0]}</td>
                              <td>{item.createdBy.userName}</td>
                              <td>#{item._id}</td>
                              <td>{EXCHANGE_MAP[item.exchangePlatform]}</td>
                              <td>{item.symbol.from + item.symbol.to}</td>
                              <td>
                                {item.signalType.toLowerCase() !== "spot"
                                  ? "Futures"
                                  : "Spot"}
                              </td>
                              <td>
                                {(item.signalType.toLowerCase() === "long" ||
                                  item.signalType.toLowerCase() === "short") &&
                                  item.signalType}
                              </td>
                              <td>{item?.leverage || ""}</td>
                              <td>
                                {item.hasOwnProperty("entryPrice")
                                  ? "Limit"
                                  : "Market"}
                              </td>
                              <td>{item?.entryPrice || "Market Price"}</td>
                              <td>{parseFloat(item.amount).toFixed(2)}</td>
                              <td>{item.stopLoss}</td>
                              <td>100%</td>
                              <td>{item.state}</td>
                              <td>{item.targets[0].price}</td>
                              <td>{item.targets[0].amount}</td>
                              <td>{item.targets[1]?.price || ''}</td>
                              <td>{item.targets[1]?.amount || ''}</td>
                              <td>{item.targets[2]?.price || ''}</td>
                              <td>{item.targets[2]?.amount || ''}</td>
                              <td>{item.targets[3]?.price || ''}</td>
                              <td>{item.targets[3]?.amount || ''}</td>
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </span>
              </div>
            </div>
          </div>
        </div>

        <div className="css-mobile">
          <div className="css-vurnku">
            <div className="css-1488ivs">
              <button
                className="css-btc-buy"
                onClick={() => {
                  console.log("btnclicked");
                  setCreateOpen(true);
                }}
              >
                Create Trade
              </button>
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

      <Modal isOpen={createOpen}>
        <ModalHeader>
          <div className="head-hr">
            <hr onClick={() => setCreateOpen(false)} />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-light text-dark close-btn"
              onClick={() => setCreateOpen(false)}
            >
              <img
                src={icon_modal_close}
                alt=""
                className="img-fluid"
                style={{ width: "20px", height: "20px" }}
              />
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
      <Modal isOpen={editOpen}>
        <ModalHeader>
          <div className="head-hr">
            <hr onClick={() => setEditOpen(false)} />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-light text-dark close-btn"
              onClick={() => setEditOpen(false)}
            >
              <img
                src={icon_modal_close}
                alt=""
                className="img-fluid"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <BuySellForm
            editState={editOpen}
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
    height,
  };
}
export const BuyNowUpdatePositionBar = (props) => {
  const [fullMenu, setFullMenu] = useState(true);
  // const [currentRightMenu, setCurrentRightMenu] = useState("");
  const [currentRightMenu] = useState("");

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (windowDimensions.width > 1075) {
      setFullMenu(true);
    } else {
      setFullMenu(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
            <BuySellForm
              editState={false}
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
  const dispatch = useDispatch();
  const { historyById, editableHistory } = useTraderHistory();
  const [type, setType] = useState("self");
  const [signalType, setActiveBtn] = useState("spot");
  const [activeCrypto, setActiveCrypto] = useState("USDT");
  const [order, setOrder] = useState("limit");
  const [position, setPosition] = useState("Spot");
  const [leverage, setLeverage] = useState("5");
  const [entryPrice, setEntryPrice] = useState("");
  const [stopLoss, setPriceStop] = useState("");
  const [amount, setAmount] = useState(0);
  const { editState } = props.editState;
  const [signal, setSignal] = useState();

  const [buyProfit, setBuyProfit] = useState([{ price: 0, amount: 0 }]);

  const [updateProfit, setUpdateProfit] = useState([{ price: 0, amount: 0 }]);

  const handleChangePrice = (event) => {
    const { value } = event.target;
    if (value === "") {
      setEntryPrice("");
      return;
    }
    parseFloat(value) >= 0 && setEntryPrice(value);
  };

  const handleChangeQuantity = (event) => {
    const { value } = event.target;
    if (value === "") {
      setAmount("");
      return;
    }
    parseFloat(value) >= 0 && setAmount(value);
  };

  const handleChangePriceStop = (price) => {
    let value = price;
    if (value === "") {
      setPriceStop("");
      return;
    }
    if (parseFloat(price) < 0) {
      value = 0;
    }
    setPriceStop(value);
  };

  const handleChangeProfit = (name, value, index_num) => {
    let valueVar = value;
    if (valueVar !== "" && parseFloat(valueVar) < 0) return;
    setBuyProfit((buyProfit) =>
      buyProfit.map((item, index) => {
        if (index === index_num) {
          item[name] = valueVar;
        }
        return item;
      })
    );
  };

  const handleChangeProfitList = (type) => {
    if (type === "add") {
      if (buyProfit.length < 4) {
        let item = { price: 0, amount: 0 };
        setBuyProfit((buyProfit) => [...buyProfit, item]);
      }
    } else if (type === "remove") {
      if (buyProfit.length > 1) {
        setBuyProfit((buyProfit) => buyProfit.slice(0, buyProfit.length - 1));
      }
    }
  };

  const handleChangeUpdateProfit = (name, value, index_num) => {
    let valueVar = value;
    if (valueVar !== "" && parseFloat(valueVar) < 0) return;
    setUpdateProfit((updateProfit) =>
      updateProfit.map((item, index) => {
        let changeItem = { ...item };
        if (index === index_num) {
          changeItem[name] = valueVar;
        }
        return changeItem;
      })
    );
  };

  const handleChangeUpdateProfitList = (type) => {
    if (type === "add") {
      if (updateProfit.length < 4) {
        let item = { price: 0, amount: 0 };
        setUpdateProfit((updateProfit) => [...updateProfit, item]);
      }
    } else if (type === "remove") {
      setUpdateProfit((updateProfit) =>
        updateProfit.slice(0, updateProfit.length - 1)
      );
    }
  };

  function signalProviderCheckBox() {
    if (type === "self" || type === "copyTrader") setType("signalProvider");
    else if (type === "signalProvider") setType("self");
    else setType("self");
  }

  function copyTraderCheckBox() {
    if (type === "self" || type === "signalProvider") setType("copyTrader");
    else if (type === "copyTrader") setType("self");
    else setType("self");
  }

  const handleSubmitOrder = () => {
    const targets = buyProfit.map((item) => ({
      price: parseFloat(item.price) || 0,
      amount: parseFloat(item.amount) || 0,
    }));
    const signalTypeStr =
      signalType.toLowerCase() === "spot"
        ? order.toLowerCase() === "limit"
          ? "Spot"
          : position
        : position;
    const calculatedAmount =
      activeCrypto === props.tradingSymbol.from
        ? parseFloat(amount)
        : parseFloat(amount) / props.chartInfo.price;
    console.log("calculatedAmount => ", calculatedAmount);
    dispatch(
      AppActions.signalAddAction({
        type,
        exchangePlatform: props.chosenExchange,
        from: props.tradingSymbol.from,
        to: props.tradingSymbol.to,
        signalType: signalTypeStr,
        entryPrice:
          order.toLowerCase() !== "market" ? parseFloat(entryPrice) : undefined,
        amount: calculatedAmount,
        stopLoss: parseFloat(stopLoss),
        leverage:
          signalType.toLowerCase() !== "spot" ? parseInt(leverage) : undefined,
        targets,
      })
    );
  };

  const handleUpdateOrder = () => {
    dispatch(
      AppActions.signalUpdateAction({
        id: signal._id,
        entryPrice:
          signal.signalType.toLowerCase() === "spot" ? entryPrice : undefined,
        stopLoss: parseFloat(stopLoss),
        targets: updateProfit.map((item) => ({
          price: parseFloat(item.price) || 0,
          amount: parseFloat(item.amount) || 0,
        })),
      })
    );
  };

  useEffect(() => {
    if (signal) {
      setUpdateProfit(signal.targets.map(({ reached, ...item }) => item));
      setPriceStop(signal.stopLoss);
    } else {
      setUpdateProfit([{ price: 0, amount: 0 }]);
      setPriceStop(0);
    }
  }, [signal]);

  useEffect(() => {
    setPosition("Spot");
    setLeverage("5");
    setOrder("limit");
    setEntryPrice(0);
    setAmount(0);
    setPriceStop(0);
    setBuyProfit([{ price: 0, amount: 0 }]);
    setUpdateProfit([{ price: 0, amount: 0 }]);
  }, [signalType]);

  useEffect(() => {
    if (props.updateState === {}) {
      setType("self");
      setActiveBtn("spot");
      setActiveCrypto(props.tradingSymbol.to);
      setOrder("limit");
      setPosition("Spot");
      setLeverage("5");
      setEntryPrice(0);
      setPriceStop(0);
      setAmount(0);
      setBuyProfit([{ price: 0, amount: 0 }]);
      setUpdateProfit([{ price: 0, amount: 0 }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active]);

  useEffect(() => {
    setActiveCrypto(props.tradingSymbol.to);
  }, [props.tradingSymbol]);
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
              <li
                className={`nav-item ${props.active === "buy" ? "active" : ""}`}
                role="presentation"
                style={{ width: "50%" }}
              >
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
              <li
                className={`nav-item ${
                  props.active === "update" ? "active" : ""
                }`}
                role="presentation"
                style={{ width: "50%" }}
              >
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
                  style={{ minWidth: "max-content" }}
                  disabled={editableHistory.length === 0}
                >
                  Update Position
                </button>
              </li>
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
              {props.active === "buy" ? (
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
                        <span
                          style={{ width: "65%" }}
                          className="input-group-text p-0 border-0"
                        >
                          <select
                            className="form-select"
                            onChange={(e) =>
                              props.contractChange(e.target.value)
                            }
                            value={props.chosenExchange}
                          >
                            {props.exchanges.map((item) => (
                              <option key={item.key} value={item.value}>
                                {EXCHANGE_MAP[item.value]}
                              </option>
                            ))}
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
                        <span
                          style={{ width: "50%" }}
                          className="input-group-text p-0 border-0"
                        >
                          <select
                            className="form-select with-group-label"
                            onChange={(e) => props.setCryptos(e.target.value)}
                            value={props.tradingSymbol.tradingSymbol}
                          >
                            <option value="BTCUSDT">BTCUSDT</option>
                            {props.chosenExchange !== "ftx" && (
                              <option value="MATICUSDT">MATICUSDT</option>
                            )}
                            <option value="ETHUSDT">ETHUSDT</option>
                            <option value="BNBUSDT">BNBUSDT</option>
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Signal Type select ( Spot | Futures ) */}
                  <div className="row mt-3 ">
                    <div className="btn-group terminal-button">
                      <button
                        type="button"
                        style={{ borderRight: "none", width: "50%" }}
                        onClick={() => {
                          setActiveBtn("spot");
                          setPosition("Spot");
                        }}
                        className={`trade-type btn ${
                          signalType === "spot" ? "btn-trade" : "btn-white"
                        }`}
                      >
                        Spot
                      </button>
                      <button
                        type="button"
                        style={{ borderLeft: "none", width: "50%" }}
                        onClick={() => {
                          setActiveBtn("futures");
                          setPosition("Short");
                        }}
                        className={`trade-type btn ${
                          signalType === "futures" ? "btn-trade" : "btn-white"
                        }`}
                      >
                        Futures
                      </button>
                    </div>
                  </div>
                  {signalType === "futures" && (
                    <>
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
                                  style={
                                    signalType === "spot"
                                      ? { backgroundColor: "#e9ecef" }
                                      : {}
                                  }
                                />

                                <span
                                  style={{ width: "50%" }}
                                  className="input-group-text p-0 border-0"
                                >
                                  <select
                                    className="form-select select-left"
                                    style={{ borderLeft: "none" }}
                                    value={position}
                                    onChange={(e) =>
                                      setPosition(e.target.value)
                                    }
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
                                  placeholder="Leverage"
                                  style={
                                    signalType === "spot"
                                      ? { backgroundColor: "#e9ecef" }
                                      : {}
                                  }
                                />
                                <span
                                  style={{ width: "45%" }}
                                  className="input-group-text p-0 border-0"
                                >
                                  <select
                                    className="form-select select-left"
                                    style={{ borderLeft: "none" }}
                                    defaultValue={"5"}
                                    onChange={(e) =>
                                      setLeverage(e.target.value)
                                    }
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
                    </>
                  )}
                  <div className="row mt-2">
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label></label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control form-input"
                              placeholder="Order"
                              disabled
                            />
                            <span
                              style={{ width: "50%" }}
                              className="input-group-text p-0 border-0"
                            >
                              <select
                                className="form-select select-left"
                                style={{ borderLeft: "none" }}
                                onChange={(e) => {
                                  setOrder(e.target.value);
                                  e.target.value === "market"
                                    ? setEntryPrice(props.chartInfo.price)
                                    : setEntryPrice(0);
                                }}
                                value={order}
                              >
                                <option value="limit">Limit</option>
                                <option value="market">Market</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {order !== "market" && (
                      <>
                        <div className="col-sm-6 col-6">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                              <label
                                htmlFor=""
                                style={{ color: "#989898", fontSize: "15px" }}
                              >
                                {/* Buy Now Price */}
                                Price *
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-price btn-left change-value-btn"
                                    onClick={() =>
                                      setEntryPrice(
                                        parseFloat(entryPrice) - 1 >= 0
                                          ? parseFloat(entryPrice) - 1
                                          : 0
                                      )
                                    }
                                    type="button"
                                  >
                                    -
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control price-border"
                                  onChange={handleChangePrice}
                                  value={entryPrice}
                                />
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-price btn-right change-value-btn"
                                    onClick={() =>
                                      setEntryPrice(parseFloat(entryPrice) + 1)
                                    }
                                    type="button"
                                    style={
                                      order === "market"
                                        ? { backgroundColor: "#e9ecef" }
                                        : {}
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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
                              <button
                                className="btn btn-outline-price btn-left change-value-btn"
                                onClick={() =>
                                  setAmount(
                                    parseFloat(amount) - 1 >= 0
                                      ? parseFloat(amount) - 1
                                      : 0
                                  )
                                }
                                type="button"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control price-border"
                              onChange={handleChangeQuantity}
                              value={amount}
                            />
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-price btn-right change-value-btn"
                                onClick={() =>
                                  setAmount(parseFloat(amount) + 1)
                                }
                                type="button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label></label>
                          <div
                            className="input-group mb-3 mt_3"
                            style={{ width: "100%" }}
                          >
                            <button
                              type="button"
                              style={{
                                borderRight: "none",
                                width: "50%",
                                fontFamily: "Regular, serif",
                                fontWeight: "600",
                              }}
                              onClick={() =>
                                setActiveCrypto(
                                  props.tradingSymbol.from,
                                  () => {
                                    handleChangeQuantity();
                                  }
                                )
                              }
                              className={`terminal_button trade-type btn ${
                                activeCrypto === props.tradingSymbol.from
                                  ? "btn-trade"
                                  : "btn-white"
                              }`}
                            >
                              {props.tradingSymbol.from}
                            </button>
                            <button
                              type="button"
                              style={{
                                borderLeft: "none",
                                width: "50%",
                                borderRight: "1px solid #ced4da",
                                fontFamily: "Regular, serif",
                                fontWeight: "600",
                              }}
                              onClick={() =>
                                setActiveCrypto(props.tradingSymbol.to)
                              }
                              className={`terminal_button trade-type btn ${
                                activeCrypto === props.tradingSymbol.to
                                  ? "btn-trade"
                                  : "btn-white"
                              }`}
                            >
                              {props.tradingSymbol.to}
                            </button>
                          </div>
                        </div>
                      </div>
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
                              <button
                                className="btn btn-outline-price btn-left change-value-btn"
                                onClick={() =>
                                  handleChangePriceStop(
                                    parseFloat(stopLoss) - 1 >= 0
                                      ? parseFloat(stopLoss) - 1
                                      : 0
                                  )
                                }
                                type="button"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control price-border"
                              onChange={(e) =>
                                handleChangePriceStop(e.target.value)
                              }
                              value={stopLoss}
                            />
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-price btn-right change-value-btn"
                                onClick={() =>
                                  handleChangePriceStop(
                                    parseFloat(stopLoss) + 1
                                  )
                                }
                                type="button"
                              >
                                +
                              </button>
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
                  {buyProfit &&
                    buyProfit.map((item, index) => {
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
                                    <button
                                      className="btn btn-outline-price btn-left change-value-btn"
                                      onClick={() =>
                                        handleChangeProfit(
                                          "price",
                                          parseFloat(item.price) - 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      -
                                    </button>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control price-border"
                                    name="price"
                                    onChange={(e) =>
                                      handleChangeProfit(
                                        "price",
                                        e.target.value,
                                        index
                                      )
                                    }
                                    value={item.price}
                                  />
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-outline-price btn-right change-value-btn"
                                      onClick={() =>
                                        handleChangeProfit(
                                          "price",
                                          parseFloat(item.price) + 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      +
                                    </button>
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
                                    <button
                                      className="btn btn-outline-price btn-left change-value-btn"
                                      onClick={() =>
                                        handleChangeProfit(
                                          "amount",
                                          parseFloat(item.amount) - 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      -
                                    </button>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control price-border"
                                    name="amount"
                                    onChange={(e) =>
                                      handleChangeProfit(
                                        "amount",
                                        e.target.value,
                                        index
                                      )
                                    }
                                    value={item.amount}
                                  />
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-outline-price btn-right change-value-btn"
                                      onClick={() =>
                                        handleChangeProfit(
                                          "amount",
                                          parseFloat(item.amount) + 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  <div className="row mt-2">
                    <div className="d-flex justify-content-between profit-action mt-3">
                      <div
                        className="profit-ui"
                        onClick={() => handleChangeProfitList("add")}
                      >
                        {buyProfit.length < 4 && (
                          <>
                            <img
                              src="img/uploads/plus.svg"
                              alt=""
                              className="img-fluid me-1"
                              style={{ height: "16px" }}
                            />
                            <span
                              style={{
                                color: "#199B4D",
                                fontWeight: "500",
                                fontSize: "14px",
                              }}
                            >
                              Add Take Profit
                            </span>
                          </>
                        )}
                      </div>
                      {buyProfit.length > 1 && (
                        <>
                          <div
                            className="profit-ui"
                            onClick={() => handleChangeProfitList("remove")}
                          >
                            <img
                              src={icon_modal_minus}
                              alt=""
                              className="img-fluid me-1"
                            />
                            <span
                              style={{
                                color: "#EF3B45",
                                fontWeight: "500",
                                fontSize: "14px",
                              }}
                            >
                              Remove Take Profit
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div
                      className="form-check"
                      style={{ paddingLeft: "2.5em", marginBottom: "10px" }}
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="subscriber"
                        onChange={(e) => {
                          copyTraderCheckBox();
                        }}
                        checked={type === "copyTrader"}
                      />
                      <label className="form-check-label" htmlFor="subscriber">
                        Copy The Order For My Subscribers
                      </label>
                    </div>
                    <div
                      className="form-check"
                      style={{ paddingLeft: "2.5em" }}
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="sendorder"
                        onChange={(e) => {
                          signalProviderCheckBox();
                        }}
                        checked={type === "signalProvider"}
                      />
                      <label className="form-check-label" htmlFor="sendorder">
                        Send The Order As A Signal
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3 pb-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="d-grid gap-2">
                        {editState ? (
                          <>
                            <button className="btn btn-success submit-order">
                              Log In
                            </button>
                            <button className="btn btn-success submit-order">
                              Register Now
                            </button>
                          </>
                        ) : (
                          <button
                            className="btn btn-success submit-order"
                            onClick={handleSubmitOrder}
                          >
                            Submit Order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="update-position">
                  <div className="row mt-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-input"
                          placeholder="Order ID*"
                          style={{ textAlign: "center" }}
                          disabled
                        />
                        <span
                          style={{ width: "70%" }}
                          className="input-group-text p-0 border-0 bg-primary"
                        >
                          <select
                            className="form-select select-left"
                            style={{ borderLeft: "none" }}
                            onChange={(e) =>
                              setSignal(
                                e.target.value !== "none"
                                  ? historyById[e.target.value]
                                  : null
                              )
                            }
                          >
                            <option value="none">Select Order</option>
                            {editableHistory.map((history, index) => {
                              return (
                                <option key={index} value={history._id}>
                                  #{history._id}
                                </option>
                              );
                            })}
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Trading Symbol */}
                  <div className="row mt-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="input-group">
                        <input
                          disabled
                          type="text"
                          className="form-control form-input"
                          placeholder="Trading Symbol"
                        />
                        <span
                          style={{ width: "50%" }}
                          className="input-group-text p-0 border-1"
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {signal ? signal.symbol.from + signal.symbol.to : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Signal Type */}
                  <div className="row mt-3 ">
                    <div className="btn-group terminal-button">
                      <button
                        type="button"
                        style={{ borderRight: "none", width: "50%" }}
                        disabled
                        className={`trade-type btn ${
                          signal && signal.signalType === "spot"
                            ? "btn-trade"
                            : "btn-white"
                        }`}
                      >
                        Spot
                      </button>
                      <button
                        type="button"
                        style={{ borderLeft: "none", width: "50%" }}
                        disabled
                        className={`trade-type btn ${
                          signal && signal.signalType !== "futures"
                            ? "btn-trade"
                            : "btn-white"
                        }`}
                      >
                        Futures
                      </button>
                    </div>
                  </div>
                  {signal && signal.signalType.toLowerCase() !== "spot" && (
                    <>
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
                                />

                                <span
                                  style={{ width: "50%" }}
                                  className="input-group-text p-0 border-1"
                                >
                                  &nbsp;&nbsp;&nbsp;&nbsp;{signal.signalType}
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
                                  placeholder="Leverage"
                                />
                                <span
                                  style={{ width: "45%" }}
                                  className="input-group-text p-0 border-1"
                                >
                                  &nbsp;&nbsp;&nbsp;&nbsp;{signal.leverage}X
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="row mt-2">
                    <div className="col-sm-6 col-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                          <label></label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control form-input"
                              placeholder="Order"
                              disabled
                            />
                            <span
                              style={{ width: "50%" }}
                              className="input-group-text p-0 border-1"
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              {signal
                                ? signal.hasOwnProperty("entryPrice")
                                  ? "Limit"
                                  : "Market"
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {signal && signal.hasOwnProperty("entryPrice") && (
                      <>
                        <div className="col-sm-6 col-6">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                              <label htmlFor="" style={{ color: "#989898" }}>
                                {/* Update Position Price */}
                                Price *
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-price btn-left change-value-btn"
                                    onClick={() =>
                                      signal &&
                                      setEntryPrice(
                                        parseFloat(entryPrice) - 1 >= 0
                                          ? parseFloat(entryPrice) - 1
                                          : 0
                                      )
                                    }
                                    type="button"
                                  >
                                    -
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control price-border"
                                  onChange={handleChangePrice}
                                  value={entryPrice}
                                  defaultValue={signal.entryPrice}
                                  disabled={!signal}
                                />
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-price btn-right change-value-btn"
                                    onClick={() =>
                                      signal &&
                                      setEntryPrice(parseFloat(entryPrice) + 1)
                                    }
                                    type="button"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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
                              <button
                                className="btn btn-outline-price btn-left change-value-btn"
                                onClick={() =>
                                  signal &&
                                  handleChangePriceStop(
                                    parseFloat(stopLoss) - 1 >= 0
                                      ? parseFloat(stopLoss) - 1
                                      : 0
                                  )
                                }
                                type="button"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control price-border"
                              onChange={(e) =>
                                handleChangePriceStop(e.target.value)
                              }
                              value={stopLoss}
                              disabled={!signal}
                            />
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-price btn-right change-value-btn"
                                onClick={() =>
                                  signal &&
                                  handleChangePriceStop(
                                    parseFloat(stopLoss) + 1
                                  )
                                }
                                type="button"
                              >
                                +
                              </button>
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
                  {updateProfit &&
                    updateProfit.map((item, index) => {
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
                                    <button
                                      className="btn btn-outline-price btn-left change-value-btn"
                                      onClick={() =>
                                        signal &&
                                        handleChangeUpdateProfit(
                                          "price",
                                          item.price - 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      -
                                    </button>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control price-border"
                                    name="price"
                                    onChange={(e) =>
                                      handleChangeUpdateProfit(
                                        "price",
                                        parseFloat(e.target.value),
                                        index
                                      )
                                    }
                                    value={item.price}
                                    disabled={!signal}
                                  />
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-outline-price btn-right change-value-btn"
                                      onClick={() =>
                                        signal &&
                                        handleChangeUpdateProfit(
                                          "price",
                                          item.price + 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      +
                                    </button>
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
                                    <button
                                      className="btn btn-outline-price btn-left change-value-btn"
                                      onClick={() =>
                                        signal &&
                                        handleChangeUpdateProfit(
                                          "amount",
                                          item.amount - 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      -
                                    </button>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control price-border"
                                    name="quantity"
                                    onChange={(e) =>
                                      signal &&
                                      handleChangeUpdateProfit(
                                        "amount",
                                        parseFloat(e.target.value),
                                        index
                                      )
                                    }
                                    value={item.amount}
                                    disabled={!signal}
                                  />
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-outline-price btn-right change-value-btn"
                                      onClick={() =>
                                        signal &&
                                        handleChangeUpdateProfit(
                                          "amount",
                                          item.amount + 1,
                                          index
                                        )
                                      }
                                      type="button"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {signal && (
                    <div className="row mt-2">
                      <div className="d-flex justify-content-between profit-action mt-3">
                        <div
                          className="profit-ui"
                          onClick={() => handleChangeUpdateProfitList("add")}
                        >
                          {updateProfit.length < 4 && (
                            <>
                              <img
                                src="img/uploads/plus.svg"
                                alt=""
                                className="img-fluid me-1"
                                style={{ height: "16px" }}
                              />
                              <span
                                style={{
                                  color: "#199B4D",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                }}
                              >
                                Add Take Profit
                              </span>
                            </>
                          )}
                        </div>
                        {updateProfit.length > 1 && (
                          <>
                            <div
                              className="profit-ui"
                              onClick={() =>
                                handleChangeUpdateProfitList("remove")
                              }
                            >
                              <img
                                src={icon_modal_minus}
                                alt=""
                                className="img-fluid me-1"
                                style={{ height: "16px" }}
                              />
                              <span
                                style={{
                                  color: "#EF3B45",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                }}
                              >
                                Remove Take Profit
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="row mt-3 pb-3">
                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                      <div className="d-grid gap-2">
                        {editState ? (
                          <>
                            <button className="btn btn-success submit-order">
                              Log In
                            </button>
                            <button className="btn btn-success submit-order">
                              Register Now
                            </button>
                          </>
                        ) : (
                          <button
                            className="btn btn-success submit-order"
                            disabled={!signal}
                            onClick={handleUpdateOrder}
                          >
                            Update Order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
