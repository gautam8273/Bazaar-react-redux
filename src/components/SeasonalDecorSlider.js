import React, { useState, useEffect } from 'react'
import { getHomePageData } from '../api/api';
import ProductCard from '../productCard/ProductCard'
import Slider from 'react-slick';

const SeasonalDecorSlider = ({ data }) => {
    const [decorData, setDecorData] = useState();

    useEffect(() => {
        const requestPayload = {
            block_name: data.block_name,
            id: data.id
        }

        getHomePageData(requestPayload).then(res => {
            setDecorData(res.data.data)
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
            <div className="popular-arrival" id="609cd1a28f640238755ca497">
                <div className="container">
                    <div className="arrival-costumes">
                        <div className="arrival-caption">
                            <h2>Seasonal Decor</h2>
                            <a className="shop-now" href="/product-listing-page/block?block_name=category-product&amp;id=609cd1a28f640238755ca497">
                                View All
                            </a>
                        </div>
                        <div className="popular-costumes">
                            <Slider {...settings}>
                                {
                                    decorData && decorData.map((decorItems, id) => {
                                        return (
                                            <ProductCard data={decorItems} key={id} />
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

export default SeasonalDecorSlider