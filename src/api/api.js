// import react from 'react';
import axios from 'axios';
import {
    brandEndPoint, sellingHomePage, homePageData, productList, productPageDetails,
    aboutSellerDetails, signUpDetails, loginFormDetails,
    headerMenuDetails, filterPanelDetails, attributeBycatIdDetails, wishlistDataDetails,
    removeWishlist,
    profileDetails,
    addToCartApi,
    removeToCartApi,
    getCartDetailsApi,
    getWishListApi,
    getUserAddressApi,
    ApiChangePassword,
    ApichangeCartQtyDetails,
    ApiCountryState,
    ApiAddUserAddress,
    apiGetUserAddressDAta
} from './endPoints';

export const Api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_BASE_URL_PREFIX + process.env.REACT_APP_BASE_URL_VERSION,

    // send token -- wishlist, addto cart etc
    headers: { Authorization: "Bearer " + localStorage.getItem("logindata") }
})




// Api.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     // Object.assign(config, { test: "123" })
//     document.getElementById('overlay').style.display = 'block'
//     config = { ...config, test: 12345 }
//     config = { ...config, Auth: "Sandeep" };
//     config.xyz = { ...config.xyz, Auth: "Gautam" };
//     // console.log("Request===>", config)
//     return config;

// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// Api.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     document.getElementById('overlay').style.display = 'none'
//     response = { ...response, test2: "5478" };
//     // console.log("Respone=====>", response)
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     alert("Network error")
//     return Promise.reject(error);
// });



// for Brand Name
export const getBrands = () => {
    return Api.get(brandEndPoint)
}

// for all home Page
export const getSellingProducts = () => {
    return Api.get(sellingHomePage)
}





// for See what's selling section
export const getHomePageData = (requestPayload) => {
    // console.log("requestPayload===>", requestPayload);
    return Api.post(homePageData, requestPayload)

}





// for Search
export const getProductListSearch = (payload) => {
    return Api.post(productList, payload)
}


// for product page Details
export const getProductPageDetails = (id) => {
    return Api.post(productPageDetails + '/' + `${id}`)
}

// About The Seller Details
export const getSellerDetails = (sellerId) => {
    // console.log("sellerId===>", sellerId);

    return Api.post(aboutSellerDetails, sellerId)
}

// for SignUp form
export const getSignUpDeatils = (detailSignUp) => {
    return Api.post(signUpDetails, detailSignUp)
}

// for Login Form
export const getLoginFormDetails = (detailsLogin) => {
    return Api.post(loginFormDetails, detailsLogin)
}

// for Header Menu
export const getHeaderMenuDetails = () => {
    return Api.get(headerMenuDetails);
}

// for Filter panel
export const getFilterPanelDetails = (id) => {
    return Api.post(filterPanelDetails, id)
}

// for Filter Panel Dynamic 
export const getAttributeBycatIdDetails = (fV) => {
    // console.log("FV===>", fV)
    return Api.post(attributeBycatIdDetails, fV)
}

// for ADD----wishlist data
export const getWishlistDetails = (id) => {
    return Api.post(wishlistDataDetails, id)
}

// for REMOVE---wishlist data
export const getRemoveWishListDeatils = (id) => {
    return Api.post(removeWishlist, id)
}

// for get profile data
export const getProfileDetails = (id) => {
    return Api.post(profileDetails, id)
}


// add to CART
export const getAddToCartDetails = (id) => {
    return Api.post(addToCartApi, id);
}

// For delete to cart
export const getDeleteToCartDetails = (id) => {
    return Api.post(removeToCartApi, id)
}

// for GET CART DETAILS
export const getCartDetails = () => {
    return Api.post(getCartDetailsApi)
}

//update count of wishList
export const getWishlistShow = () => {
    return Api.post(getWishListApi)
}

// getUserAdress
export const getUserAddressDetails = (id) => {
    return Api.post(getUserAddressApi, id)
}

// change Password api
export const changePasswordDetails = (id) => {
    return Api.post(ApiChangePassword, id)
}

// change the quantity and price of the products in chaeckout page
export const changeCartQtyDetails = (id) => {
    return Api.post(ApichangeCartQtyDetails, id)
}

// country and state Api
export const countryStateDetails = () => {
    return Api.get(ApiCountryState)
}

// Add User Address
export const addUserAddressDetails = (id) => {
    return Api.post(ApiAddUserAddress, id)
}

// get user address--- on checkout page
export const getUserAddDetails = () => {
    return Api.post(apiGetUserAddressDAta)
}