import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import editicon from "../../assets/img/edit.svg";
import dustbinicon from "../../assets/img/dustbin.svg";
import downicon from "../../assets/img/uploads/arrow-down-performance.svg";
import { AppActions } from "../../store/actions";
const FaqTrade = () => {
    const type = 'copyTrader';
    const { FAQs } = useSelector(state => state.appState.copyTrader)
    const dispatch = useDispatch()
    const [faq, setFAQ] = useState({
        type,
        title: '',
        answer: ''
    })
    const [updatefaq, setUpdateFAQ] = useState(null)
    const submitFAQ = (event) => {
        dispatch(AppActions.addFAQAction(faq))
        event.preventDefault()
    }
    const handleChange = (event) => {
        const target = event.target
        const { name, value } = target
        setFAQ(faq => ({...faq, [name]: value}))
    }
    const handleDeleteFAQ = (faqId) => {
        dispatch(AppActions.deleteFAQAction({type, faqId}))
    }
    const handleUpdateFAQ = () => {
        const { _id: faqId } = updatefaq;
        dispatch(AppActions.updateFAQAction({...updatefaq, faqId, type}))
    }
    return (
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
                    <form onSubmit={submitFAQ}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-12">
                        <label className="form-label">Question *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Write Question"
                            name="title"
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xl-12 col-lg-12 col-12">
                        <label className="form-label">Answer *</label>
                        <textarea
                            className="form-control"
                            rows="10"
                            placeholder="Write answer"
                            name="answer"
                            onChange={handleChange}
                            required
                        ></textarea>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xl-12 col-lg-12 col-12">
                        <button className="btn btn-primary mob-mt-3 h45">
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
                { FAQs.map((item, index) => {
                    const { title, answer, _id: faqId } = item;
                    return (<React.Fragment key={index}>
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
                                    <a href="#0" onClick={() => setUpdateFAQ(item)}>
                                        <img
                                            src={editicon}
                                            alt=""
                                            className="img-fluid me-2"
                                        />
                                    </a>
                                    <a href="#0" onClick={() => handleDeleteFAQ(faqId)}>
                                        <img
                                            src={dustbinicon}
                                            alt=""
                                            className="img-fluid me-2"
                                        />
                                    </a>
                                    {title}
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
                                        { (updatefaq && updatefaq._id === faqId) ? (<>
                                            <textarea
                                                className="form-control"
                                                rows="10"
                                                placeholder="Write answer"
                                                name="answer"
                                                value={updatefaq.answer}
                                                onChange={(e) => setUpdateFAQ({...updatefaq, answer: e.target.value})}
                                                required
                                            />
                                            <button 
                                                className="btn btn-primary mob-mt-3 h45 mt-2"
                                                type="button"
                                                onClick={handleUpdateFAQ}
                                            >
                                                Update
                                            </button>
                                        </>) : (<>
                                            <p className="mb-0">
                                                {answer}
                                            </p>
                                        </>)}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </React.Fragment>)
                })}                
            </div>
        </>
    );
}
export default FaqTrade;