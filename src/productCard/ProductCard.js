import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import clickStar from '../assests/images/tick.png';
import LoginForm from '../components/LoginForm';
import { removeWishListAction } from '../store/actions/action';
import { addWishlistAction } from '../store/actions/action';
// import { aboutSellerAction } from '../store/actions/action';

const ProductCard = ({ data }) => {

    // console.log("data==>", data)

    const dispatch = useDispatch();

    // const wishListForSellerId = useSelector(state => state.reducerAboutSeller?.sellerDetails)
    // console.log("wishListForSellerId==>", wishListForSellerId);

    const [wishlist, setWishlist] = useState(data.wishlist);

    // for login form
    const [loginForm, setLoginForm] = useState(false);

    // const id = data._id
    const addToWhishList = (id) => {
        let chekloginStatus = localStorage.getItem("logindata");
        let wish = {
            productId: id
        }
        if (chekloginStatus) {
            if (!wishlist) {
                addWishlistAction(dispatch, wish) // api for add wishlist
                setWishlist(true);
                // aboutSellerAction(dispatch, { sellerId: data.id })

            }
            else {
                removeWishListAction(dispatch, wish) // api for remove wishlist
                setWishlist(false);
                // aboutSellerAction(dispatch, { sellerId: data.id })

            }
        }
        else {
            setLoginForm(true);
        }
    }




    // console.log("data===>", data)
    return (
        <>
            {loginForm && <LoginForm onClose={setLoginForm} />}

            <div className="costume-box" >
                <div className="costume-block">

                    <div className="diamond-tag">
                        <img src={clickStar} alt="img" />
                    </div>

                    <div className="costume-action" onClick={() => addToWhishList(data._id)}>
                        <span className="wish">
                            <i className={`icon-wishlist ${wishlist ? "red-heart" : ""}`}></i>
                        </span>
                    </div>

                    <Link to={`/product-details/${data.brandData.name}/${data._id}`}>

                        <div className="product-pack">
                            <div className="costumes">
                                <img src={data.default_image} alt="img" />
                            </div>
                        </div>
                    </Link>

                </div>
                <div >
                    <div className="costume-info my-list">
                        <div className="product-name">
                            <strong className="prod-name">{data.Title}</strong>
                            <div className="free-ship-wrap">
                                <span className="free-ship">{data.delievery_charge === null ? 'free shipping' : ''}</span>
                                <i className="fa fa-flag" aria-hidden="true"></i>
                            </div>
                        </div>
                        <span className="brand"> {data.brandData.name}</span>
                        <p>
                            <span className="costs-wrap">
                                <span className="buy-info">{data.Price.sell_price.$numberDecimal}</span>
                                <span className="old-price">({data.Price.current_store_price.$numberDecimal})</span>
                            </span>
                            <br />
                            <span className="discount">9% OFF</span>
                            <span className="h-24"></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard