import TraderList from "../../components/copy-trader/traders";
import arrowicon from "../../assets/img/table-arrow.svg";
import React, { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import { Helmet } from "react-helmet";
import { useCopyTraders } from "../../hooks";

export const ViewCopyTraderListPage = () => {
  const { appliedCopyTraders } = useCopyTraders();
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

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
                    </th>
                    <th scope="col" className="text-center">
                      Configuration
                    </th> 
                  </tr>
                </thead>
                <tbody id="myTabledata">
                  <TraderList traderList={appliedCopyTraders} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
