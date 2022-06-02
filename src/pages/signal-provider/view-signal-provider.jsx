import useDraggableScroll from "use-draggable-scroll";
import ProviderList from "../../components/signal-provider/signal-provider";
import arrowicon from "../../assets/img/table-arrow.svg";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useSignalProviders } from "../../hooks";

const ViewSignalProviderPage = () => {
  const { signalProviders } = useSignalProviders()
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
            <span>View Signal Provider</span>
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
                      Signals
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
      </div>
    </>
  );
};

export default ViewSignalProviderPage;
