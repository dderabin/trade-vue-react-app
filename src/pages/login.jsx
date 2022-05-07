import googleplus from "../assets/uploads/google-plus.svg";
import apple from "../assets/uploads/apple.svg";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../hooks";

const Login = (props) => {
  const { login, register } = useAuth();
  const [currentFormType, setCurrentFormType] = useState("login");
  const [loginForm, setLoginForm] = useState({
    email: "", password: "", remember: false
  })
  const [regForm, setRegForm] = useState({
    email: "", username: "", password:"", confirmPassword: "", firstname: "", lastName: "", agree: false
  })

  const [resetEmail, setResetEmail] = useState('')
  
  const loginClick = (event) => {
    const { email, password } = loginForm
    login(email, password);
    event.preventDefault();
  }

  const handleChangeLogin = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const registerClick = (e) => {
    const { email, password } = regForm;
    register(email, password);
    e.preventDefault();
  }
  
  const handleChangeReg = (event) => {
    setRegForm({...regForm, [event.target.name]: event.target.value})
  }

  const resetPassword = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login · Traderpro</title>
        <link rel="canonical" href="https://traderpro.live" />
      </Helmet>
      <div className="auth-bg">
        <div className="pt-md-1">
          <div className="logo-container" style={{ marginTop: "25px" }}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div
            className="card mx-4 px-4  auth-card"
            style={{ marginTop: "3rem", paddingTop: ".5rem" }}
          >
            <div className="card-body">
              {currentFormType === "login" ? (
                <form onSubmit={loginClick}>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="auth-title">Login</h1>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={loginForm.email}
                            onChange={(e) => handleChangeLogin(e)}
                            autoComplete="off"
                            required
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
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={loginForm.password}
                            onChange={(e) => handleChangeLogin(e)}
                            autoComplete="off"
                            required
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
                            onChange={() => setLoginForm({...loginForm, remember: !loginForm.remember})}
                            checked={loginForm.remember ? true: false}
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
                        <button
                          type="button"
                          onClick={() => setCurrentFormType("forgot-password")}
                          className="btn font-14"
                        >
                          Forgot Password ?
                        </button>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-primary btn-green font-18"
                            type="submit"
                          >
                            Login
                          </button>
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
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            <img
                              src={googleplus}
                              alt="Continue with Google+"
                              className="img-fluid me-2"
                            />
                            Continue with Google
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
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
                        <button
                          onClick={() => setCurrentFormType("sign-up")}
                          className="color-green ms-2 btn"
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              ) : currentFormType === "forgot-password" ? (
                <>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Forgot Password · Traderpro</title>
                    <link rel="canonical" href="https://traderpro.live" />
                  </Helmet>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="auth-title">Reset Password</h1>
                    </div>
                  </div>
                  <form onSubmit={resetPassword}>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-primary btn-green font-18"
                            type="submit"
                          >
                            Reset Password
                          </button>
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
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            <img
                              src={googleplus}
                              alt="Continue with Google+"
                              className="img-fluid me-2"
                            />
                            Continue with Google
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
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
                        <button
                          className="color-green ms-2 btn"
                          onClick={() => setCurrentFormType('sign-up')}
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Register · Traderpro</title>
                    <link rel="canonical" href="https://traderpro.live" />
                  </Helmet>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="auth-title">Create an Account</h1>
                    </div>                                                                                                                                        
                  </div>
                  <form onSubmit={registerClick}>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={regForm.email}
                            onChange={ e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label">Username *</label>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter password"
                            value={regForm.username}
                            onChange={ e => handleChangeReg(e)}
                            required
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label">Password *</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            minLength={5}
                            value={regForm.password}
                            onChange={ e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label">
                            Confirm Password *
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter password"
                            minLength={5}
                            value={regForm.confirmPassword}
                            onChange={ e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className=" mob-mt-3">
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
                            By proceeding I agree to TraderPro Terms and
                            Conditions and Privacy Policy.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-primary btn-green font-18"
                            type="submit"
                          >
                            Register Now
                          </button>
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
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            <img
                              src={googleplus}
                              alt="Continue with Google+"
                              className="img-fluid me-2"
                            />
                            Continue with Google
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
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
                        <button
                          onClick={() => setCurrentFormType("login")}
                          href="signup.html"
                          className="color-green ms-2 btn"
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
