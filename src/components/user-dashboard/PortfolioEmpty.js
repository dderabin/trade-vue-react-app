import dash_empty from "./../../assets/img/icons/dash_empty.svg";
import binance_icon from "./../../assets/img/icons/dash_binance.svg";
import ftx_icon from "./../../assets/img/icons/dash_ftx.svg";
import btc_icon from "./../../assets/img/icons/dash_btc.svg";
import eth_icon from "./../../assets/img/exchnages-ethereum.png";
import user_trading1 from "./../../assets/img/user_trading1.png";
import xrp_icon from "./../../assets/img/xrp-icon.png";

import icon_message from "./../../assets/img/icons/message.svg";
import icon_heart from "./../../assets/img/icons/heart.svg";
import icon_loop from "./../../assets/img/icons/loop.svg";
import icon_share from "./../../assets/img/icons/share.svg";
import icon_dir_up from "./../../assets/img/icons/dir_up_green.svg";

import avatar_1 from "./../../assets/img/avatars/avatar.jpg";
import avatar_2 from "./../../assets/img/avatars/avatar-2.jpg";
import avatar_3 from "./../../assets/img/avatars/avatar-3.jpg";

import chat_laptop from "./../../assets/img/chat_laptop.svg";
import chat_mobile from "./../../assets/img/chat_mobile.svg";





const options = [
  {
    key: 'User',
    name: 'Catalina R. Lee',
    userid: '@Catalina007',
    image: { avatar: true, src: 'img/avatars/avatar-5.jpg' },
    date: '6:33 AM   02 Mar 22',
    toReply: "",
    content: "Could my lines be more precise? Like I said, buy dips..."
  },
  {
    key: 'User2',
    name: 'Justin T. David',
    userid: '@JustinT',
    image: { avatar: true, src: 'img/avatars/avatar-2.jpg' },
    date: '5d',
    toReply: "@Catalina007",
    content: ""
  },
  {
    key: 'User3',
    name: 'Catalina R. Lee',
    userid: '@Catalina007',
    image: { avatar: true, src: 'img/avatars/avatar-5.jpg' },
    date: '5d',
    toReply: "",
    content: "Selective listening here. Go back and look at the post, I said MAY BE time to book profits here BUT WE ARE NOT CONFIRMED so watching... and of course we did not confirm and I posted that later as well"
  },
];

const PortfolioEmpty = () => {
  return (
    <div className="row portfolio-empty">
      <div className="col col-12 col-xl-9">
        <div className="row">
          <div className="col-12">
            <div className="card mb-0">
              <div className="card-body welcome">
                {/* <div className="row"></div> */}
                <div>
                  <img src={dash_empty} alt="dash-empty" />
                </div>
                <div>
                  <span >Welcome Kuldeep Singh!</span  >
                  <span>Your Portfolio is Empty</span>
                  <span>Start investing in the company of experts.</span>
                  <span>Copy people or/and subscribe to professional signal providers.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none top-user-parent">
          <div className="top-user-scroll">
            <div className="card mb-0">
              <div className="card-body">
                <div className="top-user">
                  <span>Explore Copy Trading</span>
                  <div className="top-user-item">
                    <div>
                      <img src={avatar_1} alt="user1" />
                      <span>Justin T.David</span>
                    </div>
                    <div>
                      <img src={icon_dir_up} alt="dir_up" />
                      <span>14.08%</span>
                    </div>
                  </div>
                  <div className="top-user-item">
                    <div>
                      <img src={avatar_2} alt="user1" />
                      <span>Naresh Mehta</span>
                    </div>
                    <div>
                      <img src={icon_dir_up} alt="dir_up" />
                      <span>34.84%</span>
                    </div>
                  </div>
                  <div className="top-user-item">
                    <div>
                      <img src={avatar_3} alt="user1" />
                      <span>Jason Osten</span>
                    </div>
                    <div>
                      <img src={icon_dir_up} alt="dir_up" />
                      <span>14.08%</span>
                    </div>
                  </div>
                  <div className="top-user-btn-section">
                    <button className="top-user-btn">GET STARTED</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <div className="card-body">
                <div className="top-user">
                  <span>Meet Top Signal Provider</span>
                  <div className="top-user-item">
                    <div>
                      <img src={avatar_1} alt="user1" />
                      <span>Justin T.David</span>
                    </div>
                    <div>
                      <img src={icon_dir_up} alt="dir_up" />
                      <span>14.08%</span>
                    </div>
                  </div>
                  <div className="top-user-item">
                    <div>
                      <img src={avatar_2} alt="user1" />
                      <span>Naresh Mehta</span>
                    </div>
                    <div>
                      <img src={icon_dir_up} alt="dir_up" />
                      <span>34.84%</span>
                    </div>
                  </div>
                  <div className="top-user-item">
                    <div>
                      <img src={avatar_3} alt="user1" />
                      <span>Jason Osten</span>
                    </div>
                    <div>
                      <img src={icon_dir_up} alt="dir_up" />
                      <span>14.08%</span>
                    </div>
                  </div>
                  <div className="top-user-btn-section">
                    <button className="top-user-btn">GET STARTED</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">   
          <div className="col-12 col-md-6 live live_price">
            <span className="live-title">Live Cryto Prices</span>
            <div className="card mb-0 d-xl-block d-non live-content">
              <div className="card-body ">
                <div className="row">
                  <div className="offset-5 col-7 ">
                    <div className="row mobile-brand">
                      <div className="col-6 brand">
                        <img src={binance_icon} alt="binance" /><span>Binance</span>
                      </div>
                      <div className="col-md-6 d-xl-block d-none brand FTX">
                        <img src={ftx_icon} alt="ftx" /><span>FTX</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row crypto">
                  <div className="col-md-5 col-6">
                    <img src={btc_icon} alt="btc" />
                    <div className="label">
                      <span>BTC</span>
                      <span>BTC Mcap 325.77B</span>
                    </div>
                  </div>
                  <div className="col-md-7 col-6">
                    <div className="row">
                      <div className="col-6">
                        <span>16975.29</span>
                        <span>16975.29</span>
                      </div>
                      <div className="col-6 d-xl-block d-none">
                        <span>16975.29</span>
                        <span>16975.29</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row crypto">
                  <div className="col-md-5 col-6">
                    <img src={eth_icon} alt="ethereum" id="ethereum" />
                    <div className="label">
                      <span>ETH</span>
                      <span>ETH Mcap 325.77B</span>
                    </div>
                  </div>
                  <div className="col-md-7 col-6">
                    <div className="row">
                      <div className="col-6">
                        <span>16975.29</span>
                        <span>16975.29</span>
                      </div>
                      <div className="col-6 d-xl-block d-none">
                        <span>16975.29</span>
                        <span>16975.29</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row crypto">
                  <div className="col-md-5 col-6">
                    <div className="image">
                      <img src={xrp_icon} alt="xrp" />
                    </div>
                    <div className="label">
                      <span>XRP</span>
                      <span>XRP Mcap 325.77B</span>
                    </div>
                  </div>
                  <div className="col-md-7 col-6">
                    <div className="row">
                      <div className="col-6">
                        <span>16975.29</span>
                        <span>16975.29</span>
                      </div>
                      <div className="col-6 d-xl-block d-none">
                        <span>16975.29</span>
                        <span>16975.29</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 discuss discuss_chart">
            <span className="discuss-title">Chat & Discuss Share Your Trading Strategies</span>
            <img src={chat_mobile} className="chat_mobile" alt="chat" />
            <img src={chat_laptop} className="chat_laptop" alt="chat" />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-12 col-md-12 col-12 chat_list_card ">
        <div className="card mb-0  d-non d-xl-block myChatListCard">
        {/* <div className="card mb-0"> */}
          <div className="card-body myChatListLeft">
            <div className="top-user">
              <span>Explore Copy Trading</span>
              <div className="top-user-item">
                <div>
                  <img src={avatar_1} alt="user1" />
                  <span>Justin T.David</span>
                </div>
                <div>
                  <img src={icon_dir_up} alt="dir_up" />
                  <span>14.08%</span>
                </div>
              </div>
              <div className="top-user-item">
                <div>
                  <img src={avatar_2} alt="user1" />
                  <span>Naresh Mehta</span>
                </div>
                <div>
                  <img src={icon_dir_up} alt="dir_up" />
                  <span>34.84%</span>
                </div>
              </div>
              <div className="top-user-item">
                <div>
                  <img src={avatar_3} alt="user1" />
                  <span>Jason Osten</span>
                </div>
                <div>
                  <img src={icon_dir_up} alt="dir_up" />
                  <span>14.08%</span>
                </div>
              </div>
              <div className="top-user-btn-section">
                <button className="top-user-btn">GET STARTED</button>
              </div>
            </div>
          </div>
          <div className="card mb-0 myChatListRight">
            <div className="card-body">
              <div className="top-user">
                <span>Meet Top Signal Provider</span>
                <div className="top-user-item">
                  <div>
                    <img src={avatar_1} alt="user1" />
                    <span>Justin T.David</span>
                  </div>
                  <div>
                    <img src={icon_dir_up} alt="dir_up" />
                    <span>14.08%</span>
                  </div>
                </div>
                <div className="top-user-item">
                  <div>
                    <img src={avatar_2} alt="user1" />
                    <span>Naresh Mehta</span>
                  </div>
                  <div>
                    <img src={icon_dir_up} alt="dir_up" />
                    <span>34.84%</span>
                  </div>
                </div>
                <div className="top-user-item">
                  <div>
                    <img src={avatar_3} alt="user1" />
                    <span>Jason Osten</span>
                  </div>
                  <div>
                    <img src={icon_dir_up} alt="dir_up" />
                    <span>14.08%</span>
                  </div>
                </div>
                <div className="top-user-btn-section">
                  <button className="top-user-btn">GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PortfolioEmpty
