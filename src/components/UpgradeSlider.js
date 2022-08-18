import React, { useState, useEffect } from 'react'
import ProductCard from '../productCard/ProductCard';
import { getHomePageData } from '../api/api';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const UpgradeSlider = ({ data }) => {
    const [upgradeData, setUpgradeData] = useState();

    useEffect(() => {
        const requestPayload = {
            block_name: data.block_name,
            id: data.id,
        }

        getHomePageData(requestPayload).then(res => {
            // console.log(res.data.data)
            setUpgradeData(res.data.data)
        })
    }, [data])



    // for slider
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

    };
    // console.log(upgradeData)
    return (
        <>
            <div className="popular-arrival" id="609cd1a28f640238755ca497">
                <div className="container">
                    <div className="arrival-costumes">
                        <div className="arrival-caption">
                            <h2>Upgrade your workspace</h2>
                            <Link to={`/product-listing-pages/${data.id}`}
                            >  View All
                            </Link>
                        </div>
                        <div className="popular-costumes">
                            <Slider {...settings}>
                                {
                                    upgradeData && upgradeData.map((item, id) => {
                                        // console.log("sectionData===>", sectionData)
                                        return (
                                            <ProductCard data={item} key={id} />
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

export default UpgradeSlider;