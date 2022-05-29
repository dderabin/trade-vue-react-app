import useDraggableScroll from "use-draggable-scroll";
import React, { useRef, useState } from "react";
import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";

import TraderList from "../../components/copy-trader/traders";
import GridTraderList from "../../components/copy-trader/grid-trader";
import listview from "../../assets/img/uploads/list-view.svg";
import listwhiteview from "../../assets/img/uploads/list-white.svg";
import gridview from "../../assets/img/uploads/grid-view.svg";
import gridfilledview from "../../assets/img/uploads/grid-filled.svg";
import searchicon from "../../assets/img/uploads/search-icon.svg";
import arrowicon from "../../assets/img/table-arrow.svg";
import { Helmet } from "react-helmet";

export const FavouritesPages = () => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);  
  const [viewtype, setViewType] = useState(true);
  const traderList = [];
  return (
    <>
      <Helmet>
        <title>Favourites · Traderpro</title>
        <link rel="canonical" href="https://traderpro.live" />
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

        <div className="card grey-card mb-0">
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
                    onKeyUp={(e) => console.loe(e.target.value)}
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
        </div>
        {viewtype === true ? (
          <div className="card mb-0 card-light-grey">
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
                        <img
                          src={arrowicon}
                          alt=""
                          className="img-fluid ps-1"
                        />
                      </th>
                      <th scope="col" className="text-center">
                        {/* Configure
                        <img
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
