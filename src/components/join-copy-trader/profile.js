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
    username: '',
    email: '',
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    state: '',
    city: '',
    zipcode: '',
    address: '',
    subscriptionprice: '',
    telegramname: '',
    telegramid: '',
    telegramlink: '',
    details: '',
    strategy: '',
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

  const handleChangeInfo = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const letterNumber = /^[a-zA-Z]+$/;

    if (name === 'firstname' || name === 'middlename' || name === 'lastname') {
      if(!value.match(letterNumber) && value !== '') {
        console.log("handleChange Info")
        return
      }
    } else if (name === 'state')
      setCityList(City.getCitiesOfState(userInfo.countryid, value))

    setUserInfo({...userInfo, [name]: value})
  }
  
  const handleChangeCountry = (value, name ) => {
    setUserInfo({...userInfo, countryid: value, countryname: name})
  }

  const copyTraderClk = (event) => {
    console.log(userInfo);
    
    if (false) {
      alert.error(
        `Welcome Name. You are now proud Copy Trader of Traderpro Comunity`
      );
    }
    event.preventDefault()
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
          onSubmit={copyTraderClk}
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
                value={userInfo.username}
                onChange={handleChangeInfo}
                required
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Email Address *</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                value={userInfo.email}
                onChange={handleChangeInfo}
                required
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
                required
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
            </div>
            <div className="col-xl-3 col-lg-3 col-12" style={{position: 'relative'}}>
              <label className="form-label">State *</label>
              <Input id="stateSelect" name="state" type="select" onChange={handleChangeInfo}>
                {stateList.length > 0 ? stateList.map((item, index) =>
                    <option key={index} value={item.isoCode}>{item.name}</option>
                  ):(
                    <option value=""></option>
                  )
                }
              </Input>
              {stateList.length <= 0 &&
                <span style={{position:'absolute', color: '#d6d6d6', left: '28px', bottom: '9px'}}>Select State of Residence</span>
              }
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">City *</label>
              <input
                name="city"
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={userInfo.city}
                onChange={handleChangeInfo}
                required
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-4 col-12">
              <label className="form-label">Zip Code *</label>
              <input
                name="zipcode"
                type="text"
                pattern="[0-9]{5}"
                className="form-control"
                placeholder="Zip Code"
                value={userInfo.zipcode}
                onChange={handleChangeInfo}
                required
              />
            </div>
            <div className="col-xl-6 col-lg-4 col-12">
              <label className="form-label">Address *</label>
              <input
                name="address"
                type="text"
                className="form-control"
                placeholder="Address"
                value={userInfo.address}
                onChange={handleChangeInfo}
                required
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <label className="form-label">Subscription Price</label>
              <input
                name="subscriptionprice"
                type="text"
                className="form-control"
                placeholder="free"
                value={userInfo.subscriptionprice}
                onChange={handleChangeInfo}
                disabled=""
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label"> Telegram Channel Name</label>
              <input
                name="telegramname"
                type="text"
                className="form-control"
                placeholder="Enter Channel Name"
                pattern="[A-Za-z]{1,15}"
                value={userInfo.telegramname}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Telegram Channel ID</label>
              <input
                name="telegramid"
                type="text"
                className="form-control"
                placeholder="Enter Channel ID"
                value={userInfo.telegramid}
                onChange={handleChangeInfo}
              />
            </div>
         
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Joining Link</label>
              <input
                name="telegramlink"
                type="text"
                className="form-control"
                placeholder="Enter Joining Link"
                value={userInfo.telegramlink}
                onChange={handleChangeInfo}
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
                value={userInfo.details}
                onChange={handleChangeInfo}
              ></textarea>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <label className="form-label">Strategy</label>
              <textarea
                name="strategy"
                className="form-control"
                rows="5"
                placeholder="Write your strategy"
                value={userInfo.strategy}
                onChange={handleChangeInfo}
              ></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-12 col-lg-12 col-12">
              <button type="submit" className="btn btn-primary mob-mt-3 h45 ">
                Join as a Copy Trader
              </button>
            </div>
          </div>
        </form>
      </div>
     </div>
  );
};

export default TraderProfile;
