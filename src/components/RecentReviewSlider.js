import React, { useState, useEffect } from 'react'
import ReviewCard from '../productCard/ReviewCard';
import { getHomePageData } from '../api/api';
import Slider from 'react-slick';

const RecentReviewSlider = ({ data }) => {
    const [reviewData, setReviewData] = useState();

    useEffect(() => {
        const requestPayload = {
            block_name: data.block_name,
            id: data.id
        }

        getHomePageData(requestPayload).then(res => {
            setReviewData(res.data.data);
        })
    }, [data])




    // for slider
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };


    return (
        <>

            <div className="popular-arrival slider-blocks" id="60a4f53d2be7963a01663802">
                <div className="container">
                    <div className="arrival-costumes">
                        <div className="arrival-caption">
                            <h2>Recent reviews from buyers and sellers</h2>
                        </div>
                        <div className="" style={{ width: '200%' }}>

                            <div>
                                <Slider {...settings}>
                                    {
                                        reviewData && reviewData.map((reviewItems, id) => {
                                            // console.log("luxeData===>", luxeData)
                                            return (
                                                <ReviewCard data={reviewItems} key={id} />
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentReviewSlider