import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../axiosClient";
import { useSelector } from "react-redux";
import { generateHSL } from "../../helper";

const TraderList = ({ traderList }) => {
  const { userId } = useSelector(state => state.appState)
  // const [avatar, setAvatar] = useState(null)
  const [traderListState, setTraderListState] = useState([])
  const goConfig = () => {
  };

  const handleSubscribe = () => {

  }

  async function getSubscriberInfo() {
    try {
      const response = await AxiosInstance.get('/user/profile')
      let subscriptedTo = response.data.copyTrader.subscriptedTo.map(item => item.userId)
      let test = traderList.map(item => {
        if(subscriptedTo.find(element => element == item._id) != undefined ){
          return {
            ...item,
            suscribed: true
          }
        }
        else {
          return {
            ...item,
            suscribed: false
          }
        }
      })
      setTraderListState([...test])
    }
    catch (err) {
    }
  }


  useEffect(() => {
    getSubscriberInfo()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {traderListState.filter(({ _id }) => _id !== userId).map((trader, index) => {        
        const avatar = trader?.userInfo?.avatar || null;
        console.log('trader.userInfo => ', trader.userInfo)
        return <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              { (avatar !== null || trader?.userInfo?.firstName === null) ? 
                <img
                  src={avatar ? `${AxiosInstance.defaults.baseURL}/users/avatar/${avatar.slice(0, -4)}` : require('../../assets/img/user.png')}
                  alt=""
                  className="img-fluid table-pic"
                /> : <span className="letter-avatar-big" style={{ backgroundColor: generateHSL(trader?.userInfo?.firstName+trader?.userInfo?.lastName)}}>
                  { trader?.userInfo?.firstName.slice(0,1).toUpperCase() }{ trader?.userInfo?.lastName.slice(0,1).toUpperCase() }
                </span>
              }
              <span to={`/trade-configuration/${trader._id}`}>
                <div>
                  <div className="fw-light">{trader?.userInfo?.firstName || ''}</div>
                  <span className="fw-bold">{trader?.userInfo?.lastName || ''}</span>
                </div>
              </span>
            </div>
          </td>
          <td className="text-center">{trader.subscribersCount}</td>
          <td className="cubscriber">{trader?.copyTrader?.subscribeFee || 0}</td>
          <td className="text-center">{trader.signalsCount}</td>
          <td className="text-center">{trader.copytrades}</td>
          <td className="text-center">
            <img src="img/uploads/profit-up.svg" alt="" className="img-fluid" />
            <span className="text-green">{trader?.copyTrader?.profitRate || 0} </span>
          </td>
          <td className="text-center">
            {trader.suscribed ? (
              <button
                disabled
                className="btn btn-primary btn-suscribed cursor-default"
                style={{ minWidth: "90px", maxWidth: "90px", fontSize: '12px', padding: '9px' }}
              >
                Copying
              </button>
            ) : (
              <Link to={`/trade-configuration/${trader._id}`}>
                <button
                  disabled=""
                  onClick={handleSubscribe}
                  className="btn btn-success"
                  style={{ minWidth: "90px", maxWidth: "90px" }}
                >
                  Copy
                </button>
              </Link>

            )}
          </td>
          <td className="text-center">
            {trader.suscribed ? (
              <Link to={`/trade-configuration/${trader._id}`}>
                <button onClick={goConfig} className="btn btn-success">
                  Trade Configuration
                </button>
              </Link>
            ) : (
              ""
            )}
          </td>
        </tr>
      })}
    </>
  );
};

export default TraderList;
