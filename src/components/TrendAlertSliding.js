import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProductCard from '../productCard/ProductCard';
import { getHomePageData } from '../api/api';


const TrendAlertSliding = ({ data }) => {

    const [trendData, setTrendData] = useState();

    // console.log('TrendAlertSliding mounted')
    useEffect(() => {
        const requestPayload = {
            block_name: data.block_name,
            id: data.id,
        }
        // console.log("requestPayload====>", requestPayload)
        getHomePageData(requestPayload).then(res => {
            // console.log("--->", res.data.data);
            setTrendData(res.data.data)
        })
    }, [data])

    // for slider
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="popular-arrival" id="609cd1a28f640238755ca497">
                <div className="container">
                    <div className="arrival-costumes">
                        <div className="arrival-caption">
                            <h2>Trend Alerts</h2>
                            <a className="shop-now" href="/product-listing-page/block?block_name=category-product&amp;id=609cd1a28f640238755ca497">
                                View All
                            </a>
                        </div>
                        <div className="popular-costumes">
                            <Slider {...settings}>
                                {
                                    trendData && trendData.map((trendItems, id) => {
                                        // console.log("trendData===>", trendData)
                                        return (
                                            <ProductCard data={trendItems} key={id} />
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TrendAlertSliding