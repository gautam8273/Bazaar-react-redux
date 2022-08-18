import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../store/actions/action';
import { contactDetailsChangePasswordAction } from '../store/actions/action';

const ProfileEdit = () => {
  const dispatch = useDispatch();

  // for Get Profile api --- for userId
  const getProfile = useSelector(state => state.reducerProfileData?.profileInfo);
  console.log("getProfile==>", getProfile)

  const [editProfile, setEditProfile] = useState({
    first_name: getProfile?.userdata.first_name,
    last_name: getProfile?.userdata.last_name,
    email: getProfile?.userdata.email,
    mobile: getProfile?.userdata.mobile,
    dob: getProfile?.userdata.dob,
  })

  const editDetailsData = useSelector(state => state.reducerContactDetailsChangePassword?.contactDetails);
  // console.log("editDetailsData==>", editDetailsData)


  // for GetProfile--- api
  useEffect(() => {

    let token = localStorage.getItem("logindata")
    if (token) {
      const pro = {
        Authorization: "Bearer " + token,
      }
      profileAction(dispatch, pro);
    }

  }, [dispatch])


  //Edit Profile
  const profileEdit = (e) => {
    e.preventDefault();
    let editDetails = {
      date_of_birth: e.target.dob.value,
      first_name: e.target.first_name.value,
      gender: getProfile?.userdata.gender,
      last_name: e.target.last_name.value,
      mobile: e.target.mobile.value,

    }
    // console.log("editDetails===>", editDetails);
    contactDetailsChangePasswordAction(dispatch, editDetails)
  }


  return (
    <>
      <div className="container">
        <div style={{ position: "relative" }}>
          <div style={{ opacity: "1" }}>
            <form autoComplete="off" className="detail-from" onSubmit={profileEdit}>
              <h4 className="form-title">My profile</h4>
              <div className="group-wrap edit-profile">
                <div className="form-input"><span>First Name</span>
                  <input type="text" required="" minLength="3"
                    name="first_name"
                    maxLength="50" placeholder="Name*"
                    defaultValue={editProfile.first_name}
                  /></div>
                <div className="form-input"><span>Last Name</span>
                  <input type="text" required="" minLength="3"
                    name="last_name"
                    maxLength="50" placeholder="Name*"
                    defaultValue={editProfile.last_name}
                  /></div>
                <div className="form-input"><span>Email Address</span>
                  <input type="email" required=""
                    placeholder="Email Address*" disabled=""
                    name="email"
                    defaultValue={editProfile.email}
                  /></div>
                <div className="form-input edit-form-input"><span>Mobile Number</span>
                  <input type="text" minLength="10"
                    maxLength="10" placeholder="Mobile Number"
                    name="mobile"
                    defaultValue={editProfile.mobile}
                  // value={editProfile.mobile}
                  /><span className="correct-text"
                    style={{ color: "green" }}>Verified</span></div>
                <div className="form-input"><span>Date of Birth</span>
                  <div className="react-datepicker-wrapper">
                    <div className="react-datepicker__input-container">
                      <input type="date" id="dob"
                        placeholder="Enter your date of birth" className=""
                        name="dob"
                        defaultValue={editProfile.dob}
                      /></div>
                  </div>
                </div>
                <div className="form-input"></div>
              </div>
              <div className="flex-row"><button type="submit" className="header-sell">save details</button>
                &nbsp; &nbsp;
                <a
                  className="header-sell" href="/profile">Back</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileEdit;