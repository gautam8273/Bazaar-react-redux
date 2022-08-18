import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import clickStar from '../assests/images/tick.png';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../store/actions/action';



const ViewProduct = ({ data }) => {
    const dispatch = useDispatch();

    const { Title } = useParams();

    useEffect(() => {
        searchProducts(dispatch, { searchValue: Title })
    }, [dispatch])

    // searchProducts(dispatch, { searchValue: Title })



    const productDetails = useSelector(state => state.reducerSearch.searchItems)
    console.log("productDetails===>", productDetails);
    // console.log("==>", productDetails[0].Title)

    return (
        <>



            {
                productDetails ? productDetails.map((items, index) => {
                    return (

                        <div className="costume-box" key={index}>
                            <div className="costume-block">

                                <div className="diamond-tag">
                                    <img src={clickStar} alt="img" />
                                </div>
                                <div className="product-pack" >
                                    <Link to={`/product-details/${items._id}`} className="costumes">
                                        <img src={items.default_image} alt="img" />
                                    </Link>
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
                        </div>

                    )

                }) : null
            }




        </>
    )
}

export default ViewProduct;