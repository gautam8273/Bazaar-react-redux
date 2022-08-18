import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { aboutSellerAction } from '../store/actions/action';


const AboutSeller = (props) => {
    // const id = props.id;
    // console.log("id===>", id)
    const dispatch = useDispatch();

    useEffect(() => {
        aboutSellerAction(dispatch, { sellerId: props.id })
    }, [dispatch])

    const sellerDetails = useSelector(state => state.reducerAboutSeller.sellerDetails)
    // console.log("sellerDetails===>", sellerDetails)

    return (
        <>
            <h4>About The Seller</h4>

            <div className='costumes'>
                <img src={sellerDetails && sellerDetails.data[0].sellerData[0].sellerImage} />
            </div>
            <p>Seller Name: {sellerDetails && sellerDetails.data[0].sellerData[0].sellerName}</p>
            <p>Followers: {sellerDetails && sellerDetails.data[0].sellerData[0].followers}</p>
            <p>Following: {sellerDetails && sellerDetails.data[0].sellerData[0].following}</p>
            <p>Rating: {sellerDetails && sellerDetails.data[0].avgRating[0].count}</p>
            <p>Review: {sellerDetails && sellerDetails.data[0].reviews[0].count}</p>

        </>
    )
}

export default AboutSeller;