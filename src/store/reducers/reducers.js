// import React from 'react';
import {
    GET_BRANDS, SEARCH_PRODUCTS, SELLING_PRODUCTS, PRODUCT_PAGE_DETAILS,
    ABOUT_SELLER, SIGN_UP_FORM, LOGIN_FORM,
    LOGOUT_PAGE,
    HEADER_MENU, FILTER_PANEL, DYNAMIC_FILTER,
    ADD_WISHLIST_DATA,
    GET_PROFILE_DATA,
    ADD_TO_CART,
    GET_CART_DETAILS,
    REMOVE_TO_CART,
    CART_TO_LOCAL,
    GET_WISHLIST,
    REMOVE_WISHLIST_DATA,
    GET_USER_ADDRESS,
    CHANGE_PASSWORD_TYPE,
    CHANGE_QTY_PRICE,
    COUNTRY_STATE,
    USER_ADDRESS,
    ADDRESS_USER_GET
} from './actionTypes';


const initialState = {
    brands: [],
    sellingProducts: [],
    searchItems: [],
    productPageDetails: [],
    signUpFormDetails: [],
    loginFormDetaiils: [],
    headerMenuData: [],
    // filterDetails: [],
    dynamicFilterDetails: [],
    addToCartData: [],
    getcartLength: [],
    addToCartLength: [],
    wishListGet: [],
    changePasswordData: [],
    changeCartQuantity: [],
    getAddress: []



}

//for Brand
export const reducerBrands = (state = initialState, action) => {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: action.payload
            }
        default:
            return state;
    }
}


//for Home Page
export const reducerSelling = (state = initialState, action) => {
    // console.log("reducerSelling==>", action.payload)
    switch (action.type) {
        case SELLING_PRODUCTS:
            return {
                ...state,
                sellingProducts: action.payload
            }
        default: return state;
    }
}

// for Search and also for Menu Header (data)

export const reducerSearch = (state = initialState, action) => {
    // console.log("reducerSearch===>", action.payload)
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchItems: action.payload
            }
        default:
            return state;
    }
}


// for product page details

export const reducerProductPageDetails = (state = initialState, action) => {
    // console.log("reducerProductPageDetails===>", action.payload)

    switch (action.type) {
        case PRODUCT_PAGE_DETAILS:
            return {
                ...state,
                productPageDetails: action.payload
            }
        default: return state;
    }
}

//  About the Seller Details
export const reducerAboutSeller = (state = initialState, action) => {
    // console.log("reducerAboutSeller===>", action.payload)

    switch (action.type) {
        case ABOUT_SELLER:
            return {
                ...state,
                sellerDetails: action.payload
            }
        default: return state;
    }
}


// for Signup form

export const reducerSignup = (state = initialState, action) => {
    // console.log("reducerSignup===>", action.payload)
    switch (action.type) {
        case SIGN_UP_FORM:
            return {
                ...state,
                signUpFormDetails: action.payload
            }
        default: return state;
    }

}

// for Login Form 
export const reducerLoginForm = (state = initialState, action) => {
    // console.log("reducerLoginForm===>", action.payload)
    switch (action.type) {
        case LOGIN_FORM:
            return {

                loginFormDetaiils: action.payload
            }
        default: return state;
    }
}

// for logout page
export const reducerLogout = (state = initialState, action) => {
    // console.log("reducerLogout===>", action.payload)
    switch (action.type) {
        case LOGOUT_PAGE:
            return {
                logoutPageDetails: action.payload
            }
        default: return state;
    }
}


// for Header Menu
export const reducerHeaderMenu = (state = initialState, action) => {
    // console.log("reducerHeaderMenu===>", action.payload)
    switch (action.type) {
        case HEADER_MENU:
            return {
                ...state,
                headerMenuData: action.payload
            }
        default: return state;
    }
}

// for side filter Panel

export const reducerFilterPanel = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PANEL:
            return {
                ...state,
                filterDetails: [action.payload]
            }
        default: return state;
    }
}

// for Filter panel Dyanmics
export const reducerAttributeBycatId = (state = initialState, action) => {
    // console.log("reducerAttributeBycatId===>", action.payload)
    switch (action.type) {
        case DYNAMIC_FILTER:
            return {
                ...state,
                dynamicFilterDetails: action.payload
            }
        default: return state;
    }

}

// for wishlist
export const reducerWishlist = (state = initialState, action) => {
    console.log("reducerWishlist===>", action.payload)
    switch (action.type) {
        case ADD_WISHLIST_DATA:
            return {
                ...state,
                wishlistinfo: action.payload
            }
        default: return state;
    }

}

// for get profile data
export const reducerProfileData = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_DATA:
            return {
                ...state,
                profileInfo: action.payload
            }
        default: return state;
    }
}

// for ADD TO CART
export const reducerAddToCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addToCartData: action.payload,
                addToCartLength: action.payload.length
            }
        default: return state;
    }
}


//Remove to cart
export const reducerRemoveToCart = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_TO_CART:
            return {
                ...state,
                removeToCartData: action.payload
            }
        default: return state;
    }
}


// for GET CART
export const reducerGetCart = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_DETAILS:
            return {
                ...state,
                getCartData: action.payload,
                // getcartLength: action.payload.length

            }
        default: return state;
    }
}

// create id for addto cart and for delete the product
export const reducerCartToLocal = (state = initialState, action) => {
    switch (action.type) {
        case CART_TO_LOCAL:
            return {
                ...state,
                cartlocal: action.payload

            }
        default: return state;
    }
}


//getWishList api
export const reducerGetWishList = (state = initialState, action) => {
    switch (action.type) {
        case GET_WISHLIST:
            return {
                ...state,
                wishListGet: action.payload,
            }
        default: return state;
    }
}

// remove product from wishList page
export const reducerRemoveWishList = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_WISHLIST_DATA:
            return {
                ...state,
                wishListRemove: action.payload,
            }
        default: return state;
    }
}

//change password--- getUserAdress
export const reducerGetUserAddress = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ADDRESS:
            return {
                ...state,
                changePasswordData: action.payload
            }
        default: return state;
    }
}

// change password---conact details api
export const reducerContactDetailsChangePassword = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_TYPE:
            return {
                ...state,
                contactDetails: action.payload
            }
        default: return state;
    }
}

// change the quantity and price in checkout page

export const reducerchangeCartQuantity = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_QTY_PRICE:
            return {
                ...state,
                changeCartQuantity: action.payload
            }
        default: return state;
    }
}

// country and state
export const reducerCountryState = (state = initialState, action) => {
    switch (action.type) {
        case COUNTRY_STATE:
            return {
                ...state,
                stateCountry: action.payload
            }
        default: return state;
    }
}

// add user address
export const reducerAddUserAddress = (state = initialState, action) => {
    switch (action.type) {
        case USER_ADDRESS:
            return {
                ...state,
                userAddress: action.payload
            }
        default: return state;
    }
}

// get user address ---on checkout page
export const reducerGetAddressUserCheckOut = (state = initialState, action) => {
    switch (action.type) {
        case ADDRESS_USER_GET:
            return {
                ...state,
                getAddress: action.payload
            }
        default: return state;
    }
}