import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import AxiosInstance from "../../axiosClient";
import { useSelector } from "react-redux";

const TraderList = ({ traderList }) => {
  console.log('traderList', traderList)
  const { userId } = useSelector(state => state.appState)
  const [avatar, setAvatar] = useState(null)
  const [SubscriptedTo, setSubscriptedTo] = useState([])
  const [traderListState, setTraderListState] = useState([])
  const [loading, setLoading] = useState(false)
  const alert = useAlert();
  const goConfig = () => {
    console.log("click");
  };

  const handleSubscribe = () => {

  }
  async function avatarRequest() {
    try {
      const response = await AxiosInstance.get(`/users/avatar/${userId}`)
      console.log('response is =>', response.data[0])
      setAvatar(response.data[0])
    }
    catch (err) {
      console.log('error in avatarReq =>', err)
      setAvatar(null)
    }
  }

  async function getSubscriberInfo() {
    try {
      setLoading(true)
      const response = await AxiosInstance.get('/user/profile')
      let subscriptedTo = response.data.copyTrader.subscriptedTo.map(item => item.userId)
      console.log('123 =>', subscriptedTo)
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
      console.log('test =>', test)
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
      console.log('error in copytrader =>', err)
    }
  }


  useEffect(() => {
    avatarRequest()
    getSubscriberInfo()
    // console.log("hello header, are you there?")
  }, [])



  return (
    <>
      {traderListState.filter(({ _id }) => _id !== userId).map((trader, index) => (
        <tr key={index}>
          <td className="mw-none" style={{ minWidth: "250px" }}>
            <div
              className="d-flex align-baseline align-items-center"
              style={{ minWidth: "190px" }}
            >
              <div>
                <img
                  src={avatar ? `${AxiosInstance.defaults.baseURL}/users/avatar/${trader?.userInfo?.avatar?.slice(0, -4) || null}` : require('../../assets/img/user.png')}
                  alt=""
                  className="img-fluid table-pic"
                // onLoad={(e) => setImageLoaded(true)}
                // onError={(e) => setImageLoaded(true)}
                />
              </div>
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
      ))}
    </>
  );
};

export default TraderList;
