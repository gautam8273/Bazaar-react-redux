import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import clickStar from '../assests/images/tick.png';



const FilterProductPageView = ({ data }) => {

    // for Header Menu (data) onclick
    // const menuDetails = useSelector(state => state.reducerSearch?.searchItems);
    // console.log("menuDetails===>", menuDetails)
    // for Header Menu (data) onclick

    // for Header Menu (data) onclick
    const filterPanelData = useSelector(state => state.reducerFilterPanel?.filterDetails);
    // console.log("filterPanelData===>", filterPanelData)



    return (
        <>


            <div className="review-abc" style={{ width: '80%', display: 'flex', flexWrap: 'wrap' }}>


                {
                    filterPanelData ? filterPanelData[0].data.map((dataMenu, index) => {
                        return (

                            <div className="review-card-wrap" key={index}>
                                <div className="costume-box" >
                                    <div className="costume-block">

                                        <div className="diamond-tag">
                                            <img src={clickStar} alt="img" />
                                        </div>

                                        <div className="costume-action" >
                                            <span className="wish"><i className="icon-wishlist red-heart" ></i></span>
                                        </div>

                                        <div className="product-pack">
                                            <Link to={`/product-details/${dataMenu._id}`}>
                                                <div className="costumes">
                                                    <img src={dataMenu.default_image} alt="img" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="costume-info my-list">
                                            <div className="product-name">
                                                <strong className="prod-name">{dataMenu.Title}</strong>
                                                <div className="free-ship-wrap">
                                                    <span className="free-ship">{dataMenu.delievery_charge === null ? 'free shipping' : ''}</span>
                                                    <i className="fa fa-flag" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <span className="brand"> {dataMenu.brandData.name}</span>
                                            <p>
                                                <span className="costs-wrap">
                                                    <span className="buy-info">{dataMenu.Price.sell_price.$numberDecimal}</span>
                                                    <span className="old-price">({dataMenu.Price.current_store_price.$numberDecimal})</span>
                                                </span>
                                                <br />
                                                <span className="discount">9% OFF</span>
                                                <span className="h-24"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }

            </div>
        </>
    )
}

export default FilterProductPageView