import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CheckOutCompo from '../components/CheckOutCompo';
import ShippingAddress from '../components/ShippingAddress';

const CheckOut = ({ max }) => {

    let getCart = useSelector(state => state.reducerGetCart?.getCartData);
    // console.log("getCart==>", getCart)


    //shipping Adress from
    const [shippingAddressForm, setShippingAddressForm] = useState(false);

    const shippingAddress = () => {
        setShippingAddressForm(true);
    }

    return (
        <>



            {/* Shipping Address */}
            <div className="checkout-left">
                <div className="head-wrap checkout-wrap"><span className="checkout-headings"> Shipping</span></div>
                <div className="shipping-itemwrap shipping-remade">
                    <div className="shipping-inner shipping-remade">
                        {/* <div className="ship-radio">
                            <input type="radio" className="radio" value="62662e85ef67187f21632c61" checked="" />
                            <div className="radio-circle">
                                <div className="radio-dot"></div>
                            </div>
                        </div> */}

                    </div>


                    {
                        !shippingAddressForm
                            ?

                            <button className="shop-now address-btn" onClick={shippingAddress} >
                                Add new address
                            </button>
                            : null

                    }
                    {shippingAddressForm && <ShippingAddress onClose={setShippingAddressForm} />}

                </div>
            </div>

            {/* CheckOut */}
            <div className="checkout-right">
                <div className="summary-section">
                    <div>
                        <h4 className="summary-title">order summary</h4>
                        {getCart
                            ? getCart.map((items, index) => {
                                return <CheckOutCompo checkout={items} index={index} />;
                            })
                            : null}
                    </div>
                </div>
            </div>
        </>
    )
}


export default CheckOut