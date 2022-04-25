export const GAuthPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-none d-lg-block">
        <div className="card-body">
          <a href="#0" className="text-dull font">
            TradePro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold font">
            Google Authenticator
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
                    Setup Google Authenticator
                  </h1>
                </div>
              </div>
              <div class="row mt-4">
              <div class="col-xl-6 col-lg-6 col-12">
                  <div class="row">
                      <div class="col-xl-7 col-lg-7 col-12 my-auto">
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-12">
                                  <label class="form-label mb-3">Using Google
                                      Authenticator</label>
                                  <div class="switch_box box_4">
                                      <div class="input_wrapper">
                                          <input type="checkbox" class="switch_4" />
                                          <svg class="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                              <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z">
                                              </path>
                                          </svg>
                                          <svg class="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                              <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fill-rule="evenodd" clip-rule="evenodd"></path>
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row mt-4">
                              <div class="col-xl-12 col-lg-12 col-12">
                                  <label class="form-label mb-3">Auth PIN *</label>
                                  <input type="text" class="form-control" placeholder="Enter PIN from Google Authenticator App" />
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-5 col-lg-5 col-12 text-center">
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-12">
                                  <label class="form-label mb-3">QRCode Secret Key</label>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-12">
                                  <img src="img/qr-code.svg" alt="" class="img-fluid" />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-12">
                                  <span class="font-10 d-block mt-2">Secret Key :
                                      GFEW4ZDJMEYTEMY</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row mt-5">
                      <div class="col-xl-12 col-lg-12 col-12">
                          <button class="btn btn-primary btn-50">Verify Authentication
                              PIN</button>
                      </div>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-12 mob-mt-3">
                  <label class="form-label mb-3 font-bold">Information on Google Authenticator</label>
                  <div class="card border-card">
                      <div class="card-body">
                          <p>
                              If you set up 2-Step Verification, you can use the Google
                              Authenticator app to
                              receive codes even if you don't have an
                              Internet connection or mobile service.
                          </p>
                          <p>To use Google Authenticator on your Android device, you'll need:
                          </p>
                          <p class="ms-5 mb-2">Android version 2.1 or later</p>
                          <p class="ms-5">2-Step Verification turned on</p>
                          <p>To use Google Authenticator on your iPhone, iPod Touch, or iPad,
                              you'll need:</p>
                          <p class="ms-5 mb-2">The latest operating system for your device</p>
                          <p class="ms-5 mb-2">2-Step Verification turned on</p>
                          <p class="ms-5">(optional to set up with QR code) iPhone 3G or later
                          </p>
                          <p class="mb-2">Download App for Android : <a href="/" class="theme-color-light">Google Authenticator Android</a>
                          </p>
                          <p class="mb-0">Download App for iPhone : <a href="/" class="theme-color-light">Google Authenticator iPhone</a>
                          </p>
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

