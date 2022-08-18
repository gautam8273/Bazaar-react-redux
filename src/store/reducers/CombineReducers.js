import { combineReducers } from "redux";
import {
    reducerBrands, reducerSelling, reducerSearch, reducerProductPageDetails,
    reducerAboutSeller, reducerSignup, reducerLoginForm
    , reducerLogout, reducerHeaderMenu, reducerFilterPanel, reducerAttributeBycatId,
    reducerProfileData,
    reducerAddToCart,
    reducerRemoveToCart,
    reducerGetCart,
    reducerCartToLocal,
    reducerGetWishList,
    reducerRemoveWishList,
    reducerGetUserAddress,
    reducerContactDetailsChangePassword,
    reducerchangeCartQuantity,
    reducerCountryState,
    reducerGetAddressUserCheckOut
} from "./reducers";

export const rootReducer = combineReducers({
    reducerBrands: reducerBrands,
    reducerSelling: reducerSelling,
    reducerSearch: reducerSearch,
    reducerProductPageDetails: reducerProductPageDetails,
    reducerAboutSeller: reducerAboutSeller,
    reducerSignup: reducerSignup,
    reducerLoginForm: reducerLoginForm,
    reducerLogout: reducerLogout,
    reducerHeaderMenu: reducerHeaderMenu,
    reducerFilterPanel: reducerFilterPanel,
    reducerAttributeBycatId: reducerAttributeBycatId,
    reducerProfileData: reducerProfileData,
    reducerAddToCart: reducerAddToCart,
    reducerGetCart: reducerGetCart,
    reducerRemoveToCart: reducerRemoveToCart,
    reducerCartToLocal: reducerCartToLocal,
    reducerGetWishList: reducerGetWishList,
    reducerRemoveWishList: reducerRemoveWishList,
    reducerGetUserAddress: reducerGetUserAddress,
    reducerContactDetailsChangePassword: reducerContactDetailsChangePassword,
    reducerchangeCartQuantity: reducerchangeCartQuantity,
    reducerCountryState: reducerCountryState,
    reducerGetAddressUserCheckOut: reducerGetAddressUserCheckOut
})
