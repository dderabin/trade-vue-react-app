import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";
import TraderProfile from "./../../components/join-copy-trader/profile";
import UploadDocument from "./../../components/join-copy-trader/upload-document";
import FaqTrade from "./../../components/join-copy-trader/faq";
import { useState } from "react";
import infoIcon from "./../../assets/img/info.svg";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { enableStatus } from "../../store/consts";
const JoinCopyTraderPage = () => {
  const { 
    FAQs = [], 
    profitRate = 0,
    signals = [], 
    state = "disabled",
    subscribeFee = 0,
    subscribers = [], 
    subscriptedTo = [],
  } = useSelector(state => state.appState.copyTrader)
  const { files = {}, ...profile } = useSelector(state => state.appState.userInfo)
  const [activetab, setActiveTab] = useState("profile");
  const handleProfile = () => {
    setActiveTab("profile");
  };
  const handleUpload = () => {
    setActiveTab("upload");
  };
  const handleFaq = () => {
    setActiveTab("faq");
  };
  return (
    <>
      <Helmet>
        <title>Join As Copy Trader · Traderpro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-xl-block d-none">
          <div className="card-body">
            <a href="#0" className="text-dull">
              TraderPro &gt;{" "}
            </a>
            <a href="#0" className="theme-color font-bold">
              <ShowBreadcrumbs />
            </a>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="alert alert-primary p-4" style={{margin: 0}} role="alert">
              <ul className="alert-ul ul-basic">
                <li>
                  <img src={infoIcon} alt="" className="me-2 info-icon" />
                  To Join as a Copy Trader, please submit your information.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mb-0">
          <div className="card-body mob-pad-0">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-12">
                <h1 className="font-18 font-bold mb-0">
                  Join as a Copy Trader
                </h1>
              </div>
              <div className="col-xl-4 col-lg-4 col-12 text-end mob-text-left">
                <p className="mb-0 mob-mt-3">
                  Current Status: <span id="dataPresent" className={`text-${state}`}>{enableStatus[state]}</span>
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-xl-12 col-lg-12 col-12">
                <ul
                  className="nav nav-tabs join-tabs-ul"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activetab === "profile" ? "active" : ""
                      }`}
                      id="frontend-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#frontend"
                      type="button"
                      role="tab"
                      aria-controls="frontend"
                      aria-selected="true"
                      onClick={handleProfile}
                    >
                      Profile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activetab === "upload" ? "active" : ""
                      }`}
                      id="backend-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#backend"
                      type="button"
                      role="tab"
                      aria-controls="backend"
                      aria-selected="false"
                      onClick={handleUpload}
                    >
                      Upload Documents
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activetab === "faq" ? "active" : ""
                      }`}
                      id="database-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#database"
                      type="button"
                      role="tab"
                      aria-controls="database"
                      aria-selected="false"
                      onClick={handleFaq}
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="myTabContent">
                  {activetab === "profile" ? (
                    <TraderProfile {...profile} />
                  ) : activetab === "upload" ? (
                    <UploadDocument {...files} />
                  ) : (
                    <FaqTrade {...FAQs} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinCopyTraderPage;
