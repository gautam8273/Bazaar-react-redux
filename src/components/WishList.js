import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../store/actions/action';
// import { getCartDetailsAction } from '../store/actions/action';
// import { aboutSellerAction } from '../store/actions/action';
import { removeWishListAction } from '../store/actions/action';
import { getWishListAction } from '../store/actions/action';

const WishList = () => {
    // console.log("props===>", props)
    const dispatch = useDispatch();

    const wishListdata = useSelector((state) => state.reducerGetWishList?.wishListGet);
    console.log("wishListdata===>", wishListdata)


    const removeWishListProduct = useSelector(state => state.reducerRemoveWishList?.wishListRemove);
    // use for refresh the data after remove from wishlist

    // // for product/sellerProfile api---sellerID
    // const wishListForSellerId = useSelector(state => state.reducerAboutSeller?.sellerDetails)
    // // console.log("sellerId==>", sellerId);
    // // let wishListForSellerId = useSelector(state => state.reducerGetCart?.getCartData);
    // console.log("wishListForSellerId==>", wishListForSellerId)


    // Add To Cart From WishList Page
    const addToCartFromWishList = (id, sellerId) => {
        // console.log("id===>", id)
        // alert("asdsfsd")
        const cartProducts = {
            // in login condition
            product_id: id,
            save_for_later: false,
            sellerId: sellerId,
        }
        let token = localStorage.getItem("logindata");
        if (token) {
            addToCartAction(dispatch, { cart: [cartProducts] })
        }
    }


    // remove the product from wishlist page
    const removeFromWishListPage = (id) => {
        let chekloginStatus = localStorage.getItem("logindata");
        let wish = {
            wishlistId: id
        }
        if (chekloginStatus) {
            removeWishListAction(dispatch, wish)
        }
    }


    // use for the data after remove from wishlist page-
    useEffect(() => {
        let token = localStorage.getItem("logindata");
        if (token) {
            let reqPayload = {
                Authorization: "Bearer " + token,
            }
            getWishListAction(dispatch, reqPayload);
        }


    }, [dispatch, removeWishListProduct])


    return (
        <>

            {
                wishListdata ? wishListdata.map((items, index) => {
                    return (
                        <div className="costume-box" style={{ width: "30%" }} key={index}>
                            <div className="costume-block"><a target="_blank" className="product-pack"
                                href="/product/Men/621de8da7136d1226d30b5f3/?cat=men">
                                <div className="costumes">
                                    <img
                                        src={items.productData.default_image}
                                        alt="costume-img" />
                                </div>
                            </a>
                                <div className="wishlist-btns">
                                    <div className="add-cart-wishlist" onClick={() => addToCartFromWishList(items._id, items.productData.User_id)}>Add To Cart</div>
                                    <div className="remove-wishlist" onClick={() => removeFromWishListPage(items._id)}>Remove</div>
                                </div>
                            </div><a target="_blank" href="/product/Men/621de8da7136d1226d30b5f3/?cat=men">
                                {/* <div className="costume-info"><strong>Jean</strong></div> */}
                            </a>
                        </div>
                    )
                }) : null
            }


        </>
    )
}

export default WishList