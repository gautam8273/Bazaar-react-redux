
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getBrands } from '../api/api';
import { getBrandsAction } from '../store/actions/action';
import Slider from "react-slick";


const BrandSlider = () => {
    const dispatch = useDispatch();
    let brandName = useSelector(state => state.reducerBrands.brands.data);
    // console.log("brandName====>", brandName)

    useEffect(() => {
        dispatch(getBrandsAction)
    }, [dispatch])


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
            <div className="trends">
                <div className="container">
                    <div className="trends-caption">
                        <h2>Shop brands you know and love</h2>
                        <h3>Greate stuff New and used items added every day</h3>
                    </div>
                    <div className="trends-wrap">
                        <div className="trends-list">
                            <Slider {...settings}>
                                {
                                    brandName ? brandName.map((brandCat, id) => {
                                        return (
                                            <div className="trend-gallery" key={id}>

                                                <a className="trend-img" href="/product-listing-page/Oppo?tagId=609137699ffe051facbda2b7">
                                                    <img src={brandCat.brandlogo} alt="trend-img" />
                                                </a>
                                                <strong>{brandCat.meta_title}</strong>
                                            </div>)
                                    }) : null
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandSlider