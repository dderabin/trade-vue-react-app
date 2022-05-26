import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { AppActions } from '../../store/actions';
export const ChangePasswordPage = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const [passwords, setPasswords] = useState({
    newpwd: '',
    confirm: ''
  })
  const handleUpdatePassword = (event) => {
    const { newpwd, confirm } = passwords;
    if (newpwd !== confirm) {
      alert.error('Password mismatch')
      return
    }
    dispatch(AppActions.changePasswordAction({password: confirm}))
    event.preventDefault()
  }
  const handleChange = (event) => {
    const { value, name } = event.target;
    setPasswords({...passwords, [name]: value})
  }
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
              <form onSubmit={handleUpdatePassword}>
              <div className="row my-4">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Password *</label>
                  <input
                    type="password"
                    name="newpwd"
                    className="form-control"
                    placeholder="Password"
                    pattern=".{5,}"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className="form-label mb-3">Re-enter Password *</label>
                  <input
                    type="password"
                    name="confirm"
                    className="form-control"
                    placeholder="Re-enter Password"
                    pattern=".{5,}"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col-xl-12 col-lg-12 col-12">
                  <button className="btn btn-primary btn-50 mob-mt-3" type="submit">
                    Update Password
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
