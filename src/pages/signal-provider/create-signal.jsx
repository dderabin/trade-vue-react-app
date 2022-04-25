export const CreateNewSignalPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card">
        <div className="card-body">
          <img src="img/big-chart.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="accordion" id="accordionExample">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="accordion-item">
                  <h1
                    className="accordion-header mb-0 border px-4 py-2"
                    id="headingOne"
                  >
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12">
                        <button
                          className="btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <strong className="text-success">Buy</strong>
                        </button>
                      </div>
                    </div>
                  </h1>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-12 offset-xl-8 offset-lg-8 text-center">
                          <div className="dropdown border">
                            <button
                              className="btn btn-white dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Exchange
                              <img
                                src="images/arrow-icon.png"
                                alt=""
                                className="img-fluid"
                              />
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
                      <div className="row pt-4">
                        <div className="col-xl-12 col-lg-12 col-12">
                          <ul
                            className="nav nav-tabs join-tabs-ul"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="frontend-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#frontend"
                                type="button"
                                role="tab"
                                aria-controls="frontend"
                                aria-selected="true"
                              >
                                Buy Now
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="backend-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#backend"
                                type="button"
                                role="tab"
                                aria-controls="backend"
                                aria-selected="false"
                              >
                                Update Existing
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content pt-4" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="frontend"
                              role="tabpanel"
                              aria-labelledby="frontend-tab"
                            >
                              <div className="row mt-4">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Trading Symbol *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">
                                          Select Trading Symbol
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Market Type *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">Spot Market</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Position *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">
                                          Long / Short
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                      <label for="" className="font-13">
                                        Execution
                                      </label>
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                                      <div className="input-group">
                                        <span
                                          className="input-group-text p-0 border-0 bg-primary"
                                          id="basic-addon1"
                                        >
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected="">Limit</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </span>
                                        <input
                                          type="text"
                                          className="form-control"
                                          aria-describedby="basic-addon1"
                                          placeholder="Buy Price"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 pt-2">
                                      <label for="" className="font-13">
                                        Investment *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="USDT / USD"
                                      />
                                      <div className="form-text mt-3 text-danger">
                                        (Minimum $35)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-4 pb-4">
                                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                                      <div className="d-grid gap-2">
                                        <button className="btn btn-success">
                                          Add Buy Price
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="backend"
                              role="tabpanel"
                              aria-labelledby="backend-tab"
                            >
                              <div className="row mt-4">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Order ID*
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">Order ID</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Trading Symbol *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">
                                          Select Trading Symbol
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Market Type *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">Spot Market</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                                      <label for="" className="font-13">
                                        Position *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">
                                          Long / Short
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                      <label for="" className="font-13">
                                        Execution *
                                      </label>
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                                      <div className="input-group">
                                        <span
                                          className="input-group-text p-0 border-0 bg-primary"
                                          id="basic-addon1"
                                        >
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected="">Limit</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </span>
                                        <input
                                          type="text"
                                          className="form-control"
                                          aria-describedby="basic-addon1"
                                          placeholder="Buy Price"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-xl-3 col-lg-3 col-12 pt-2">
                                      <label for="" className="font-13">
                                        Investment *
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="USDT / USD"
                                      />
                                      <div className="form-text mt-3 text-danger">
                                        (Minimum $35)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-4 pb-4">
                                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                                      <div className="d-grid gap-2">
                                        <button className="btn btn-success">
                                          Add Buy Price
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="accordion-item">
                  <h1
                    className="accordion-header mb-0 border px-4 py-2"
                    id="headingTwo"
                  >
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12">
                        <button
                          className="btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          <strong className="text-danger">Sell</strong>
                        </button>
                      </div>
                    </div>
                  </h1>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="accordion-body">
                      <div className="row pt-4">
                        <div className="col-xl-12 col-lg-12 col-12">
                          <ul
                            className="nav nav-tabs join-tabs-ul red-border"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="takeprofit-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#takeprofit"
                                type="button"
                                role="tab"
                                aria-controls="takeprofit"
                                aria-selected="true"
                              >
                                Stoploss
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="stoploss-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#stoploss"
                                type="button"
                                role="tab"
                                aria-controls="stoploss"
                                aria-selected="false"
                              >
                                Take Profit
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content pt-4" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="takeprofit"
                              role="tabpanel"
                              aria-labelledby="takeprofit-tab"
                            >
                              <div className="row mt-4">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-12">
                                      <label className="mb-3">
                                        Stop-Loss Price *
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Stop-Loss Price"
                                      />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-12">
                                      <label className="mb-3 mob-mt-3">
                                        Stop-Loss Quantity *
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Stop-Loss Quantity"
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4 pb-4">
                                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                                      <div className="d-grid gap-2">
                                        <button
                                          className="btn btn-danger"
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                        >
                                          Add Stoploss
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="stoploss"
                              role="tabpanel"
                              aria-labelledby="stoploss-tab"
                            >
                              <div className="row mt-4">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-12">
                                      <label className="mb-3">
                                        Take Profit 1 Price *
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Take Profit Price"
                                      />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-12">
                                      <label className="mb-3 mob-mt-3">
                                        Take Profit 1 Quantity *
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Trade Quantity"
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4 pb-4">
                                    <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                                      <div className="d-grid gap-2">
                                        <button
                                          className="btn btn-danger"
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                        >
                                          Add Take Profit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
