import providers from "../../pages/signal-provider/data/provider-data";
import useDraggableScroll from "use-draggable-scroll";

import ProviderList from "../../components/signal-provider/signal-provider";
import GridProviderList from "../../components/signal-provider/grid-signal-provider";
import listview from "../../assets/img/uploads/list-view.svg";
import listwhiteview from "../../assets/img/uploads/list-white.svg";
import gridview from "../../assets/img/uploads/grid-view.svg";
import gridfilledview from "../../assets/img/uploads/grid-filled.svg";
import searchicon from "../../assets/img/uploads/search-icon.svg";
import arrowicon from "../../assets/img/table-arrow.svg";
import React, { useRef, useState } from "react";
import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";
import { useSignalProviders } from "../../hooks";

const ViewSignalProviderPage = () => {
  const { signalProviders } = useSignalProviders()
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  const [providerList, setProviderList] = useState(providers);
  const [viewtype, setViewType] = useState(true);
  var searchProviderList;
  const searchTrader = (value) => {
    if (value !== "") {
      searchProviderList = providers.filter((provider) => provider.firstname === value);
    } else {
      searchProviderList = providers;
    }
    setProviderList(searchProviderList);
  };
  return (
    <>
      <Helmet>
        <title>View Signal Provider · TraderPro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-xl-block d-none cHeader">
          <div className="card-header">
            <span>View Signal Provider</span>
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
                    <ProviderList providerList={signalProviders} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <GridProviderList providerList={signalProviders} />
        )}
      </div>
    </>
  );
};

export default ViewSignalProviderPage;
