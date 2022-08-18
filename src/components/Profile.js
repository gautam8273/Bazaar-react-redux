import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { profileAction } from '../store/actions/action';

const Profile = () => {

    const dispatch = useDispatch();

    // for Get Profile api --- for userId
    const getProfile = useSelector(state => state.reducerProfileData?.profileInfo);
    // console.log("getProfile==>", getProfile)

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

    return (
        <>
            <div className="container">
                <div style={{ position: "relative" }}>
                    <div className="detail-from">
                        <div className="user-detail-edit">
                            <h4 className="form-title">My Profile</h4>
                            <Link to={`/profile/edit`}>
                                <button className="header-sell"><i
                                    className="fas fa-user-edit"></i>Edit</button>
                            </Link>


                        </div>
                        <div className="group-wrap">
                            <div className="form-input"><span>First Name</span>
                                <input type="text" readOnly name="firstname"
                                    value={getProfile?.userdata.first_name || ""}
                                /></div>
                            <div className="form-input"><span>Last Name</span>
                                <input type="text" readOnly name="firstname"
                                    value={getProfile?.userdata.last_name || ""}
                                /></div>
                            <div className="form-input"><span>Email Address</span>
                                <input type="email" readOnly name="email"
                                    value={getProfile?.userdata.email || ""}
                                /></div>
                            <div className="form-input"><span>Mobile Number</span>
                                <input type="text" readOnly name="phone"
                                    value={getProfile?.userdata.mobile || ""}
                                /></div>
                            <div className="form-input"><span>Date of Birth</span>
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container">
                                        <input type="text" id="dob"
                                            placeholder="Enter your date of birth" className=""
                                            readOnly
                                            value={getProfile?.userdata.dob || ""}
                                        /></div>
                                </div>
                            </div>
                        </div>
                        <div className="group-wrap"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile