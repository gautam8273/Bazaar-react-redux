// import React from 'react';
import {
    getBrands, getProductListSearch, getSellingProducts, getProductPageDetails,
    getSellerDetails, getSignUpDeatils, getLoginFormDetails,
    getHeaderMenuDetails, getFilterPanelDetails, getAttributeBycatIdDetails,
    getWishlistDetails,
    getRemoveWishListDeatils,
    getProfileDetails,
    getAddToCartDetails,
    getDeleteToCartDetails,
    getCartDetails,
    getWishlistShow,
    getUserAddressDetails,
    changePasswordDetails,
    changeCartQtyDetails,
    countryStateDetails,
    addUserAddressDetails,
    getUserAddDetails
} from '../../api/api';
import {
    GET_BRANDS, SELLING_PRODUCTS, SEARCH_PRODUCTS, PRODUCT_PAGE_DETAILS,
    ABOUT_SELLER, SIGN_UP_FORM, LOGIN_FORM, LOGOUT_PAGE, HEADER_MENU,
    FILTER_PANEL, DYNAMIC_FILTER,
    ADD_WISHLIST_DATA,
    REMOVE_WISHLIST_DATA,
    GET_PROFILE_DATA,
    ADD_TO_CART,
    REMOVE_TO_CART,
    GET_CART_DETAILS,
    CART_TO_LOCAL,
    GET_WISHLIST,
    GET_USER_ADDRESS,
    CHANGE_PASSWORD_TYPE,
    CHANGE_QTY_PRICE,
    COUNTRY_STATE,
    USER_ADDRESS,
    ADDRESS_USER_GET,
} from '../reducers/actionTypes';
// import { endPoints } from '../../api/endPoints';



// For Brand Name
export const getBrandsAction = (dispatch) => {
    getBrands().then((res) => {
        // console.log("res===>", getBrands)
        dispatch({
            type: GET_BRANDS,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>getBrandsAction") })
}



// For all HomePage 
export const SellingProductsAction = (disptach) => {
    // alert("abcd")
    getSellingProducts().then((res) => {
        let payload = res.data.data.map((item) => {
            // console.log("item===>", item)
            return ({
                block_name: item.block_name,
                id: item._id,
                name: item.translation_data[0].name
            })
        })
        // console.log("payload==>", payload)
        disptach({
            type: SELLING_PRODUCTS,
            payload: payload
        })
    }).catch(() => { console.log("Having Error===>SellingProductsAction") })
}


// for Search   and also for Menu Header (data)

export const searchProducts = (dispatch, searchkey) => {
    // console.log('payload===>', searchkey)
    getProductListSearch(searchkey).then((res) => {
        // console.log("res===>", res.data.data)
        dispatch({
            type: SEARCH_PRODUCTS,
            payload: res.data.data

        })
    }).catch(() => { console.log("Having Error===>getBrandsAction") })
}


// for Product page Details
export const ProductPageDetailsAction = (dispatch, id) => {
    // console.log("res===>", dispatch)
    getProductPageDetails(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: PRODUCT_PAGE_DETAILS,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>ProductPageDetailsAction") })
}


// About The Seller ---
export const aboutSellerAction = (dispatch, sellerId) => {
    // console.log("res===>", sellerId)
    getSellerDetails(sellerId).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: ABOUT_SELLER,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>aboutSellerAction") })
}


// for SignUp 
export const signUpAction = (dispatch, detailSignUp) => {
    // console.log("res===>", detailSignUp);
    getSignUpDeatils(detailSignUp).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: SIGN_UP_FORM,
            payload: res.data
        })
    }).catch((err) => { console.log(err) })
}


// for Login Form
export const loginFormAction = (dispatch, detailsLogin) => {
    // console.log("detailsLogin===>", detailsLogin);
    getLoginFormDetails(detailsLogin).then((res) => {
        // console.log("res=====>", res)
        localStorage.setItem("logindata", res.data.token);
        window.location.reload();
        dispatch({
            type: LOGIN_FORM,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>loginFormAction") })
}


// for Logout
export const loginStatusAction = (dispatch, payload) => {
    // console.log("payload==>", payload)
    dispatch({
        type: LOGOUT_PAGE,
        payload: payload
    })
}


// for Header Menu
export const headerMenuAction = (dispatch) => {
    // console.log("getHeaderMenuDetails===>", getHeaderMenuDetails)
    getHeaderMenuDetails().then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: HEADER_MENU,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>headerMenuAction") })
}

// for Filter Panel
export const filterPanelAction = (dispatch, id) => {
    // console.log("filterPanelAction===>", filterPanelAction)
    getFilterPanelDetails(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: FILTER_PANEL,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>filterPanelAction") })
}

// for filter panel dynamics
export const attributeBycatIdAction = (dispatch, fV) => {
    // console.log("attributeBycatIdAction===>", fV)
    getAttributeBycatIdDetails(fV).then((res) => {
        dispatch({
            type: DYNAMIC_FILTER,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>attributeBycatIdAction") })
}


// for ADD----wishlist data
export const addWishlistAction = (dispatch, id) => {
    getWishlistDetails(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: ADD_WISHLIST_DATA,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>addWishlistAction") })
}

// for REMOVE--- wishlist data
export const removeWishListAction = (dispatch, id) => {
    getRemoveWishListDeatils(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: REMOVE_WISHLIST_DATA,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>removeWishListAction") })
}




// for Get profile
export const profileAction = (dispatch, id) => {
    getProfileDetails(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: GET_PROFILE_DATA,
            payload: res.data
        })
    }).catch(() => { console.log("Having Error===>profileAction") })
}

// for ADD TO CART
export const addToCartAction = (dispatch, id) => {
    // console.log("addToCartAction===>", addToCartAction)
    getAddToCartDetails(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: ADD_TO_CART,
            payload: res.data,
        })
    }).catch(() => { console.log("Having Error===>addToCartAction") })
}




// for GET CART DEATILS
export const getCartDetailsAction = (dispatch) => {
    getCartDetails().then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: GET_CART_DETAILS,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>getCartDetailsAction") })
}

// Delete to Cart deleteToCart
export const getRemoveCartProductAction = (dispatch, id) => {
    getDeleteToCartDetails(id).then((res) => {
        // console.log("res===>", res)
        dispatch({
            type: REMOVE_TO_CART,
            payload: res.data,

        })
    }).catch(() => { console.log("Having Error===>deleteToCart") })
}

// for update the header Cart count--- in ButtonProductPage.js and myCart.js 
export const cartTOLocalAction = (dispatch, id) => {

    dispatch({
        type: CART_TO_LOCAL,
        payload: id

    })

}


// update count of wishList
export const getWishListAction = (dispatch) => {
    getWishlistShow().then((res) => {
        dispatch({
            type: GET_WISHLIST,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>getWishListAction") })
}


// --getUserAdreess api
export const getUserAddressAction = (dispatch, id) => {
    getUserAddressDetails(id).then((res) => {
        dispatch({
            type: GET_USER_ADDRESS,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>changePasswordAction") })
}

// change paswword---contact deatils api
export const contactDetailsChangePasswordAction = (dispatch, id) => {
    changePasswordDetails(id).then((res) => {
        dispatch({
            type: CHANGE_PASSWORD_TYPE,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>contactDetailsChangePasswordAction") })
}


// checkOut update quantity & PRICE of product
export const changeCartQuantityAction = (dispatch, id) => {
    changeCartQtyDetails(id).then((res) => {
        // console.log("res===>", res)

        getCartDetailsAction(dispatch)

        dispatch({
            type: CHANGE_QTY_PRICE,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>changeCartQuantityAction") })
}

// country and state action
export const countryStateAction = (dispatch) => {
    countryStateDetails().then((res) => {
        // console.log("res==>", res)
        dispatch({
            type: COUNTRY_STATE,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>countryStateAction") })
}

// add user address
export const addUserAddressAction = (dispatch, reqPayload) => {
    addUserAddressDetails(reqPayload).then((res) => {
        // console.log("res==>", res)
        dispatch({
            type: USER_ADDRESS,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>addUserAddressAction") })
}

// get User Address

export const UserAddressAction = (dispatch) => {
    getUserAddDetails().then((res) => {
        dispatch({
            type: ADDRESS_USER_GET,
            payload: res.data.data
        })
    }).catch(() => { console.log("Having Error===>UserAddressAction") })
}