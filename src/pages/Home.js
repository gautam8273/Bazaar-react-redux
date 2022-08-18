import React, { useEffect } from 'react'
import BrandSlider from '../components/BrandSlider';
import Header from '../components/Header';
import SellingProductsSlider from '../components/SellingProductsSlider';
import TrendAlertSliding from '../components/TrendAlertSliding';
import SeasonalDecorSlider from '../components/SeasonalDecorSlider';
import { useSelector, useDispatch } from 'react-redux';
import { SellingProductsAction } from '../store/actions/action';
import UpgradeSlider from '../components/UpgradeSlider';
import KitchenSlider from '../components/KitchenSlider';
import ActivewearSlider from '../components/ActivewearSlider';
import CozyHomeSlider from '../components/CozyHomeSlider';
import LuxeSlider from '../components/LuxeSlider';
import RecentReviewSlider from '../components/RecentReviewSlider';






const Home = () => {
    const dispatch = useDispatch();
    const sellingPoductName = useSelector(state => state.reducerSelling.sellingProducts);
    // console.log('sellingPoductName====>', sellingPoductName);



    useEffect(() => {
        dispatch(SellingProductsAction)
    }, [dispatch])



    const homePageSection = (currItem, id) => {
        // console.log("===>", currItem)
        switch (currItem.name?.toLowerCase()) {
            case "see what's selling":
                return (
                    < SellingProductsSlider data={currItem} key={id} />
                )


            case "trend alerts":
                return (
                    < TrendAlertSliding data={currItem} key={id} />
                )

            case "seasonal decor":
                // console.log(currItem)
                return (
                    < SeasonalDecorSlider data={currItem} key={id} />
                )

            case "upgrade your workspace":
                // console.log(currItem)
                return (
                    < UpgradeSlider data={currItem} key={id} />
                )

            case "kitchen & dining":
                // console.log(currItem)
                return (
                    < KitchenSlider data={currItem} key={id} />
                )

            case "activewear":
                // console.log(currItem)
                return (
                    <ActivewearSlider data={currItem} key={id} />
                )


            case "cozy at home":
                // console.log(currItem)
                return (
                    <CozyHomeSlider data={currItem} key={id} />
                )

            case "luxe connoisseur":
                // console.log(currItem)
                return (
                    <LuxeSlider data={currItem} key={id} />
                )

            case "recent reviews from buyers and sellers":
                // console.log(currItem)
                return (
                    <RecentReviewSlider data={currItem} key={id} />
                )

            default: return;
        }

    }
    // console.log(sellingPoductName)
    return (
        <>
            {/* <Header /> */}
            <BrandSlider />

            {/* for Home Page */}
            {
                sellingPoductName ? sellingPoductName.map((currItem, id) =>

                    homePageSection(currItem, id)

                ) : null
            }

            {/* for Home Page */}





        </>

    )
}

export default Home