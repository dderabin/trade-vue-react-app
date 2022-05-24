import React from 'react'
export const ChangePasswordPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-12">
          <div className="card mb-0 card-same-height">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                  <h1 className="theme-color font-24 font-bold mob-mt-3">
                    Change Password
                  </h1>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Re-enter Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter Password"
                  />
                </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col-xl-12 col-lg-12 col-12">
                  <button className="btn btn-primary btn-50 mob-mt-3">
                    Update Password
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
