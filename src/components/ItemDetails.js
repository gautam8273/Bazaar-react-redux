import React from 'react'
import { useSelector } from 'react-redux';

const ItemDetails = () => {

    const productPageDetails = useSelector(state => state.reducerProductPageDetails.productPageDetails);
    // console.log("productPageDetails===>", productPageDetails)

    return (
        <>
            {
                productPageDetails ? productPageDetails.map((items, index) => {
                    return (
                        <div key={index}>
                            <h4>Item Details </h4>

                            {/* Condition */}
                            {
                                (items.Condition ? <h6>Condition : {items.Condition}</h6> : null)
                            }

                            {/* For Shipping */}
                            <h6>  Shipping :
                                {
                                    items.shippingCost ? <span>{items.shippingCost}</span> : <span>Free</span>
                                }
                            </h6>


                            {/* for attributes */}
                            {
                                items.Attrs.length > 0 ? items.Attrs.map((attr, index) => {
                                    return (

                                        <div key={index}>
                                            <h6>{attr.name} : {attr.value}</h6>

                                        </div>

                                    )
                                }) : null
                            }


                            {/* for Brand */}
                            {
                                (items.brandData ? <h6>Brand : {items.brandData[0].name}</h6> : null)
                            }



                            {/* For Category */}
                            <h6>
                                {
                                    (items.categoryData ? <span>Category :{items.categoryData[0].name}</span> : null)

                                }

                                {
                                    (items.subcategoryData ? <span> &nbsp;{items.subcategoryData[0].description}</span> : null)
                                }
                            </h6>


                            {/* For Posting  */}
                            {
                                (items.updatedAt ? <h6>Posting: <span> &nbsp;{items.updatedAt.split('T')[0]}</span> </h6> : null)
                            }


                            {/* Description */}
                            <h6>Description : </h6>
                            <div
                                dangerouslySetInnerHTML={{ __html: items.Description }}
                            />



                        </div>
                    )
                }) : null
            }

        </>
    )
}

export default ItemDetails;