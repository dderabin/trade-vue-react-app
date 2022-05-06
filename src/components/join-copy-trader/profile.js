import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { Country, State, City }  from 'country-state-city';
import { Input } from 'reactstrap'
import SelectCountry from '../SelectCountry'
import { useDispatch, useSelector } from "react-redux";
import { AppActions } from '../../store/actions'

const TraderProfile = (props) => {
  const { state } = useSelector(state => state.appState.copyTrader)
  const { userName = '', email } = useSelector(state => state.appState)
  const dispatch =  useDispatch()
  const [dateValue, onDateChange] = useState(new Date(props.birthDate || null));
  const [userInfo, setUserInfo] = useState({
    userName,
    email,
    country: props.country || '',
    firstName: props.firstName || '',
    middleName: props.middleName || '',
    lastName: props.lastName || '',
    gender: props.gender || '',
    birthDate: new Date(props.birthDate || null),
    state: props.state || '',
    city: props.city || '',
    zipCode: props.zipCode || '',
    address: props.address || '',
    subscriptionPrice: props.subscriptionPrice || '',
    telegramName: props.telegramName || '',
    telegramId: props.telegramId || '',
    telegramLink: props.telegramLink || '',
    details: props.details || '',
    strategy: props.strategy || '',
  })
  const [countryList, setCountryList] = useState([])
  const [stateList, setStateList] = useState([])
  const [cityList, setCityList] = useState([])
  const [countryIndex, setCountryIndex] = useState(0)

  useEffect(()=>{
    setCountryList(Country.getAllCountries())
  }, [])

  useEffect(() => {
    if (dateValue) {
      const birthDate = new Date(dateValue).toISOString().split('T')[0]
      setUserInfo({...userInfo, birthDate})
    } else {
      setUserInfo({...userInfo, birthDate:''})
    }
  }, [dateValue])

  const handleChangeInfo = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const letterNumber = /^[a-zA-Z]+$/;

    if (name === 'firstName' || name === 'middleName' || name === 'lastName') {
      if(!value.match(letterNumber) && value !== '') {
        console.log("handleChange Info")
        return
      }
    } else if (name === 'state')
      setCityList(City.getCitiesOfState(userInfo.country, value))

    setUserInfo({...userInfo, [name]: value})
  }
  
  const handleChangeCountry = (value, name ) => {
    setUserInfo({...userInfo, country: value, countryname: name})
  }

  const copyTraderClk = (event) => {
    dispatch(AppActions.userInfoUpdateAction(userInfo))
    state === "disabled" && dispatch(AppActions.userEnableCopyTraderAction())
    event.preventDefault()
  }

  const handleChangeAvatar = (event) => {
    const target = event.target;
    const { name, files = null } = target;
    if (files) {
      dispatch(AppActions.uploadAvatarAction({[name]: files[0]}))
    }
  }

  useEffect(() => {
    if (userInfo.country !== '' && countryList.length > 0) {
      setCountryIndex(countryList.findIndex(country => country.isoCode === userInfo.country))
      setStateList(State.getStatesOfCountry(userInfo.country))
    }
  }, [userInfo.country, countryList])

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
                  name="avatar"
                  className="form-control"
                  aria-label="Upload"
                  onChange={handleChangeAvatar}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">User Name</label>
              <input
                name="userName"
                type="text"
                className="form-control"
                placeholder="Enter userName"
                value={userInfo.userName}
                onChange={handleChangeInfo}
                readOnly={userName !== ''}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Email Address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                value={email}
                readOnly
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">First Name *</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Middle Name </label>
              <input
                name="middleName"
                type="text"
                className="form-control"
                placeholder="Middle Name"
                value={userInfo.middleName}
                onChange={handleChangeInfo}
              />
            </div>
         
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Last Name *</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={userInfo.lastName}
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
                value={userInfo.gender}
                onChange={handleChangeInfo}
                required
              >
                {/* <option className="hover-lb" value="">Select a Gender</option> */}
                <option value="">Not Mentioned</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                required
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Country of Residence *</label>
              <SelectCountry list={countryList} onSelected={handleChangeCountry} countryIndex={countryIndex}/>
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
                name="zipCode"
                type="text"
                pattern="[0-9]+"
                className="form-control"
                placeholder="Zip Code"
                value={userInfo.zipCode}
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
                minLength={5}
                required
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <label className="form-label">Subscription Price</label>
              <input
                name="subscriptionPrice"
                type="text"
                className="form-control"
                placeholder="free"
                value={userInfo.subscriptionPrice}
                onChange={handleChangeInfo}
                disabled=""
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label"> Telegram Channel Name</label>
              <input
                name="telegramName"
                type="text"
                className="form-control"
                placeholder="Enter Channel Name"
                pattern="[A-Za-z]{1,15}"
                value={userInfo.telegramName}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Telegram Channel ID</label>
              <input
                name="telegramId"
                type="text"
                className="form-control"
                placeholder="Enter Channel ID"
                value={userInfo.telegramId}
                onChange={handleChangeInfo}
              />
            </div>
         
            <div className="col-xl-3 col-lg-3 col-12">
              <label className="form-label">Joining Link</label>
              <input
                name="telegramLink"
                type="text"
                className="form-control"
                placeholder="Enter Joining Link"
                value={userInfo.telegramLink}
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
