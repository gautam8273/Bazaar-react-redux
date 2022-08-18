import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { headerMenuAction } from '../store/actions/action';


const HeaderMenu = () => {
    const dispatch = useDispatch();

    const headerMenu = useSelector(state => state.reducerHeaderMenu?.headerMenuData);
    // console.log("headerMenu===>", headerMenu)

    // for Seller Form
    const [sellerForm, setSellerForm] = useState(false);

    useEffect(() => {
        headerMenuAction(dispatch)
    }, [dispatch]);

    const sellerFormOpen = () => {
        setSellerForm(true);
    }



    return (
        <>
            <div className='container'>
                <div className='main-menu'>
                    <ul className='menu'>
                        {/* <li className='sublist-menu '>Brands</li> */}
                        {
                            headerMenu ? headerMenu.map((item, index) => {
                                return (

                                    <div key={index}>
                                        <Link to={`/category/${item.slug}/${item._id}`} >
                                            <li className='sublist-menu '>{item.name}</li>
                                        </Link>
                                    </div>

                                )
                            }) : null
                        }
                        <div className="header-sell">
                            <Link to={`/seller-regestration-form`}>
                                <span className=" sell-text" onClick={() => sellerFormOpen()}>Register as a seller</span>
                            </Link>

                        </div>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderMenu;