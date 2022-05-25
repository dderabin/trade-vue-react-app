import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import moment from 'moment'
import AxiosInstance from "../../axiosClient";
import { useCopyTraders } from "../../hooks";

export const TradeConfigurationPage = () => {
  let navigate = useNavigate()
  const { copyTraders } = useCopyTraders();
  const { id } = useParams();
  const [checktype, setCheckType] = useState(true);
  const [exchangesList, setExchangesList] = useState([])
  const [capitalPercent, setCapitalPercent] = useState(5)
  const [chosenExchange, setChosenExchange] = useState('')
  const [subscriptedTo, setSubscriptedTo] = useState({})
  const re = /^[0-9\b]+$/;
  const handleChange = (e) => {
    setCheckType(e.target.checked);
  };
  const alert = useAlert();

  async function setTradeConfiguration() {
    try {
      const response = await AxiosInstance.post('/user/subscribe', {
        userId: id,
        type: 'copyTrader',
        exchange: chosenExchange,
        capitalPercent: Number(capitalPercent)
      })
      alert.success('statusCode: ' + response.status)
      navigate('/copy-trading/view-copy-trader-list')
      console.log('response in setTradeConfig =>', response.status)
    }
    catch (err) {
      alert.error('statusCode: ' + err.response.data)
      console.log('err in setTradeConfig =>', err.response.status)
    }
  }

  async function getSubscriberInfo() {
    try {
      const response = await AxiosInstance.get('/user/profile')
      let subscriptedTo = response.data.copyTrader
        .subscriptedTo.filter(item => {
          if (item.userId === id)
            return item
        })
      setSubscriptedTo(subscriptedTo[0])
      console.log('subscriptedTo =>', subscriptedTo)
    }
    catch (err) {
      console.log('error in copytrader =>', err)
    }
  }

  async function getExchanges() {
    try {
      const response = await AxiosInstance.get('/exchanges/list')
      setExchangesList(response.data)
      setChosenExchange(response.data[0])
    }
    catch (err) {
      console.log('err in getExchanges =>', err.response)
    }
  }
  useEffect(() => {
    // getSubscriberInfo()
    getExchanges()
  }, [])

  useEffect(() => {
    if (id && copyTraders.length > 0) {
      setSubscriptedTo(copyTraders.find(item => item._id === id))
    } 
  }, [copyTraders, id])
  return (
    <>
      <Helmet>
        <title>{id}: Trade Configuration · Traderpro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-xl-block d-none">
          <div className="card-body">
            <a href="#0" className="text-dull">
              TraderPro &gt;{" "}
            </a>
            <a href="#0" className="theme-color font-bold">
              Trade Configuration
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="card mb-0 card-same-height">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <h1 className="theme-color font-24 font-bold">
                      Trade Configuration
                    </h1>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label className="form-label mb-3">Copy Trader Name</label>
                    <input
                      name="tradername"
                      id="tradername"
                      type="text"
                      className="form-control"
                      placeholder="Copy Trading"
                      value={subscriptedTo?.userName || ''}
                      disabled
                    />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label className="form-label mb-3">Subscription Date</label>
                    <input
                      disabled
                      name="subscriptionDate"
                      id="subscriptionDate"
                      type="text"
                      className="form-control"
                      value={moment(subscriptedTo?.subscriptionStartTime || new Date()).format('yyyy/MM/DD').toString()}
                    // placeholder={date}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label className="form-label mb-3">
                      Subscription Expiration Date
                    </label>
                    <input
                      disabled
                      name="subscriptionExpiryDate"
                      id="subscriptionExpiryDate"
                      type="text"
                      className="form-control"
                      value={moment(subscriptedTo?.subscriptionEndTime || new Date()).add(1, 'M').format('yyyy/MM/DD').toString()}
                    // placeholder={date}
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label className="form-label mb-3">Exchange *</label>
                    <select
                      id="subscriptionExchange"
                      className="form-select"
                      aria-label="Default select example"
                      value={chosenExchange}
                      onChange={(e) => setChosenExchange(e.target.value)}
                    >
                      {
                        exchangesList.length > 0 &&
                        exchangesList.map((item, index) => (
                          <option key={index} value={item}>{item === 'testnet-binanceusdm' ? 'Binance' : item}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12 mob-mt-3">
                    <label className="form-label mb-3">
                      Trade size Percentage *
                    </label>
                    <input
                      type="number"
                      min={5}
                      max={100}
                      id="tradeSize"
                      className="form-control disabled-text"
                      placeholder="Capital Percent"
                      value={capitalPercent}
                      onChange={(e) => re.test(e.target.value) && setCapitalPercent(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                      Minimum trade size should be $5 *
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-8 mob-mt-3">
                    <label className="form-label mb-3">
                      Auto / Manual Trading
                    </label>
                    <div className="switch_box box_4">
                      <div className="input_wrapper">
                        <input
                          id="setTradingAutomation"
                          type="checkbox"
                          className="switch_4"
                          defaultChecked={checktype}
                          onChange={handleChange}
                        />
                        <svg
                          className="is_checked"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 426.67 426.67"
                        >
                          <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                        </svg>
                        <svg
                          className="is_unchecked"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 212.982 212.982"
                        >
                          <path
                            d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-1 col-4 text-end">
                    <label className="form-label mb-3">&nbsp;</label>
                    <a href="/" className="d-block mt-3">
                      <img
                        src="img/uploads/edit.svg"
                        alt=""
                        className="img-fluid"
                      />
                      Edit
                    </a>
                  </div>
                </div>
                <div className="row mt-4 mb-2">
                  <div className="col-xl-12 col-lg-12 col-12">
                    {/* <Link to="/copy-trading/view-copy-trader-list"> */}
                    <button
                      onClick={() => setTradeConfiguration()}
                      //   // alert.error(
                      //   //   `You have suscribed to trader name `
                      //   // );
                      // }

                      className="btn btn-primary btn-50 mob-mt-3"
                    >
                      Update Configuration
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
