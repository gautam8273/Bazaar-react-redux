import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import './App.css';
import { addToCartAction, cartTOLocalAction } from '../store/actions/action';


const ButtonProductPage = () => {
    const dispatch = useDispatch();

    const productPageDetails = useSelector(state => state.reducerProductPageDetails.productPageDetails);
    // console.log("productPageDetails===>", productPageDetails)

    // let cartlocal = useSelector(state => state.reducerCartToLocal?.cartlocal)
    // console.log("cartlocal", cartlocal)



    // change add to cart button to go to cart----FOR DUPLICATE DATA
    let goToCart = useSelector(state => state.reducerGetCart?.getCartData)
    // console.log("getCart==>", getCart)
    if (localStorage.getItem("cartKey")) {
        goToCart = JSON.parse(localStorage.getItem("cartKey"));
    }
    // console.log("goToCart==>", goToCart);
    let list = [];
    goToCart?.forEach((goTo) => {
        // console.log("goTo==>", goTo)
        if (goTo.productData[0]?._id) {
            list.push(goTo.productData[0]?._id)
        }
    })
    // console.log("list==>", list)
    const { id } = useParams();
    let cartPage = false;
    if (list.includes(id)) {
        cartPage = true
    }






    // for Get Profile api --- for userId
    // const getProfile = useSelector(state => state.reducerProfileData?.profileInfo);
    // console.log("getProfile==>", getProfile)

    // for product/sellerProfile api---sellerID
    const sellerId = useSelector(state => state.reducerAboutSeller?.sellerDetails)
    // console.log("sellerId==>", sellerId);

    // Add TO Cart Api----  add product in cart 
    const addToCart = (id) => {

        const cartProducts = {
            // in login condition
            product_id: id,
            save_for_later: false,
            sellerId: sellerId.data[0].sellerData[0]._id,
            //logout condition & productData--> according to getCart api
            productData: [
                {
                    Title: productPageDetails[0].Title,
                    default_image: productPageDetails[0].default_image,
                    Price: productPageDetails[0].Price,
                    _id: productPageDetails[0]._id
                }
            ],
            // user_id: getProfile.userdata._id,

        }
        // console.log("cartProducts==>", cartProducts);

        let token = localStorage.getItem("logindata");
        //data show in login condition on cart page
        if (token) {
            // alert("login")
            //===> data add in api login
            addToCartAction(dispatch, { cart: [cartProducts] })
        }
        //data show in signout condition on cart page & data pass to local storage
        else {
            // console.log("from cart", id)
            // Data pass to local storage
            // alert("logout");

            cartTOLocalAction(dispatch, id); // 

            const localCart = JSON.parse(localStorage.getItem("cartKey"))
            // console.log("localCart===>", localCart)
            if (!localCart) {
                // alert("1111");
                localStorage.setItem("cartKey", JSON.stringify([cartProducts]))
            }
            else {
                // alert("2222");
                localStorage.setItem("cartKey", JSON.stringify([...localCart, cartProducts]))
            }
        }

    }

    return (
        <>

            {
                productPageDetails ? productPageDetails.map((items, index) => {
                    return (
                        <div key={index}>
                            <div className="brandName">

                                {
                                    cartPage
                                        ?
                                        <Link to={`/my-cart`} ><button className="complete-purchase" >Go To Cart </button></Link >
                                        :
                                        <button className="complete-purchase" onClick={() => addToCart(items._id)}>Add to cart</button>
                                }

                                {/* <button className="complete-purchase" onClick={() => addToCart(items._id)}>Add to cart</button> */}

                                <br /><br />
                                <button className="complete-purchase">Buy Now</button><br /><br />
                                <button className="complete-purchase make-offer" >Make an Offer</button><br /><br />
                                <button className="complete-purchase msg-seller">Message seller</button><br /><br />

                                <div className="brand-name">{items.brandData[0].name}</div>
                                <div className="product-name mobile-product-name">{items.Title}</div>
                            </div>

                            <div className="product-details-name">
                                {/* <div className="product-name">Dell New 15</div> */}
                                <div className="price">
                                    <p>
                                        <span className="buy-info">₹{items.Price.sell_price.$numberDecimal}</span>
                                        <span className="old-price">₹{items.Price.current_store_price.$numberDecimal}</span>
                                    </p>

                                    <span className="free-shipping">
                                        {
                                            items.shippingCost ? <span> ₹{items.shippingCost} Shipping</span> : <span>Free</span>
                                        }</span>

                                </div>
                            </div>
                        </div>

                    )
                }) : null
            }


        </>
    )
}

export default ButtonProductPage;

