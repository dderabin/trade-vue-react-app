import googleplus from "../assets/uploads/google-plus.svg";
import apple from "../assets/uploads/apple.svg";
import { Logo } from "../components/Logo";
import { Link, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AuthService from '../services/auth.service';

const Login = (props) => {
  const [currentFormType, setCurrentFormType] = useState("login");
  const [loginForm, setLoginForm] = useState({
    email: "", password: "", remember: false
  })
  const [regForm, setRegForm] = useState({
    email: "", username: "", password:"", confirmPassword: "", firstname: "", lastName: "", agree: false
  })
  const navigate = useNavigate();

  useEffect(() => {
    console.log("reg data changed: ", loginForm);
  }, [loginForm]);

  
  const handleLogin = (event) => {
    navigate('/favourites');

    let { email, password } = loginForm
    // AuthService.login(email, password)
    //   .then(({ status, data}) => {
    //     if (status !== 200)
    //       throw new Error("Error! Todo not saved")
    //       console.log("status: ", data);
    //       localStorage.setItem("trade-token", data.token)
    //       localStorage.setItem("trade-refresh", data.refreshToken)
    //       navigate('/favourites')
    //     })
    //     .catch(err => console.log(err))

    event.preventDefault();
  }
  const handleChangeLogin = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleSignup = (e) => {
    let { email, username, password } = regForm;
    AuthService.register(username, email, password)
      .then(({ status, data}) => {
        if (status !== 200)
          throw new Error("Error! Todo not saved")
          // setTodos(data.todos)
          console.log("status: ", data);
        localStorage.setItem("trade-token", data.token)
        localStorage.setItem("trade-refresh", data.refreshToken)
        navigate('/favourites')
      })
      .catch(err => console.log(err))

    e.preventDefault();
  }
  const handleChangeReg = (event) => {
    setRegForm({...regForm, [event.target.name]: event.target.value})
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
                <>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="auth-title">Login</h1>
                    </div>
                  </div>
                  <form>
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
                          onClick={() => setCurrentFormType("forgot-password")}
                          href="forgotPassword.html"
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
                            to="/favourites"
                            className="btn btn-primary btn-green font-18"
                            onClick={(e) => handleLogin(e)}
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
                          href="signup.html"
                          className="color-green ms-2 btn"
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </form>
                </>
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
                  <form>
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
                        <div className="d-grid gap-2">
                          <Link
                            to="/favourites"
                            className="btn btn-primary btn-green font-18"
                          >
                            Reset Password
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
                          onClick={() => handleSignup()}
                          href="signup.html"
                          className="color-green ms-2 btn"
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
                  <form>
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
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
                            value={regForm.password}
                            onChange={ e => handleChangeReg(e)}
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
                            value={regForm.confirmPassword}
                            onChange={ e => handleChangeReg(e)}
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
                            onClick={(e) => handleSignup(e)}
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
