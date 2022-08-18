import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginFormAction } from '../store/actions/action';
// import { reducerLoginForm } from '../store/reducers/reducers';


const LoginForm = ({ onClose }) => {

    const dispatch = useDispatch();

    // let loginDetails = useSelector(state => state.reducerLoginForm.loginFormDetaiils);
    // console.log("reducerLoginForm==>", loginDetails)

    const closeLoginForm = () => {
        onClose(false)
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const detailsLogin = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        onClose(false);
        loginFormAction(dispatch, detailsLogin);
    }




    return (
        <>
            <div className="popup-wrap">
                <div className="signup-form signup-frm-wrp user-login">
                    <button className="close-btn">
                        {/* <i className="fal fa-times-circle"> */}
                        <span onClick={closeLoginForm}>close</span>
                        {/* </i> */}
                    </button>
                    <div className="inner-sign">
                        <div className="sign-img log-img">
                            <div className="sign-opp-wrap"></div>
                        </div>
                        <div className="sign-form">
                            <form
                                onSubmit={loginSubmit}
                            >
                                <div className="detail-from">
                                    <div className="user-detail-edit">
                                        <h4 className="form-title">
                                            Sign In to <span>Bazaar</span>
                                        </h4>
                                    </div>
                                    <div className="facebook-button-holder">
                                        <span style={{ transition: "opacity 0.5s ease 0s" }}>
                                            <button
                                                type="button"
                                                className="kep-login-facebook metro"
                                            >
                                                Login with Facebook
                                            </button>
                                        </span>
                                        <button className="register-facebook mail-button">
                                            <span>
                                                <i className="fab fa-facebook-f"></i> &nbsp; Sign in
                                                with Facebook
                                            </span>
                                        </button>
                                    </div>

                                    <div className="or-opp">
                                        <span>or</span>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                Email or phone number*
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                                <input
                                                    name="email"
                                                    type="text"
                                                    className="MuiInputBase-input MuiOutlinedInput-input"
                                                />
                                                <fieldset
                                                    aria-hidden="true"
                                                    className="jss33 MuiOutlinedInput-notchedOutline"
                                                >
                                                    <legend className="jss35">
                                                        <span>Email or phone number*&nbsp;*</span>
                                                    </legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="MuiFormControl-root MuiTextField-root">
                                            <label
                                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                                data-shrink="false"
                                            >
                                                Password*
                                                <span
                                                    aria-hidden="true"
                                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                                >
                                                    &thinsp;*
                                                </span>
                                            </label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                                <input
                                                    name="password"
                                                    type="password"
                                                    maxLength="15"
                                                    minLength="6"
                                                    className="MuiInputBase-input MuiOutlinedInput-input"
                                                />
                                                <fieldset
                                                    aria-hidden="true"
                                                    className="jss33 MuiOutlinedInput-notchedOutline"
                                                >
                                                    <legend className="jss35">
                                                        <span>Password*&nbsp;*</span>
                                                    </legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <i className="fal fa-eye-slash"></i>
                                    </div>
                                    <span className="checkbox-remember">Forgot Password?</span>
                                    <div className="sign-btn">
                                        <button className="shop-now">sign In</button>
                                    </div>
                                    <div className="already-ac">
                                        Don't have an account?&nbsp;<span>Sign Up</span>
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

export default LoginForm;



// asdf
// asdf
// test789@gmail.com
// 6383049206