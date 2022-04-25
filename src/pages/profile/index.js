import FaqTrade from "../../components/join-copy-trader/faq";
import TraderProfile from "../../components/join-copy-trader/profile";
import UploadDocument from "../../components/join-copy-trader/upload-document";
import { useState } from "react";
import { Helmet } from "react-helmet";
export const ProfilePage = () => {
  const [activetab, setActiveTab] = useState("profile");
  const handleProfile = () => {
    setActiveTab("profile");
  };
  const handleUpload = () => {
    setActiveTab("upload");
  };
  const handleFaq = () => {
    setActiveTab("faq");
  };
  return (
    <>
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="card mb-0">
          <div className="card-body mob-pad-0">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-12">
                <h1 className="font-18 font-bold mb-0">Your Profile</h1>
              </div>
              <div className="col-xl-4 col-lg-4 col-12 text-end mob-text-left">
                <p className="mb-0 mob-mt-3">
                  Current Status: <span id="dataPresent"> </span>
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-xl-12 col-lg-12 col-12">
                <ul
                  className="nav nav-tabs join-tabs-ul"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activetab === "profile" ? "active" : ""
                      }`}
                      id="frontend-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#frontend"
                      type="button"
                      role="tab"
                      aria-controls="frontend"
                      aria-selected="true"
                      onClick={handleProfile}
                    >
                      Profile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activetab === "upload" ? "active" : ""
                      }`}
                      id="backend-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#backend"
                      type="button"
                      role="tab"
                      aria-controls="backend"
                      aria-selected="false"
                      onClick={handleUpload}
                    >
                      Upload Documents
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activetab === "faq" ? "active" : ""
                      }`}
                      id="database-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#database"
                      type="button"
                      role="tab"
                      aria-controls="database"
                      aria-selected="false"
                      onClick={handleFaq}
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="myTabContent">
                  {activetab === "profile" ? (
                    <TraderProfile />
                  ) : activetab === "upload" ? (
                    <UploadDocument />
                  ) : (
                    <FaqTrade />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
