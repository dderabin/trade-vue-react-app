import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";
import iconCloseEye from "../../assets/img/uploads/eye-hidden.svg";
import iconShowEye from "../../assets/img/uploads/eye-show.svg";
import infoIcon from "./../../assets/img/info.svg";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "../../store/actions";
import { useExchanges } from "../../hooks";

export const ExchangeAccountPage = () => {
  const [apiState, setApiState] = useState(true)
  const [secretState, setSecretState] = useState(true)
  const [apikey, setApiKey] = useState()
  const [secretkey, setSecretKey] = useState()
  const dispatch = useDispatch()
  const { exchanges } = useExchanges()

  const updateSettings = () => {
    dispatch(AppActions.exchangeCUAction({hello: 'hello'}))
  }

  return (
    <>
      <Helmet>
        <title>Update Account Details · TraderPro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-none d-lg-block">
          <div className="card-body">
            <a href="#0" className="text-dull">
              TraderPro &gt;{" "}
            </a>
            <a href="#0" className="theme-color font-bold">
              <ShowBreadcrumbs />
            </a>
          </div>
        </div>
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="alert alert-primary p-4 exchange-note" role="alert">
              <ul className="alert-ul pl-0">
                <li>
                  <img src={infoIcon} alt="" className="img-fluid me-2" />
                  <span>
                    API Key is required to execute all your Trades on Exchange.
                  </span>
                </li>
                <li>
                  <img src={infoIcon} alt="" className="img-fluid me-2" />
                  <span >
                    Please keep ‘Withdrawal’ as disabled on Exchange for respective API.
                  </span>
                </li>
                <li>
                  <img src={infoIcon} alt="" className="img-fluid me-2" />
                  <span>
                    Any API or Secret Key here are Encrypted before storing in Database
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="card mb-0 card-same-height">
              <div className="card-body">
                <div className="row mob-mt-3">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <h1 className="font-24 theme-color font-bold">
                      Set Exchange API
                    </h1>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-xl-9 col-lg-9 col-7 my-auto">
                    <p className="font-16 theme-color mb-0">Exchange</p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-5 text-end">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="binance">
                        Binance
                      </option>
                      <option value="ftx">
                        FTX
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <label className="form-label mb-3">API Key *</label>
                    <div className="input-group mb-3">
                      <input
                        name="apikey"
                        id="apikey"
                        type={apiState? 'password': 'text'}
                        className="form-control"
                        placeholder="API Key"
                        aria-label="API Key"
                        aria-describedby="api-key"
                        value={apikey}
                        onChange={(event) => setApiKey(event.target.value)}
                      />
                      <button 
                        className="input-group-text" 
                        id="api-key"
                        onClick={()=>setApiState(apiState => apiState = !apiState)}
                      >
                        <img src={apiState ? iconShowEye : iconCloseEye} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <label className="form-label mb-3">Secret Key *</label>
                    <div className="input-group mb-3">
                      <input
                        name="secretkey"
                        id="secretkey"
                        type={secretState? 'password': 'text'}
                        className="form-control"
                        placeholder="Secret Key"
                        aria-label="Secret Key"
                        aria-describedby="secret-key"
                        value={secretkey}
                        onChange={(event) => setSecretKey(event.target.value)}
                      />
                      <button
                        href="#0"
                        className="input-group-text"
                        id="secret-key"
                        onClick={()=>setSecretState(secretState => secretState = !secretState)}
                      >
                        <img src={secretState ? iconShowEye : iconCloseEye} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 mb-2">
                  <div className="col-xl-12 col-lg-12 col-12 account-update">
                    <button
                      onClick={updateSettings}
                      className="btn btn-primary btn-50"
                    >
                      Update Account Details
                    </button>
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
