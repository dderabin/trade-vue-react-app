import traders from "./data/trader-data";
import TraderList from "../../components/copy-trader/traders";
import GridTraderList from "../../components/copy-trader/grid-trader";
import listview from "../../assets/img/uploads/list-view.svg";
import listwhiteview from "../../assets/img/uploads/list-white.svg";
import gridview from "../../assets/img/uploads/grid-view.svg";
import gridfilledview from "../../assets/img/uploads/grid-filled.svg";
import searchicon from "../../assets/img/uploads/search-icon.svg";
import arrowicon from "../../assets/img/table-arrow.svg";
import { useRef, useState } from "react";
import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";
import { useAlert } from "react-alert";
import useDraggableScroll from "use-draggable-scroll";
import { Helmet } from "react-helmet";

export const ViewCopyTraderListPage = () => {
  const ref = useRef(null);
  const alert = useAlert();

  const { onMouseDown } = useDraggableScroll(ref);

  const [traderList, setTraderList] = useState(traders);
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
        <title>View Copy Traders · Traderpro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-xl-block cHeader">
          <div className="card-header">
            <span>View Top Traders</span>
          </div>
        </div>

        {/* <div className="card grey-card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-7">
                <div className="form-group has-search">
                  <span className="form-control-feedback">
                    <img src={searchicon} alt="" className="img-fluid" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onKeyUp={(e) => searchTrader(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-5 buttonviews d-flex">
                <div className="ms-auto">
                  <img
                    src={viewtype ? listview : listwhiteview}
                    alt=""
                    className="img-fluid me-2"
                    onClick={() => setViewType(true)}
                  />
                 <img
                    src={viewtype ? gridview : gridfilledview}
                    alt=""
                    className="img-fluid"
                    onClick={() => setViewType(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
                      <th scope="col">
                        Name
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        Subscribers
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        Membership
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        Signals Sent
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        Copy Trades
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        Profit
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
                      <th scope="col" className="text-center">
                      Configure
                      {/* <img
                        src={arrowicon}
                        alt=""
                        className="img-fluid ps-1"
                      /> */}
                    </th> 
                    </tr>
                  </thead>
                  <tbody id="myTabledata">
                    <TraderList traderList={traderList} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
         ) : (
         <GridTraderList traderList={traderList} />
        )}
      </div>
    </>
  );
};
