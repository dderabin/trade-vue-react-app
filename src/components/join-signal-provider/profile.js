import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { Link} from "react-router-dom" ;
import { useAlert } from "react-alert";
import { Country, State, City }  from 'country-state-city';
import { Input } from 'reactstrap'
import SelectCountry from '../SelectCountry'

const TraderProfile = () => {
  const [dateValue, onDateChange] = useState(new Date());
  const [userInfo, setUserInfo] = useState({
    firstname: '', middlename: '', lastname: '', gender: '',
    countryid: '', countryname: '', state: '', city: ''
  })
  const [countryList, setCountryList] = useState([])
  const [stateList, setStateList] = useState([])
  const [cityList, setCityList] = useState([])

  useEffect(()=>{
    setCountryList(Country.getAllCountries())
  }, [])

  useEffect(() => {
    console.log("useInfo: ", userInfo);
  }, [userInfo])

  const handleChangeInfo = (e) => {
    let value = e.target.value
    let name = e.target.name
    var letterNumber = /^[a-zA-Z]+$/;

    console.log("evetn dataa: ", e)

    if (name === 'firstname' || name === 'middlename' || name === 'lastname') {
      if(!value.match(letterNumber) && value !== '') {
        console.log("handleChange Info")
        return
      }
    } else if (name === 'state')
      setCityList(City.getCitiesOfState(userInfo.country, value))

    setUserInfo({...userInfo, [name]: value})
  }

  const handleChangeCountry = (value, name ) => {
    setUserInfo({...userInfo, countryid: value, countryname: name})
  }

  useEffect(() => {
    setStateList(State.getStatesOfCountry(userInfo.countryid))
  }, [userInfo.countryid])


  const alert = useAlert();
  return (
    <div className="row">
      <div className="col-xl-12">
        <form
          encType="multipart/form-data"
          // onSubmit="copyTraderClk(event)"
        >
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Profile Picture</label>
              <div className="input-group">
                <input
                  id="file-selector"
                  type="file"
                  className="form-control"
                  aria-label="Upload"
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">User Name *</label>
              <input
                name="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Email Address *</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">First Name *</label>
              <input
                name="firstname"
                type="text"
                className="form-control"
                placeholder="First Name"
                value={userInfo.firstname}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Middle Name </label>
              <input
                name="middlename"
                type="text"
                className="form-control"
                placeholder="Middle Name"
                value={userInfo.middlename}
                onChange={handleChangeInfo}
              />
            </div>
         
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Last Name *</label>
              <input
                name="lastname"
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={userInfo.lastname}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Gender *</label>
              <select
                name="gender"
                className="form-select"
                aria-label="Default select example"
                defaultValue={""}
              >
                <option className="hover-lb" value="">Select a Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Not Mentioned</option>
              </select>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Date of Birth *</label>
              <DatePicker
                onChange={onDateChange}
                value={dateValue}
                isClearable
                placeholderText="Date of Birth"
                className="form-control"
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Country of Residence *</label>
              <SelectCountry list={countryList} onSelected={handleChangeCountry} />
              {/* <Input id="countrySelect" name="country" type="select" onChange={handleChangeInfo}>
                {countryList.length > 0 ? countryList.map((item, index) => 
                    <option value={item.isoCode} key={index}>{item.name}</option>
                  ):(
                    <option value="">None</option>
                  )
                }
              </Input> */}
            </div>
            <div className="col-xl-3 col-lg-3 col-12" style={{position: 'relative'}}>
              <label className="form-label">State *</label>
              <Input id="stateSelect" name="state" type="select" onChange={handleChangeInfo}>
                {stateList.length > 0 ? stateList.map(item =>
                    <option value={item.isoCode}>{item.name}</option>
                  ):(
                    <option value="" style={{color: '#111'}}></option>
                  )
                }
              </Input>
              {stateList.length <= 0 &&
                <span style={{position:'absolute', color: '#d6d6d6', left: '28px', bottom: '9px'}}>Select State of Residence</span>
              }
            </div>
            <div className="col-xl-3 col-lg-3 col-12" style={{position: 'relative'}}>
              <label className="form-label">City *</label>
              {/* <Input id="citySelect" name="text" type="select" onChange={handleChangeInfo}>
                {cityList.length > 0 ? cityList.map(item =>
                    <option value={item.isoCode}>{item.name}</option>
                  ):(
                    <option value="">None</option>
                    )
                  }
              </Input> */}
              <input
                name="city"
                type="text"
                className="form-control"
                placeholder="Enter City"
                // value={userInfo.middlename}
                // onChange={handleChangeInfo}
              />
              {/* <span style={{position:'absolute', color: '#d6d6d6', left: '28px', bottom: '9px'}}>Select State of Residence</span> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-4 col-12">
              <label className="form-label">Zip Code *</label>
              <input
                name="zipcode"
                type="text"
                className="form-control"
                placeholder="Zip Code"
              />
            </div>
            <div className="col-xl-6 col-lg-4 col-12">
              <label className="form-label">Address *</label>
              <input
                name="address"
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <label className="form-label">Subscription Price</label>
              <input
                name="subscriptionprice"
                type="text"
                className="form-control"
                placeholder="free"
                disabled=""
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-6 col-lg-6 col-12">
              <label className="form-label">Details</label>
              <textarea
                name="details"
                className="form-control"
                rows="5"
                placeholder="Write your details"
              ></textarea>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <label className="form-label">Strategy</label>
              <textarea
                name="strategy"
                className="form-control"
                rows="5"
                placeholder="Write your strategy"
              ></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-12 col-lg-12 col-12">
            <Link  to="/copy-trading/view-copy-trader-list">
              <button type="submit" className="btn btn-primary mob-mt-3 h45 "
               onClick={() => {
                alert.error(
                  `Welcome Name. You are now proud Copy Trader of Traderpro Comunity`
                );
        
              }}>
                Join as a Copy Trader
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
     </div>
  );
};

export default TraderProfile;
