import React from "react";
import { COUNTRY_NAMES } from "../../store/consts";
import moment from "moment";
import { generateHSL } from "../../helper";
import AxiosInstance from "../../axiosClient";

const SubscriberList = ({subscriberList}) => {
  return (
    <>
      {subscriberList.map((trader, index) => {
        const status = moment().isSameOrBefore(trader.subscriptionEndTime);
        const avatar = trader?.userInfo?.avatar || null;

        return <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              { avatar !== null ? (<>
                <img
                  src={`${AxiosInstance.defaults.baseURL}/users/avatar/${avatar}`}
                  alt=""
                  className="img-fluid table-pic"
                />
              </>) : (<>
                <span className="letter-avatar-big" style={{ backgroundColor: generateHSL(trader?.userInfo?.firstName+trader?.userInfo?.lastName)}}>
                  { trader?.userInfo?.firstName.slice(0,1).toUpperCase() }{ trader?.userInfo?.lastName.slice(0,1).toUpperCase() }
                </span>
              </>) }
              <span to={`/trade-configuration/${trader.id}`}>
                <div>
                  <div className="fw-light">{trader?.userInfo?.firstName || ''}</div>
                  <span className="fw-bold">{trader?.userInfo?.lastName || ''}</span>
                </div>
              </span>
            </div>
          </td>
          <td className="text-center fw-bold">
            <img
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${trader.userInfo.country}.svg`}
              alt=""
              className="img-fluid ps-2"
              width={40}
              height={40}
            />
            &nbsp;&nbsp;{COUNTRY_NAMES[trader.userInfo.country]}
          </td>
          <td className="cubscriber">{trader.email}</td>
          <td className="text-center" style={{color: status ? 'green' : 'red'}}>{status ? 'Active' : 'Expired'}</td>
          <td className="text-center fw-bold">{trader.subscriptionStartTime.split('T')[0]}</td>         
        </tr>
      })}
    </>
  );
};

export default SubscriberList;
