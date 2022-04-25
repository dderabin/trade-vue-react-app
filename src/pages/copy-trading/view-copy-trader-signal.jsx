import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";

export const ViewCopyTraderSignalPage = () => {
  return (
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
                  <img
                    src="img/uploads/search-icon.svg"
                    alt=""
                    className="img-fluid"
                  />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-5 text-end">
              <div className="dropdown">
                <button
                  className="btn btn-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Export Data
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#0">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#0">
                      XLS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 card-light-grey">
        <div className="card-body mob-pad-0">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="bg-white">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    Date
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col">
                    Signal From
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col" className="text-center">
                    Exchange
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col" className="text-center">
                    Market
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col" className="text-center">
                    Execution
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col" className="text-center">
                    Trade
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col" className="text-center">
                    Open Price
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col" className="text-center">
                    Stop Loss
                    <img
                      src="img/table-arrow.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="call-row">
                    <img
                      src="img/uploads/plus.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="collapse-row d-none">
                      <p>
                        <strong>Take Profit 1:</strong> 0.00
                      </p>
                      <p>
                        <strong>Take Profit 2:</strong> 0.00
                      </p>
                      <p>
                        <strong>Take Profit 3:</strong> 0.00
                      </p>
                      <p className="mb-0">
                        <strong>Take Profit 4:</strong> 0.00
                      </p>
                    </div>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#0">
                      <img
                        src="img/uploads/plus.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </td>
                  <td>4/4/2021</td>
                  <td>Signal Provider</td>
                  <td>Universal</td>
                  <td>Future</td>
                  <td>Limit</td>
                  <td>ETHUSDT</td>
                  <td>1899.00</td>
                  <td>1850.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12 my-auto">
              <p className="mb-0 d-none d-sm-block">
                Showing 1 to 10 of 57 entries
              </p>
            </div>
            <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
              <div className="btn-group">
                <a href="#0" className="btn btn-light">
                  Previous
                </a>
                <a href="#0" className="btn btn-light active">
                  1
                </a>
                <a href="#0" className="btn btn-light">
                  2
                </a>
                <a href="#0" className="btn btn-light">
                  3
                </a>
                <a href="#0" className="btn btn-light">
                  4
                </a>
                <a href="#0" className="btn btn-light d-none d-sm-inline-block">
                  5
                </a>
                <a href="#0" className="btn btn-light">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
