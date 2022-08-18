import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import clickStar from '../assests/images/tick.png';
import { getCartDetailsAction } from '../store/actions/action';
import { getRemoveCartProductAction, cartTOLocalAction } from '../store/actions/action';
import { addWishlistAction } from '../store/actions/action';
import { removeWishListAction } from '../store/actions/action';
import LoginForm from './LoginForm';




const MyCart = ({ data }) => {
    const [raw, setRaw] = useState()
    const dispatch = useDispatch();
    // add to cart
    // const addToCartDetails = useSelector(state => state.reducerAddToCart?.addToCartData);
    // console.log("addToCartDetails==>", addToCartDetails)

    // for login form
    const [loginForm, setLoginForm] = useState(false);

    const navigate = useNavigate();

    let removeCart = useSelector(state => state.reducerRemoveToCart?.removeToCartData);


    let getCart = useSelector(state => state.reducerGetCart?.getCartData);
    // console.log("getCart==>", getCart)

    // replace the data of store(getCart) to localstorage(getCart) & show the replace data of
    //localstorage on cart page in signout condition
    if (localStorage.getItem("cartKey")) {
        getCart = JSON.parse(localStorage.getItem("cartKey"));

    }
    // console.log("getCart==>", getCart);


    // update counting in cart after add or delete product from the cart
    // console.log(getCart)
    let cartCount = getCart?.length
    // console.log("cartCount", cartCount)
    if (localStorage.getItem("carKey")) {
        cartCount = JSON.parse(localStorage.getItem("cartKey"))
    }
    // console.log("cartCount===>", cartCount)




    //for GET CART API--- to get product on cart page
    useEffect(() => {
        let loginToken = localStorage.getItem("logindata")
        if (loginToken) {
            getCartDetailsAction(dispatch)
        }
    }, [dispatch, removeCart, raw])


    // for delete cart product
    const deleteCartProduct = (id) => {
        let token = localStorage.getItem("logindata");
        const cartId = {
            cartId: id
        }

        if (token) {
            getRemoveCartProductAction(dispatch, cartId);
            getCartDetailsAction(dispatch); // for refresh the page
        }
        else {
            // alert("logout");
            // take data from localstorage
            let cartItems = JSON.parse(localStorage.getItem("cartKey"));
            // console.log("cartItems==>", cartItems);
            let x = 0
            cartItems.forEach(ele => {
                // console.log("ele===>", ele)
                // console.log("id==>", id)
                if (ele.product_id == id) {
                    cartItems.splice(x, 1);
                    setRaw(ele.product_id)
                }
                x = x + 1;
            });



            cartTOLocalAction(dispatch, id + 1);
            localStorage.setItem("cartKey", JSON.stringify(cartItems));
            // console.log("cartItems==>", cartItems);
        }
    }

    const checkoutProcess = () => {
        let token = localStorage.getItem("logindata")

        if (!token) {
            setLoginForm(true);
        }
        else {
            navigate(`/checkout`)
        }
    }




    return (
        <>

            {loginForm && <LoginForm onClose={setLoginForm} />}
            <h6>
                {cartCount}
                item in your cart</h6>

            {
                getCart ? getCart.map((items, index) => {
                    return (
                        <div className="costume-box" key={index}>

                            <div className="costume-block">

                                <div className="diamond-tag">
                                    <img src={clickStar} alt="img" />
                                </div>

                                {/* DELETE THE PRODUCT FROM CART PAGE */}
                                <h6><button className="shop-now"
                                    onClick={
                                        () =>
                                            window.confirm("Delete????")
                                            &&
                                            deleteCartProduct(items._id ? items._id : items.product_id)}
                                >Delete Cart Product</button></h6>
                                {/* items._id for the delete in login condition
                                items.product_id for the delte in logout condition  */}


                                {/* MOVE THE PRODUCT FROM THE CART PAGE TO WISHLIST PAGE */}
                                {/* <h6>
                                    <button className="shop-now" onClick={() => addToWishListFromCartPage(items._id)}>Move to wishlist</button>
                                </h6> */}


                                <h6>
                                    {/* {
                                        (localStorage.getItem("logindata"))?.length > 0
                                            ?
                                            <Link to={`/checkout`}>
                                                <button className="shop-now">Proceed to checkout</button>
                                            </Link>
                                            : null
                                    } */}


                                    <button className="shop-now" onClick={checkoutProcess}>Proceed to checkout</button>


                                </h6>


                                <Link to={`/product-details/${items._id}`}>
                                    <div className="product-pack">
                                        <div className="costumes">
                                            <img src={items.productData[0]?.default_image} alt="img" />
                                        </div>
                                    </div>
                                </Link>

                            </div>
                            <div >
                                <div className="costume-info my-list">
                                    <div className="product-name">
                                        <strong className="prod-name">{items.productData[0]?.Title}</strong>
                                        <div className="free-ship-wrap">
                                            <span className="free-ship">{items.productData[0]?.shippingCost === null ? 'free shipping' : ''}</span>
                                            <i className="fa fa-flag" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <p>
                                        <span className="costs-wrap">
                                            <span className="buy-info">{items.productData[0]?.Price.sell_price.$numberDecimal}</span>
                                            <span className="old-price">({items.productData[0]?.Price.current_store_price.$numberDecimal})</span>
                                        </span>
                                        <br />
                                        <span className="discount">9% OFF</span>
                                        <span className="h-24"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }) : null
            }

        </>
    )
}

export default MyCart;