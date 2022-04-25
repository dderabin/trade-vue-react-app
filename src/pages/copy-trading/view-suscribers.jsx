import traders from "./data/trader-data";
import SubscriberList from "../../components/copy-trader/subscribers";
import GridTraderList from "../../components/copy-trader/grid-trader";
import listview from "../../assets/img/uploads/list-view.svg";
import listwhiteview from "../../assets/img/uploads/list-white.svg";
import gridview from "../../assets/img/uploads/grid-view.svg";
import gridfilledview from "../../assets/img/uploads/grid-filled.svg";
import searchicon from "../../assets/img/uploads/search-icon.svg";
import arrowicon from "../../assets/img/table-arrow.svg";
import { useRef, useState } from "react";
import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";

import useDraggableScroll from "use-draggable-scroll";
import { Helmet } from "react-helmet";

export const ViewSubscribersPage = () => {
 
  const ref = useRef(null);
 

  const { onMouseDown } = useDraggableScroll(ref);

  const [subscriberList, setTraderList] = useState(traders);
  const [viewtype, setViewType] = useState(true);
  var searchTraderList;
  const searchTrader = (value) => {
    if (value !== "") {
      searchTraderList = traders.filter((trader) => trader.firstname === value);
    } else {
      searchTraderList = traders;
    }
    setTraderList(searchTraderList);
  };
  return (
    <>
      <Helmet>
        <title>View Subscribers · Traderpro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-xl-block d-none cHeader">
          <div className="card-header">
            <span>View Subscribers</span>
          </div>
        </div>

        {viewtype === true ? (
          <div className="card mb-0 card-light-grey mt-3">
            <div id="myData"></div>
            <script type="text/javascript"></script>

            <div className="card-body mob-pad-0">
              <div
                className="table-responsive"
                ref={ref}
                onMouseDown={onMouseDown}
              >
                <table className="table table-striped">
                  <thead className="bg-white">
                    <tr className="header">
                      <th scope="col" className="mobile-fav">
                        Name
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                       Country
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center mobile-sub-email">
                        Email
                        {/* <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        /> */}
                      </th>
                      <th scope="col" className="text-center">
                        Subscription Status
                        {/* <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        /> */}
                      </th>
                     
                     
                      <th scope="col" className="text-center">
                        Subscriber Since
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        Action
                        {/* <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        /> */}
                      </th>
                      {/* <th scope="col" className="text-center">
                        Configure
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th> */}
                    </tr>
                  </thead>
                  <tbody id="myTabledata">
                    <SubscriberList subscriberList={subscriberList} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <GridTraderList traderList={subscriberList} />
        )}
      </div>
    </>
  );
};


export default ViewSubscribersPage;
