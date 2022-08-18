import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { searchProducts } from "../store/actions/action";
// import clickStar from '../assests/images/tick.png';
import { filterPanelAction } from "../store/actions/action";
import { attributeBycatIdAction } from "../store/actions/action";
import FilterProductPageView from "./FilterProductPageView";




const FilterPanel = () => {


    const dispatch = useDispatch();

    const { slug } = useParams();
    // console.log("slug==>", slug)


    // dynamic filter panel
    const attributeIdData = useSelector(state => state.reducerAttributeBycatId?.dynamicFilterDetails)
    // console.log("attributeIdData===>", attributeIdData);


    // for Filter panel-- left side--// data from productList api
    const filterPanelData = useSelector(state => state.reducerFilterPanel?.filterDetails);
    // console.log("filterPanelData==>", filterPanelData);


    // dyanamic data from  filter
    const [isChecked, setIsChecked] = useState({
        brand: [],
        condition: [],
        delivery: [],
        category: [`${slug}`]

    })


    // dyanmic data-- from side filter
    // const filterData = useSelector(state => state.reducerSearch?.searchItems);
    // console.log("filterData===>", filterData)




    // for Header menu--- data
    // useEffect(() => {

    //     let ele =

    //         searchProducts(dispatch, { category: [slug] },
    //             //for filter dynamic data
    //             setIsChecked({
    //                 brand: [],
    //                 condition: [],
    //                 delivery: [],
    //                 category: [`${slug}`]
    //             }))dispatch
    // }, [slug])


    // for left side Filter panel Data--data from productList api
    useEffect(() => {
        // filterPanelAction(dispatch, isChecked)
        setIsChecked({
            // ...isChecked,
            brand: [],
            condition: [],
            delivery: [],
            category: [slug]
        })
    }, [slug]);


    useEffect(() => {
        filterPanelAction(dispatch, isChecked)
    }, [isChecked])



    let FilterData = filterPanelData ? filterPanelData[0].FilterData : null;
    let filterArray = filterPanelData ? filterPanelData[0].filterArray[0].category[0] : null;
    // console.log("FilterData===>", FilterData);
    // console.log("filterArray====>", filterArray);

    // for filter panel dynamics panel
    useEffect(() => {
        if (FilterData) {
            attributeBycatIdAction(dispatch, {
                FilterData: FilterData,
                categoryId: filterArray
            })
        }

    }, [FilterData, filterArray]);



    // dyanmic data-- from side filter-- show data on Check and uncheck
    // useEffect(() => {
    //     searchProducts(dispatch, isChecked)
    // }, [isChecked]);


    const brandChange = (e) => {
        if (isChecked?.brand.includes(e.target.value) === false) {
            setIsChecked(isChecked => (
                {
                    ...isChecked,
                    brand: [...isChecked.brand, e.target.value]
                }
            ))
        }
        else {
            let copyBrand = [...isChecked?.brand];
            copyBrand.splice(copyBrand.indexOf(e.target.value), 1);
            setIsChecked(isChecked => ({
                ...isChecked,
                brand: copyBrand
            }))
        }
    }
    // console.log("brandChange===>", isChecked);


    const conditionChange = (e) => {
        if (isChecked?.condition.includes(e.target.value) === false) {
            setIsChecked(isChecked => (
                {
                    ...isChecked,
                    condition: [...isChecked.condition, e.target.value]
                }
            ))

        }
        else {
            let copyCondition = [...isChecked?.condition];
            copyCondition.splice(copyCondition.indexOf(e.target.value), 1);
            setIsChecked(pre => ({
                ...pre,
                condition: copyCondition
            }))

        }
    }

    // console.log("conditionChange===>", isChecked);


    const deliveryChange = (e) => {

    }
    // console.log("deliveryChange===>", isChecked);


    return <>

        <div className="plp" style={{ display: 'flex', flexWrap: 'wrap' }}>

            <div className="plp-category"><i className="fa fa-times"></i>
                <div className="category-attr-block cat-box"><button
                    className="accordian-header fal fa-angle-right active">Category</button>
                    <div className="accordian-panel expanded">
                        <div className="category-head">
                            {/* <a href="">Men</a> */}
                            <ul className="sub-cat-head">
                                {
                                    attributeIdData ? attributeIdData.category?.map((items, index) => {
                                        return (
                                            <li key={index} className="sub-cat-act"  >{items.CategoryName}</li>
                                        )
                                    }) : null
                                }
                                {/* <li className="sub-cat-act">T-Shirt</li>
                                <li className="sub-cat-act">Cozy Products For Men</li>
                                <li className="sub-cat-act">Coats &amp; Jackets</li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="brand-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">brand</button>
                    <div className="accordian-panel expanded">
                        <ul>
                            {
                                attributeIdData ? attributeIdData.brand?.map((items, index) => {
                                    return (

                                        <li key={index} ><input checked={isChecked.brand.includes(items._id) ? true : false} className="checkbox" type="checkbox" onChange={brandChange} value={items._id} /><label>{items.name}</label></li>

                                    )
                                }) : null
                            }

                            {/* checked={isChecked.brand.includes(items._id) ? true : false} -- for check and uncheck by change the menu */}

                            <div className="brand-input"><input type="text" placeholder="Search" className="brand-input" /></div>
                            {/* <li><input type="checkbox" /><label>Luke</label></li>
                            <li><input type="checkbox" /><label>bata</label></li>
                            <li><input type="checkbox" /><label>Lgard</label></li>
                            <li><input type="checkbox" /><label>Hood</label></li>
                            <li><input type="checkbox" /><label>Opina</label></li>
                            <li><input type="checkbox" /><label>Trijal Fab</label></li> */}
                        </ul>
                    </div>
                </div>

                <div className="condition-attr-block cat-box"><button
                    className="accordian-header fal fa-angle-right active">condition</button>
                    <div className="accordian-panel expanded">
                        <ul>
                            {
                                attributeIdData ? attributeIdData.condition?.map((items, index) => {
                                    return (
                                        <li key={index} className="sub-cat-act">
                                            <input checked={isChecked.condition.includes(items.name) ? true : false} type="checkbox" className="checkbox" onChange={conditionChange} value={items.name} name={items.name} /><label>{items.name}</label>
                                        </li>
                                    )
                                }) : null
                            }
                            {/* <li><input type="checkbox" /><label>Like new</label></li>
                            <li><input type="checkbox" /><label>New</label></li>
                            <li><input type="checkbox" /><label>Fair</label></li>
                            <li><input type="checkbox" /><label>Good</label></li> */}
                        </ul>
                    </div>
                </div>
                <div className="-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">delivery</button>
                    <div className="accordian-panel expanded"><label className="price-lable">
                        {
                            attributeIdData ? attributeIdData.delivery?.map((items, index) => {
                                return (
                                    <div key={index} className="price-input">
                                        <span><input name="priceOptions"
                                            type="radio" value={items._id} onChange={deliveryChange} /></span>{items.name}
                                    </div>
                                )
                            }) : null
                        }
                        {/* <div className="price-input">Local</div> */}
                    </label></div>
                    {/* <div className="accordian-panel expanded"><label className="price-lable"><span><input name="priceOptions"
                        type="radio" /></span>
                        <div className="price-input">Any</div>
                    </label></div>
                    <div className="accordian-panel expanded"><label className="price-lable"><span><input name="priceOptions"
                        type="radio" /></span>
                        <div className="price-input">Nationwide</div>
                    </label></div> */}
                </div>
                {/* <div className="price-sec"><button className="accordian-header fal fa-angle-right active">Price</button>
                    <div className="accordian-panel expanded">
                        <div aria-disabled="false" className="input-range"><span
                            className="input-range__label input-range__label--min"><span
                                className="input-range__label-container">100</span></span>
                            <div className="input-range__track input-range__track--background">
                                <div className="input-range__track input-range__track--active" style={{ left: '0%', width: '100%', }}></div>
                                <span className="input-range__slider-container" style={{ position: "absolute", left: "0%" }}><span
                                    className="input-range__label input-range__label--value"><span
                                        className="input-range__label-container">100</span></span>
                                    <div aria-valuemax="4500" aria-valuemin="100" aria-valuenow="100" className="input-range__slider"
                                        draggable="false" role="slider" tabIndex="0"></div>
                                </span><span className="input-range__slider-container" style={{ position: "absolute", left: '100%' }}><span
                                    className="input-range__label input-range__label--value"><span
                                        className="input-range__label-container">4500</span></span>
                                    <div aria-valuemax="4500" aria-valuemin="100" aria-valuenow="4500" className="input-range__slider"
                                        draggable="false" role="slider" tabIndex="0"></div>
                                </span>
                            </div><span className="input-range__label input-range__label--max"><span
                                className="input-range__label-container">4500</span></span>
                        </div>
                    </div>
                </div> */}
            </div>



            <FilterProductPageView />



        </div>
    </>
}

export default FilterPanel;