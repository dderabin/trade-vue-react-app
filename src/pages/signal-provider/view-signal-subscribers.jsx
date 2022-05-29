import useDraggableScroll from "use-draggable-scroll";
import SubscriberList from "../../components/copy-trader/subscribers";
import arrowicon from "../../assets/img/table-arrow.svg";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useSubscribersForSignalProviders} from "../../hooks"

const ViewSignalSubscribersPage = () => {
  const { subscribersForSignalProviders: subscribers } = useSubscribersForSignalProviders()
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <>
      <Helmet>
        <title>View Signal Provider · TraderPro</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0 d-xl-block d-none cHeader">
          <div className="card-header">
            <span>View Signal Subscribers</span>
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
                  <SubscriberList subscriberList={subscribers} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewSignalSubscribersPage;