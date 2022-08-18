import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { signUpAction } from '../store/actions/action';

const SignUpForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const detailsSignUpForm = useSelector(state => state.reducerSignup.signUpFormDetails)
    // console.log("detailsSignUpForm==>", detailsSignUpForm)

    const closeSignUp = () => {
        onClose(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("===> submit")
        const detailSignUp = {

            browser: "chrome",
            ip: "45.65.41.66",
            login: false,
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            email: e.target.email.value,
            dob: e.target.dob.value,    //DD-MM-YYYY 
            mobile: e.target.phone.value,
            password: e.target.password.value,
            gender: e.target.gender.value,   // Male/Female/Others

        }

        signUpAction(dispatch, detailSignUp);

    }




    return (
        <>
            <div className="popup-wrap">
                <div className="signup-form signup-frm-wrp">
                    <button className="close-btn">
                        {/* <i className="fal fa-times-circle"> */}
                        <span onClick={closeSignUp} >Close</span>
                        {/* </i> */}
                    </button>
                    <div className="inner-sign">
                        <div className="sign-img">
                            <div className="sign-opp-wrap">
                                <div className="facebook-button-holder">
                                    <span style={{ transition: "opacity 0.5s ease 0s" }}>
                                        <button
                                            type="button"
                                            className="kep-familylogin-facebook metro"
                                        >
                                            {/* Login with Facebook */}
                                        </button>
                                    </span>
                                    <button className="register-facebook mail-button">
                                        <span>
                                            <i className="fab fa-facebook-f"></i> &nbsp; Sign up with
                                            Facebook
                                        </span>
                                    </button>
                                </div>
                                <div className="google-button-holder">
                                    <button
                                        type="button" >
                                    </button>
                                    <button className="register-google mail-button">
                                        <span>
                                            <i className="google-icn">
                                                <img
                                                    src="/assets/images/google.svg"
                                                    alt=""
                                                    height="15"
                                                    width="15"
                                                />
                                            </i>
                                            Sign up with Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sign-form">
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className="detail-from ">
                                    <div className="user-detail-edit">
                                        <h4 className="form-title">
                                            Sign up to <span>Bazaar</span>
                                        </h4>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                First Name*
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                                <input
                                                    name="firstName"
                                                    required
                                                    type="text"
                                                    className="MuiInputBase-input MuiOutlinedInput-input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root MuiInputLabel-root
                      MuiInputLabel-formControl MuiInputLabel-animated
                     MuiInputLabel-outlined Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                Last Name*
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                                <input
                                                    name="lastName"
                                                    required
                                                    type="text"
                                                    className="MuiInputBase-input MuiOutlinedInput-input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root MuiInputLabel-root
                         MuiInputLabel-formControl
                         MuiInputLabel-animated
                         MuiInputLabel-outlined
                         Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                Email address*
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div
                                                className="MuiInputBase-root MuiOutlinedInput-root
                        MuiInputBase-formControl"
                                            >
                                                <input
                                                    name="email"
                                                    required
                                                    type="email"
                                                    className="MuiInputBase-input MuiOutlinedInput-input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div
                                            className="MuiFormControl-root MuiTextField-root"
                                            readOnly=""
                                        >
                                            <div
                                                className="MuiInputBase-root
                             MuiOutlinedInput-root
                             MuiInputBase-formControl"
                                            >
                                                <input
                                                    name="dob"
                                                    placeholder="Date of Birth*"
                                                    required
                                                    type="date"
                                                    className="MuiInputBase-input MuiOutlinedInput-input"
                                                />
                                            </div>
                                        </div>
                                        <i className="toggle-password fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="MuiFormControl-root form-input">
                                        <label
                                            className="MuiFormLabel-root MuiInputLabel-root
                                        MuiInputLabel-formControl MuiInputLabel-animated
                                        MuiInputLabel-outlined"
                                            data-shrink="false"
                                        >
                                            Gender
                                        </label>
                                        <div
                                            className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                            required=""
                                        >
                                            <input
                                                name="gender"
                                                type="text"
                                                tabIndex="-1"
                                                className="MuiSelect-nativeInput"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root
                         MuiInputLabel-root
                         MuiInputLabel-formControl
                         MuiInputLabel-animated
                         MuiInputLabel-outlined Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                Phone Number*
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk
                      MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div
                                                className="MuiInputBase-root
                     MuiOutlinedInput-root MuiInputBase-formControl"
                                            >
                                                <input
                                                    name="phone"
                                                    required
                                                    type="text"
                                                    maxLength="10"
                                                    minLength="10"
                                                    className="MuiInputBase-input
                         MuiOutlinedInput-input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root MuiInputLabel-root
                            MuiInputLabel-formControl
                            MuiInputLabel-animated
                            MuiInputLabel-outlined
                            Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                Password *
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk
                         MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div
                                                className="MuiInputBase-root
                        MuiOutlinedInput-root
                              MuiInputBase-formControl"
                                            >
                                                <input
                                                    name="password"
                                                    required
                                                    type="password"
                                                    maxLength="15"
                                                    minLength="6"
                                                    className="MuiInputBase-input
                          MuiOutlinedInput-input"
                                                />
                                            </div>
                                        </div>
                                        <i className="far fa-eye-slash"></i>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root"></div>
                                        <i className="far fa-eye-slash"></i>
                                    </div>
                                    <div className="cond">
                                        <input type="checkbox" /> I agree to Bazaar
                                        <a target="_blank" href="/page/terms">
                                            Terms of Service
                                        </a>
                                        &nbsp;and
                                        <a target="_blank" href="/policy">
                                            Privacy
                                        </a>
                                        .
                                    </div>
                                    <div className="sign-btn">
                                        <button className="shop-now">Sign up</button>
                                    </div>
                                    <div className="already-ac">
                                        Already have an account?&nbsp;<span>Sign In</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpForm