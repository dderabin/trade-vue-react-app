import tableArrow_icon from "./../../../assets/img/icons/table-arrow.svg";
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from "react";

export const LoginLogsPage = () => {
  // const [listView, setListView] = useState("list");
  const [listView] = useState("list");
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    if(open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-xl-block d-none">
        <div className="card-body">
          <a href="#0" className="text-dull">
            TradePro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold">
            View Login Logs
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
              <div className="dropdown d-xl-inline drop-btn">
              <button
                  className="btn btn-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  onClick={() => openMenu()}
                  // aria-expanded="true"
                >
                  Export Data
                </button>
                {open === true && (
                  <OutsideClickHandler
                  onOutsideClick={() => {
                    setOpen(false)
                  }}
                >
                  <ul
                    className="menu"
                  >
                    <li onClick={() => openMenu()}>
                      <a className="dropdown-item" href="#0">
                        PDF
                      </a>
                    </li>
                    <li onClick={() => openMenu()}>
                      <a className="dropdown-item" href="#0">
                        XLS
                      </a>
                    </li>
                  </ul>
                  </OutsideClickHandler>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 card-light-grey">
        <div className="card-body mob-pad-0">
          {listView === "list" ? (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="font large">
                      User Name
                      <img src={tableArrow_icon} alt="" className="img-fluid margin" />
                    </th>
                    <th scope="col" className=" font small">
                      User Type
                      <img src={tableArrow_icon} alt="" className="img-fluid margin" />
                    </th>
                    <th scope="col" className="text-center font ps-4">
                      Login Status 
                      <img src={tableArrow_icon} alt="" className="img-fluid margin" />
                    </th>
                    <th scope="col" className="text-center font ps-6">
                      IP Address
                      <img src={tableArrow_icon} alt="" className="img-fluid margin" />
                    </th>
                    <th scope="col" className="text-center font ps-4">
                      Login Time
                      <img src={tableArrow_icon} alt="" className="img-fluid margin" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font small">
                      admin
                    </td>

                    <td className="text-center">Administrator</td>
                    <td className="text-center ps-4">
                        <button className="btn btn-success btn-md">Success</button>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                      <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                      <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                  <tr>
                    <td className="font small">
                      admin
                    </td>
                    <td className="text-center">Administrator</td>
                    <td className="text-centerp ps-4">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success btn-md">Success</button>
                      </a>
                    </td>
                    <td className="text-center ps-6">110.227.146.30</td>
                    <td className="text-center ps-4">12/27/2021 11:53:38 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div className="row gx-3">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/2.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-3 mt-3">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/4.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12 my-auto">
              <p className="mb-0 d-none d-sm-block">
                Showing 1 to 10 of 57 entries
              </p>
            </div>
            <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
              <div className="btn-group">
                <a href="/" className="btn btn-light">
                  Previous
                </a>
                <a href="/" className="btn btn-light active">
                  1
                </a>
                <a href="/" className="btn btn-light">
                  2
                </a>
                <a href="/" className="btn btn-light">
                  3
                </a>
                <a href="/" className="btn btn-light">
                  4
                </a>
                <a href="/" className="btn btn-light">
                  5
                </a>
                <a href="/" className="btn btn-light">
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

