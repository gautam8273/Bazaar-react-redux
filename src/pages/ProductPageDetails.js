import React, { useState, useEffect } from 'react'
import clickStar from '../assests/images/tick.png';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductPageDetailsAction } from '../store/actions/action';
import ItemDetails from '../components/ItemDetails';
import ButtonProductPage from '../components/ButtonProductPage';
import AboutSeller from '../components/AboutSeller';
import { aboutSellerAction } from '../store/actions/action';

const ProductPageDetails = ({ data }) => {

    const dispatch = useDispatch();

    // const wishListForSellerId = useSelector(state => state.reducerAboutSeller?.sellerDetails)
    // console.log("wishListForSellerId==>", wishListForSellerId);

    const { id } = useParams();
    // console.log("id===>", id)

    useEffect(() => {
        ProductPageDetailsAction(dispatch, id);
        // aboutSellerAction(dispatch, { sellerId: data?.id })
    }, [dispatch])

    let productPageDetails = useSelector(state => state.reducerProductPageDetails?.productPageDetails);

    // console.log("productPageDetails==>", productPageDetails)

    return (
        <>
            <ButtonProductPage />

            {
                productPageDetails ? productPageDetails.map((items, index) => {
                    return (
                        <div className="costume-box" key={index} >
                            <div className="costume-block">

                                <div className="diamond-tag">
                                    <img src={clickStar} alt="img" />
                                </div>

                                <div className="product-pack">
                                    <div className="costumes">
                                        <img src={items.default_image} alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="costume-info my-list">
                                    <div className="product-name">
                                        <strong className="prod-name">{items.Title}</strong>
                                        <div className="free-ship-wrap">
                                            <span className="free-ship">{items.delievery_charge === null ? 'free shipping' : ''}</span>
                                            <i className="fa fa-flag" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <span className="brand"> {items.brandData.name}</span>
                                    <p>
                                        <span className="costs-wrap">
                                            <span className="buy-info">{items.Price.sell_price.$numberDecimal}</span>
                                            <span className="old-price">({items.Price.current_store_price.$numberDecimal})</span>
                                        </span>
                                        <br />
                                        <span className="discount">9% OFF</span>
                                        <span className="h-24"></span>
                                    </p>
                                </div>
                            </div>
                            <AboutSeller id={items.userData[0]._id} />
                        </div>

                    )

                }) : null
            }
            <ItemDetails />


        </>


    )
}

export default ProductPageDetails;