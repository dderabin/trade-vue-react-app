import React from "react";
import editicon from "../../assets/img/edit.svg";
import downicon from "../../assets/img/uploads/arrow-down-performance.svg";
import { useAlert } from "react-alert";
const FaqTrade = () => {
    const alert = useAlert();   return (
        <>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                    <h1 className="font-18 font-bold mob-mt-3">
                    Frequently Asked Questions
                    </h1>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-xl-12 col-lg-12 col-12">
                    <form>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-12">
                        <label className="form-label">Question</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Write Question"
                        />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xl-12 col-lg-12 col-12">
                        <label className="form-label">Answer</label>
                        <textarea
                            className="form-control"
                            rows="10"
                            placeholder="Write answer"
                        ></textarea>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xl-12 col-lg-12 col-12">
                        <button className="btn btn-primary mob-mt-3 h45
                        "
                        onClick={() => {
                            alert.error(
                              `FAQ  added succesfully`
                            );
                    
                          }}>
                            Submit
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <hr className="mt-4" />
            <div className="row mt-5">
                <div className="col-xl-12 col-lg-12 col-12">
                    <h1 className="font-18 font-bold">
                    Frequently Asked Questions
                    </h1>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col-xl-4 col-lg-4 col-12">
                    <div
                    className="accordion border p-2"
                    id="accordionExample"
                    >
                    <div className="accordion-item">
                        <h1 className="accordion-header mb-0" id="headingOne">
                        <button
                            className="btn accordion-button px-0 font-16 font-bold theme-color w-100 text-start collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            <a href="#0">
                            <img
                                src={editicon}
                                alt=""
                                className="img-fluid me-2"
                            />
                            </a>
                            FAQ
                            <span className="float-end">
                            <img
                                src={downicon}
                                alt=""
                                className="img-fluid"
                            />
                            </span>
                        </button>
                        </h1>
                        <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                        >
                        <div className="accordion-body">
                            <hr />
                            <div className="row mt-3">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled
                                it to make a type specimen book. It has
                                survived not only five centuries,
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                    <div
                    className="accordion border p-2"
                    id="accordionExample1"
                    >
                    <div className="accordion-item">
                        <h1 className="accordion-header mb-0" id="headingTwo">
                        <button
                            className="btn accordion-button px-0 font-16 font-bold theme-color w-100 text-start collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                           >
                            <a href="#0">
                            <img
                                src={editicon}
                                alt=""
                                className="img-fluid me-2"
                            />
                            </a>
                            FAQ
                            <span className="float-end">
                            <img
                                src={downicon}
                                alt=""
                                className="img-fluid"
                            />
                            </span>
                        </button>
                        </h1>
                        <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample1"
                        >
                        <div className="accordion-body">
                            <hr />
                            <div className="row mt-3">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled
                                it to make a type specimen book. It has
                                survived not only five centuries,
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                    <div
                    className="accordion border p-2"
                    id="accordionExample2"
                    >
                    <div className="accordion-item">
                        <h1
                        className="accordion-header mb-0"
                        id="headingThree"
                        >
                        <button
                            className="btn accordion-button px-0 font-16 font-bold theme-color w-100 text-start collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <a href="#0">
                            <img
                                src={editicon}
                                alt=""
                                className="img-fluid me-2"
                            />
                            </a>
                            FAQ
                            <span className="float-end">
                            <img
                                src={downicon}
                                alt=""
                                className="img-fluid"
                            />
                            </span>
                        </button>
                        </h1>
                        <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample2"
                        >
                        <div className="accordion-body">
                            <hr />
                            <div className="row mt-3">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled
                                it to make a type specimen book. It has
                                survived not only five centuries,
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FaqTrade;