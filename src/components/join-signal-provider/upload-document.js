import React, {useEffect, useState} from "react";
// import passport from "../../assets/img/passport.svg";
// import aadhaar from "../../assets/img/aadhaar.svg";
// import drivinglicence from "../../assets/img/license.svg";
import sorticon from "../../assets/img/table-arrow.svg";
import dustbinicon from "../../assets/img/dustbin.svg";
import { useDispatch } from "react-redux";
import { AppActions } from "../../store/actions";
const UploadDocument = ({_id, ...files}) => {
    const dispatch = useDispatch();
    const [documents, setDocuments] = useState({
        passport: null,
        nationalId: null,
        drivingLicense: null
    })

    const handleSubmit = (event) => {
        dispatch(AppActions.userUploadDocumentsAction(documents))
        event.preventDefault()
    }

    const handleChangeDocuments = (event) => {
        const target = event.target;
        const { name, files = null } = target;
        if (files) {
            setDocuments(documents => setDocuments({ ...documents, [name]: files[0]}))
        }
    }

    const deleteDocument = (documentType) => {
        dispatch(AppActions.deleteDocumentAction(documentType))
    }

    return (
        <>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                    <h1 className="font-16 font-bold mob-mt-3">
                        Upload Documents for KYC
                    </h1>
                </div>
            </div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="row mt-4">
                <div className="col-xl-4 col-lg-4 col-12 mob-mt-3">
                    <label>Passport</label>
                    {/* <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Passport" /> */}
                    {/* <img
                        src={passport}
                        alt=""
                        className="img-fluid upload-img" style={{width: '100%'}} /> */}
                    <div className="input-group">
                        <input
                            id="file-selector"
                            type="file"
                            className="form-control"
                            aria-label="Upload"
                            name="passport"
                            onChange={handleChangeDocuments}
                        />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-12 mob-mt-3">
                    <label>Aadhar Card / National ID</label>
                    {/* <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Aadhaar Card / National ID" /> */}
                    {/* <img
                        src={aadhaar}
                        alt=""
                        className="img-fluid upload-img" style={{width: '100%'}} /> */}
                    <div className="input-group">
                        <input
                            id="file-selector"
                            type="file"
                            className="form-control"
                            aria-label="Upload"
                            name="nationalId"
                            onChange={handleChangeDocuments}
                        />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-12 mob-mt-3">
                    <label>Driving License</label>
                    {/* <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Driving License" /> */}
                    <div className="input-group">
                        <input
                            id="file-selector"
                            type="file"
                            className="form-control"
                            aria-label="Upload"
                            name="drivingLicense"
                            onChange={handleChangeDocuments}
                        />
                    </div>
                    {/* <img
                        src={drivinglicence}
                        alt=""
                        className="img-fluid upload-img" style={{width: '100%'}} /> */}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12 col-lg-12 col-12">
                    <button className="btn btn-primary mob-mt-3 h45">                    
                    Upload Documents
                    </button>
                </div>
            </div>
            </form>
            <hr className="mt-5" />
            <div className="row mt-5">
                <div className="col-xl-12 col-lg-12 col-12">
                    <h1 className="font-16 mb-4 font-bold">
                    Documents Uploaded
                    </h1>
                    <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="bg-white">
                        <tr>
                            <th scope="col">
                            Document Name
                            <img
                                src={sorticon}
                                alt=""
                                className="img-fluid"
                            />
                            </th>
                            <th scope="col" className="text-center">
                            Upload Date
                            <img
                                src={sorticon}
                                alt=""
                                className="img-fluid"
                            />
                            </th>
                            <th scope="col" className="text-center">
                            Upload Time
                            <img
                                src={sorticon}
                                alt=""
                                className="img-fluid"
                            />
                            </th>
                            <th scope="col" className="text-center">
                            Verification Status
                            <img
                                src={sorticon}
                                alt=""
                                className="img-fluid"
                            />
                            </th>
                            <th scope="col" className="text-center">
                            Action
                            <img
                                src={sorticon}
                                alt=""
                                className="img-fluid"
                            />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(files).map((item, index) => {
                            const fileItem = files[item];
                            return (
                                <tr key={index}>
                                    <td>{item}</td>
                                    <td className="text-center">31-10-2021</td>
                                    <td className="text-center">10:26 pm</td>
                                    <td className="text-center">{fileItem.status}</td>
                                    <td className="text-center">
                                    <img
                                        src={dustbinicon}
                                        alt=""
                                        className="img-fluid"
                                        role="button"
                                        onClick={() => deleteDocument(item)}
                                    />
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
                  
    );
}
export default UploadDocument;