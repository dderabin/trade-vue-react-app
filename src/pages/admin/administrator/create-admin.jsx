export const CreateAdminPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-none d-lg-block">
        <div className="card-body">
          <a href="#0" className="text-dull font">
            TradePro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold font">
            Add Administrator
          </a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-12 col-lg-12 col-12">
          <div className="card mb-0 card-same-height">
            <div className="card-body">
              <div className="row mob-mt-3">
                <div className="col-xl-12 col-lg-12 col-12">
                  <h1 className="font-24 theme-color font-bold">
                    Add New Administrator
                  </h1>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Admin Full Name *</label>
                  <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Admin Login Username *</label>
                  <input type="text" className="form-control" placeholder="Enter Username for login"></input>
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Admin Password *</label>
                  <input type="text" className="form-control" placeholder="Enter Password for login"></input>
                </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col-xl-12 col-lg-12 col-12">
                  <button
                    onclick="updateSettings()"
                    className="btn btn-primary btn-50"
                  >
                    Add New Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

