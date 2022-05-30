import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";
import OutsideClickHandler from "react-outside-click-handler";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTraderHistory } from "../../hooks";
import { EXCHANGE_MAP } from "../../store/consts";
import icon_setting from "../../assets/img/icons/setting-mobile.svg";
import icon_dir_down from "../../assets/img/icons/dir_down.svg";

export const TradeReportPage = () => {
  const [toogle, setToogle] = useState(0);
  const [open, setOpen] = useState(false);
  const { historyList } = useTraderHistory();

  const showToogle = (i) => {
    if (i === toogle) {
      setToogle(0);
    } else {
      setToogle(i);
    }
  };

  const openMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleExportClick = (type) => {
    setOpen(false);
    switch (type) {
      case 'PDF':
        break;
      case 'Excel':
        break;
      case 'CSV':
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Helmet>
        <title>Trade Report · TraderPro</title>
      </Helmet>
      <div className="container-fluid p-0 dash-page">        
        <div className="card grey-card mb-0 dash-content">
          <div className="card-body tab-content">
            <div className="tab-content-title">
              <div className="tab-title">
                View Trade Report
              </div>
              <div className="plus-option">
                <div className="option-btn" onClick={() => openMenu()}>
                  <img src={icon_setting} alt="settomg icon" className="option-icon" />
                  <img src={icon_dir_down} alt="drowdown icon" className="option-dropdown-icon"/>
                </div>
                {open === true && (
                  <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                    <ul className="option-content">
                      <li onClick={() => handleExportClick('PDF')}>
                        <a className="dropdown-item" href="#0">
                          Export to PDF
                        </a>
                      </li>
                      <li onClick={() => handleExportClick('Excel')}>
                        <a className="dropdown-item" href="#0">
                          Export to Excel
                        </a>
                      </li>
                      <li onClick={() => handleExportClick('CSV')}>
                        <a className="dropdown-item" href="#0">
                          Export to CSV
                        </a>
                      </li>
                    </ul>
                  </OutsideClickHandler>
                )}                
              </div>
            </div>            
          </div>
        </div>
        <div className="card mb-0 card-light-grey">
          <div className="card-body mob-pad-0">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="bg-white">
                  <tr>
                    <th className="thincell"> </th>
                    <th scope="col" className="text-center font ">
                      Date
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font ps-4">
                      Provider Name
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font">
                      Exchange
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font">
                      Market
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font">
                      Excution
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font">
                      Ticker
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font">
                      Open Price
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                    <th scope="col" className="text-center font">
                      Stop Loss
                      <img
                        src={tableArrow_icon}
                        alt=""
                        className="img-fluid margin"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { historyList.map((item, index) => {
                    return (<React.Fragment key={index}>
                      <tr>
                        <td className="small" onClick={() => showToogle(index + 1)}>
                          <img
                            src="/img/uploads/plus.svg"
                            alt=""
                            className="img-fluid text-center cursor-pointer"
                          />
                        </td>
                        <td className="text-center">{item.signalTime.split('T')[0]}</td>
                        <td className="text-center">{}</td>
                        <td className="text-center">{EXCHANGE_MAP[item.exchangePlatform]}</td>
                        <td className="text-center">{item.signalType}</td>
                        <td className="text-center">Market</td>
                        <td className="text-center">{item.symbol.from + item.symbol.to}</td>
                        <td className="text-center">{item?.entryPrice || ''}</td>
                        <td className="text-center">{item.stopLoss}</td>
                      </tr>
                      {toogle === index + 1 && (
                        <div className="toggle">
                          { item.targets.map((target, index) => {
                            return (
                              <p key={index} className={item.targets.length === index + 1 ? "mb-0" : ""}>
                                <strong>Take Profit {index + 1}:</strong> {parseFloat(target.amount).toFixed(2)}
                              </p>
                            )
                          })}
                        </div>
                      )}
                    </React.Fragment>)
                  })}
                </tbody>
              </table>
            </div>
            {/* <div className="row mt-4">
              <div className="col-xl-3 col-lg-3 col-12 my-auto">
                <p className="mb-0 d-none d-sm-block">
                  Showing 1 to 10 of 57 entries
                </p>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
                <div className="btn-group">
                  <a href="/" className="btn btn-light">
                    Previous
                  </a>
                  <a href="/" className="btn btn-light active">
                    1
                  </a>
                  <a href="/" className="btn btn-light">
                    2
                  </a>
                  <a href="/" className="btn btn-light">
                    3
                  </a>
                  <a href="/" className="btn btn-light">
                    4
                  </a>
                  <a href="/" className="btn btn-light">
                    5
                  </a>
                  <a href="/" className="btn btn-light">
                    Next
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};