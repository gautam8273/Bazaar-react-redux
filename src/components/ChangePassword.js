import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAddressAction } from '../store/actions/action';
import { profileAction } from '../store/actions/action';
import { contactDetailsChangePasswordAction } from '../store/actions/action';


const ChangePassword = () => {

    const dispatch = useDispatch();


    const changePasswordData = useSelector(state => state.reducerContactDetailsChangePassword?.contactDetails);
    console.log("changePasswordData==>", changePasswordData)

    // for Get Profile api --- for userId
    const getProfile = useSelector(state => state.reducerProfileData?.profileInfo);
    // console.log("getProfile==>", getProfile)

    // for Get Profile
    useEffect(() => {
        let token = localStorage.getItem("logindata")
        if (token) {
            const pro = {
                Authorization: "Bearer " + token,
            }
            profileAction(dispatch, pro);
        }

    }, [dispatch])


    // ----getuserAddress API
    useEffect(() => {
        let token = localStorage.getItem("logindata")
        let requestPayload = {
            Authorization: "Bearer " + token,
        }
        getUserAddressAction(dispatch, requestPayload)
    }, [dispatch])



    // change password
    const changePassword = (e) => {
        // alert("fsfsd")
        e.preventDefault();
        let contactDetails = {
            confirmPassword: e.target.confirm_password?.value,
            currentPassword: e.target.Current_password?.value,
            date_of_birth: getProfile.userdata.dob,
            full_name: getProfile.userdata.full_name,
            mobile: getProfile.userdata.mobile,
            newPassword: e.target.new_password?.value,
            userId: getProfile.userdata._id
        }
        // console.log("contactDetails===>", contactDetails);
        contactDetailsChangePasswordAction(dispatch, contactDetails)
    }

    return (
        <>
            <div className="container">
                <div style={{ position: "relative" }}>
                    <div style={{ opacity: "1" }}>
                        <form className="detail-from" onSubmit={changePassword}>
                            <h4 className="form-title">My profile</h4>
                            <div className="group-wrap edit-profile">
                                <div className="form-input"><span>Current Password</span>
                                    <input type="password"
                                        name="Current_password"
                                        placeholder="Current Password" required=""
                                    // value="" 
                                    /><i
                                        className="toggle-password fa fa-fw   fa-eye-slash"></i></div>
                                <div className="form-input"><span>New Password</span>
                                    <input type="password"
                                        required=""
                                        name="new_password"
                                        placeholder="New Password"
                                        minLength="6"
                                        maxLength="15"
                                    //  value="" 
                                    /><i
                                        className="toggle-password fa fa-fw   fa-eye-slash"></i></div>
                                <div className="form-input"><span>Confirm Password</span>
                                    <input type="password"
                                        required=""
                                        name="confirm_password"
                                        placeholder="Confirm Password"
                                        minLength="6"
                                        maxLength="15"
                                    /><i
                                        className="toggle-password fa fa-fw   fa-eye-slash"></i></div>
                            </div>
                            <div className="flex-row">
                                <button type="submit" className="header-sell">Change Password</button>
                                {/* <a
                                    className="header-sell" href="/profile">Back
                                </a> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;