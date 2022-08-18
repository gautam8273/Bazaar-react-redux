import React, { useState, useEffect, useRef } from 'react';
import logo from '../assests/images/bazar-new-png.png';
import { useDispatch, useSelector } from 'react-redux';
// import { searchProducts } from '../store/actions/action';
// import SuggestionsListComponent from './SuggestionsListComponent';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import AutosuggestComp from './AutoSuggestComp';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
// import { loginStatusAction } from '../store/actions/action';
import HeaderMenu from './HeaderMenu';
import { profileAction } from '../store/actions/action';
import { getCartDetailsAction } from '../store/actions/action';
import { addToCartAction } from '../store/actions/action';
import { getWishListAction } from '../store/actions/action';
// import SellerForm from '../pages/SellerForm';






const Header = () => {

    const logoutTimerIdRef = useRef(null);


    // for update count wishlist---header
    const wishListCount = useSelector((state) => state.reducerGetWishList?.wishListGet);
    // console.log("wishListCount===.>", wishListCount);

    const wishListLength = wishListCount ? wishListCount.length : null;
    // console.log("wishListLength==>", wishListLength)

    // cartlocal use in any useEffect for  refresh the data only
    let cartlocal = useSelector(state => state.reducerCartToLocal?.cartlocal)
    // console.log("cartlocal", cartlocal)




    // update counting in cart after add or delete product from the cart
    let getCartLength = useSelector(state => state.reducerGetCart?.getCartData)
    // console.log("getCartLength===>", getCartLength)
    if (localStorage.getItem("cartKey")) {
        getCartLength = JSON.parse(localStorage.getItem("cartKey"))
    }
    // console.log("getCartLength===>", getCartLength)
    let cartCount = getCartLength ? getCartLength.length : null;
    // console.log("getCartLength===>", getCartLength)




    const dispatch = useDispatch();

    // for signUp  and login Form
    const [showSignUp, setShowSignUp] = useState(false);

    // for login form
    const [loginForm, setLoginForm] = useState(false);

    // // for Seller Form
    // const [sellerForm, setSellerForm] = useState(false);

    const openSignUp = () => {
        setShowSignUp(true);

    }

    const openLoginForm = () => {
        setLoginForm(true);
    }

    // const sellerFormOpen = () => {
    //     setSellerForm(true);
    // }


    // for Logout
    // useEffect(() => {
    //     localStorage.getItem("logindata");
    //     loginStatusAction(dispatch, true);
    // }, [])


    // Autologout
    useEffect(() => {
        const autoLogout = () => {
            if (document.visibilityState === 'hidden') {
                const timeOutId = window.setTimeout(logoutForm, 15 * 60 * 1000);
                logoutTimerIdRef.current = timeOutId;
            } else {
                window.clearTimeout(logoutTimerIdRef.current);
            }
        };

        document.addEventListener('visibilitychange', autoLogout);

        return () => {
            document.removeEventListener('visibilitychange', autoLogout);
        };
    }, [cartlocal]);


    // for logout
    const logoutForm = () => {
        localStorage.removeItem("logindata");
        window.location.reload();
        // loginStatusAction(dispatch, false);
    }


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


    // all data of localstorage pass to API(addtocart)========> 
    //After login---then data get from getcart api.
    useEffect(() => {
        if (localStorage.getItem("cartKey") && localStorage.getItem("logindata")) {
            // console.log("==>");
            const cartKey = JSON.parse(localStorage.getItem("cartKey"));
            // console.log("cartKeys==>", cartKey);
            const mapData = cartKey.map((item) => {
                return (
                    {
                        product_id: item.product_id,
                        save_for_later: false,
                        sellerId: item.sellerId,
                        // user_id: getProfile.userdata._id,
                    }
                )
            })
            mapData.forEach(getEle =>
                addToCartAction(dispatch, { cart: [getEle] })
            );
            // console.log("mapData===>", mapData);
            localStorage.removeItem("cartKey");
        }
    }, [dispatch])



    //for GET CART API--- to get product on cart page
    useEffect(() => {
        let loginToken = localStorage.getItem("logindata")
        if (loginToken) {
            getCartDetailsAction(dispatch)
        }
    }, [dispatch])



    //update wishlist count ---Header
    useEffect(() => {
        let token = localStorage.getItem("logindata");
        if (token) {
            let reqPayload = {
                Authorization: "Bearer " + token,
            }
            getWishListAction(dispatch, reqPayload);
        }


    }, [dispatch])




    return (
        <>
            <div className="header-login">
                <div className="container">
                    <div className="login">
                        <Link to='/'>
                            <div>
                                <span className="logo-class">
                                    <img src={logo} alt="Bazaar" />
                                </span>
                            </div>
                        </Link>
                        <div className="search-brand">
                            <form>
                                <div>
                                    <AutosuggestComp />
                                </div>
                            </form>
                            <i className="icon-search"></i>
                        </div>
                        <div className="header-address">
                            <div className="product-location-wraps">
                                <div className="product-location">
                                    <div className="location-mark">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="location-text">
                                            <div className="deliver-text">Deliver to</div>
                                            <div className="wrap-delivery">
                                                <div className="delivery-text">Select location</div>
                                                <div className="deliver-zip"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="signup-register">

                            {/* WISHLIST */}
                            {
                                (localStorage.getItem("logindata"))?.length > 0
                                    ?
                                    <div className="download-app">
                                        {/* <a href="/profile/wishList"> */}
                                        <Link to={`/profile/wishList`}>
                                            <span className="header-text">
                                                <span className="unread-wishlist" style={{ color: "#000" }}><b>{wishListLength} </b></span>
                                                <i className="fas fa-heart"></i>
                                            </span>
                                        </Link>

                                        {/* </a> */}
                                    </div>
                                    : null
                            }

                            {/* CHANGE PASSWORD */}
                            {
                                (localStorage.getItem("logindata"))?.length > 0
                                    ?
                                    <div>
                                        <Link to={`/profile/change-password`}>
                                            <button className="header-sell">Change Password </button>
                                        </Link>

                                    </div>
                                    :
                                    null
                            }

                            {/* ACCOUNT */}
                            {
                                (localStorage.getItem("logindata"))?.length > 0
                                    ?
                                    <div>
                                        <Link to={`/profile`}>
                                            &nbsp; &nbsp; <button className="header-sell">My Account</button>
                                        </Link>

                                    </div>
                                    :
                                    null
                            }

                            {/* SIGN IN , SIGNOUT & SIGNUP */}

                            {
                                (localStorage.getItem("logindata"))?.length > 0
                                    ?
                                    <div>
                                        &nbsp;< button className="header-sell">
                                            <span className="header-text" onClick={logoutForm}>Sign out</span>
                                        </button>
                                    </div>
                                    :
                                    <div style={{ display: 'flex' }}>
                                        <div className="signin-register">
                                            <span className="header-text" onClick={openSignUp}>Sign Up</span>
                                        </div>
                                        <div className="signin-register" style={{ paddingRight: '20px' }}>
                                            <span className="header-text" onClick={openLoginForm}>Sign In</span>
                                        </div>
                                    </div>
                            }
                            <div className="cart-wrap">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className="wish-list msg-number" href="/my-cart" >
                                    <div >{cartCount}   Cart</div>
                                    <i className="fas fa-shopping-bag"></i>
                                </a>
                            </div>
                            {/* <div>
                                <button className="complete-purchase" onClick={() => sellerFormOpen()} >Seller Form </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >

            {showSignUp && <SignUpForm onClose={setShowSignUp} />}
            {loginForm && <LoginForm onClose={setLoginForm} />}
            {/* {sellerForm && <SellerForm onClose={setSellerForm} />} */}

            <HeaderMenu />
        </>
    )
}

export default Header;

