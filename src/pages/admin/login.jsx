import googleplus from "../../assets/uploads/google-plus.svg";
import apple from "../../assets/uploads/apple.svg";
import LoginLogo from "../../components/loginlogo";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <>
      <div className="auth-bg">
        <div>
          <div className="center">
            <LoginLogo />
          </div>
          <div className="card mx-4 px-4 mt-4 pt-2 auth-card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                  <h1 className="auth-title">Login</h1>
                </div>
              </div>
              <form className="mt-2">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div>
                      <label className="form-label">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-6 col-lg-6 col-6 mob-mt-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-6 mob-mt-3 text-end">
                    <a href="forgotPassword.html" className="font-14">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                    <div className="d-grid gap-2">
                      <Link
                        to="/admin/dashboard"
                        className="btn btn-primary btn-green font-18"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row mb-1 mt-3">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <p className="text-center mb-4 mob-mt-3">or</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="d-grid gap-2">
                      <button type="button" className="btn btn-outline-dark">
                        <img
                          src={googleplus}
                          alt="Continue with Google+"
                          className="img-fluid me-2"
                        />
                        Continue with Google
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        <img
                          src={apple}
                          alt="Continue with Apple"
                          className="img-fluid me-2 pb-1"
                        />
                        Continue with Apple
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <p className="text-center font-14 mob-mt-3">
                    Don't have an account ?{" "}
                    <a href="signup.html" className="color-green ms-2">
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
