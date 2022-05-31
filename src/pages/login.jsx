import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../hooks";
import { Button, Col, Divider, Input, Row } from "antd";
import { MailFilled, LockFilled, EyeTwoTone, EyeInvisibleOutlined, AppleFilled, GoogleOutlined } from '@ant-design/icons';
import user_icon from "../assets/img/user.svg";
import lock_icon from "../assets/img/lock.svg";
import email_icon from "../assets/img/email.svg";

const Login = (props) => {
  const { login, register } = useAuth();
  const [currentFormType, setCurrentFormType] = useState("login");
  const [loginForm, setLoginForm] = useState({
    email: "", password: "", remember: false
  })
  const [regForm, setRegForm] = useState({
    email: "", username: "", password: "", confirmPassword: "", firstname: "", lastName: "", agree: false
  })

  const [resetEmail, setResetEmail] = useState('')

  // const clientId = "278315676653-p894mp7jnnavs0oim2si23nfc2966v5a.apps.googleusercontent.com"

  // const googleLogin = useGoogleLogin({
  //   onSuccess: async tokenResponse => {
  //     try{
  //       console.log('tokenResponse =>', tokenResponse)
  //       const response = await AxiosInstance.post('/user/google-sign-in', {
  //         credential: tokenResponse.access_token
  //       })
  //       console.log('response in googleLogin =>', response.data)
  //     }
  //     catch(err){
  //       console.log('error in googleLogin =>', err)
  //     }
  //   }
  // })


  const loginClick = (event) => {
    const { email, password } = loginForm
    login(email, password);
    event.preventDefault();
  }

  const handleChangeLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }

  const registerClick = (e) => {
    const { email, password } = regForm;
    register(email, password);
    e.preventDefault();
  }

  const handleChangeReg = (event) => {
    setRegForm({ ...regForm, [event.target.name]: event.target.value })
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
      <div className="auth-bg" >
        <div className="pt-md-1">
          <div className="logo-container" style={{ marginTop: "50px" }}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div
            className="card auth-card"
            style={{ marginTop: "2rem", paddingTop: ".5rem", paddingBottom: 0 }}
          >
            <div className="card-body login" style={{ margin: 0, paddingTop: 20 }}>
              {currentFormType === "login" ? (
                <form onSubmit={loginClick}>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h2 className="auth-title">Login Into Trader Pro</h2>
                    </div>
                    <Divider style={{ margin: '5px 0' }}></Divider>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-1">
                        <div>
                          <label className="form-label login">Email Address*</label>
                          <Input
                            prefix={<><img src={email_icon} alt=''/>&nbsp;</>}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={loginForm.email}
                            onChange={(e) => handleChangeLogin(e)}
                            autoComplete="off"
                            style={{ borderRadius: 8 }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-1">
                        <div>
                          <label className="form-label login" style={{ fontWeight: 'bold' }}>Password*</label>
                          <Input.Password
                            prefix={<><img src={lock_icon} alt=''/>&nbsp;</>}
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={loginForm.password}
                            onChange={(e) => handleChangeLogin(e)}
                            style={{ borderRadius: 8 }}
                            required
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
                            onChange={() => setLoginForm({ ...loginForm, remember: !loginForm.remember })}
                            checked={loginForm.remember ? true : false}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-6 mob-mt-3 text-end">
                        <button
                          style={{ paddingTop: 0, color: '#67a1b8', paddingRight: 0 }}
                          type="button"
                          onClick={() => setCurrentFormType("forgot-password")}
                          className="btn font-12"
                        >
                          Forgot Password ?
                        </button>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-success font-18"
                            style={{ height: 40 }}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                    <Divider plain><sapn style={{color: '#999'}}>Or</sapn></Divider>
                    {/* <div className="row mb-1 mt-3">
                      <div className="col-xl-12 col-lg-12 col-12">
                        <p className="text-center mb-4 mob-mt-3">or</p>
                      </div>
                    </div> */}
                    <Row gutter={12} justify="space-between" align="middle">
                      <Col span={12}>
                        <Button style={{ fontSize: '0.5rem', width: '100%', backgroundColor: '#e7e7e7' }}
                        //  onClick={() => googleLogin()}
                        >
                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <GoogleOutlined style={{ fontSize: '0.9rem', paddingRight: 3, color: 'red' }} /> Continue with Google
                          </div>
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button style={{ fontSize: '0.5rem', width: '100%', backgroundColor: '#e7e7e7' }}>
                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AppleFilled style={{ fontSize: '1rem', paddingRight: 5 }} /> Continue with Apple
                          </div>
                        </Button>
                      </Col>
                    </Row>
                    <div className="row mt-4" style={{ margin: 0 }}>
                      <p style={{ margin: 0 }} className="text-center font-12 mob-mt-1">
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
                      <h2 className="auth-title">Reset Your Password</h2>
                      <Divider style={{ margin: 0 }}></Divider>
                    </div>
                  </div>
                  <form onSubmit={resetPassword}>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label login" style={{ marginTop: 10 }}>Email Address *</label>
                          <Input
                            prefix={<><img src={email_icon} alt=''/>&nbsp;</>}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email ID"
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
                            className="btn btn-success font-16"
                            style={{ height: 40 }}
                            type="submit"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                    <Divider plain><sapn style={{color: '#999'}}>Or</sapn></Divider>
                    <Row gutter={12} justify="space-between" align="middle">
                      <Col span={12}>
                        <Button style={{ fontSize: '0.5rem', width: '100%', backgroundColor: '#e7e7e7' }}>
                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <GoogleOutlined style={{ fontSize: '0.9rem', paddingRight: 3, color: 'red' }} /> Continue with Google
                          </div>
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button style={{ fontSize: '0.5rem', width: '100%', backgroundColor: '#e7e7e7' }}>
                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AppleFilled style={{ fontSize: '1rem', paddingRight: 5 }} /> Continue with Apple
                          </div>
                        </Button>
                      </Col>
                    </Row>
                    <div className="row mt-4">
                      <p className="text-center font-12 mob-mt-3" style={{ margin: 0 }}>
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
                      <h2 className="auth-title">Create an Account</h2>
                    </div>
                    <Divider style={{ margin: 0 }}></Divider>
                  </div>
                  <form onSubmit={registerClick}>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-1">
                        <div>
                          <label className="form-label login">User Name*</label>
                          <Input
                            prefix={<><img src={user_icon} alt=''/>&nbsp;</>}
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter Username"
                            value={regForm.username}
                            onChange={e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                            style={{ borderRadius: 6 }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-1">
                        <div>
                          <label className="form-label login">Email Address *</label>
                          <Input
                            prefix={<><img src={email_icon} alt=''/>&nbsp;</>}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={regForm.email}
                            onChange={e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                            style={{ borderRadius: 6 }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div>
                          <label className="form-label" style={{marginTop: 10}}>Username *</label>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter password"
                            value={regForm.username}
                            onChange={ e => handleChangeReg(e)}
                            required
                            style={{borderRadius: 6}}
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-1">
                        <div>
                          <label className="form-label login" >Password *</label>
                          <Input
                            prefix={<><img src={lock_icon} alt=''/>&nbsp;</>}
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            minLength={5}
                            value={regForm.password}
                            onChange={e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                            style={{ borderRadius: 6 }}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-1">
                        <div>
                          <label className="form-label login">
                            Confirm Password *
                          </label>
                          <Input
                            prefix={<><img src={lock_icon} alt=''/>&nbsp;</>}
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter password"
                            minLength={5}
                            value={regForm.confirmPassword}
                            onChange={e => handleChangeReg(e)}
                            autoComplete="off"
                            required
                            style={{ borderRadius: 6 }}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
                            style={{ fontSize: '0.6rem' }}
                          >
                            By proceeding I agree to TraderPro <button style={{ color: '#74a2b8', border: 'none', background: 'none' }}>Terms and
                              Conditions</button> and <button style={{ color: '#74a2b8', border: 'none', background: 'none' }}>Privacy Policy</button>.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-success font-15"
                            type="submit"
                            style={{ height: 40 }}
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </div>
                    <Divider plain><sapn style={{color: '#999'}}>Or</sapn></Divider>
                    <Row gutter={12} justify="space-between" align="middle">
                      <Col span={12}>
                        <Button style={{ fontSize: '0.5rem', width: '100%', backgroundColor: '#e7e7e7' }}>
                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <GoogleOutlined style={{ fontSize: '0.9rem', paddingRight: 3, color: 'red' }} /> Continue with Google
                          </div>
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button style={{ fontSize: '0.5rem', width: '100%', backgroundColor: '#e7e7e7' }}>
                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AppleFilled style={{ fontSize: '1rem', paddingRight: 5 }} /> Continue with Apple
                          </div>
                        </Button>
                      </Col>
                    </Row>
                    <div className="row mt-4">
                      <p className="text-center font-12 mob-mt-3">
                        Already have an account ?{" "}
                        <button
                          onClick={() => setCurrentFormType("login")}
                          href="signup.html"
                          className="color-green ms-2 btn"
                        >
                          Sign In
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
