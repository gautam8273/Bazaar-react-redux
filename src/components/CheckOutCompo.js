import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeCartQuantityAction } from '../store/actions/action';
import { getCartDetailsAction } from '../store/actions/action';

const CheckOutCompo = (props, { max }) => {

    const dispatch = useDispatch();

    let getCart = useSelector(state => state.reducerGetCart?.getCartData);
    // console.log("getCart==>", getCart)



    let changeCheckOut = useSelector(state => state.reducerchangeCartQuantity?.changeCartQuantity)
    // console.log("changeCheckOut==>", changeCheckOut)


    let items = props.checkout
    // console.log("items==>", items);

    let index = props.index

    let quantity = getCart[index]?.Quantity;
    // console.log("quantity", quantity)

    useEffect(() => {

    }, [getCart])


    const [qty, setQty] = useState(quantity);

    // console.log("qty==>", qty)

    // for Price
    let sum = 0;
    getCart.forEach((element) => {
        sum =
            sum +
            parseInt(element.productData[0]?.Price.sell_price.$numberDecimal) *
            element.Quantity;
    });

    useEffect(() => {
        getCartDetailsAction(dispatch)
    }, [dispatch, changeCheckOut?.leftQuantity])



    // Increase the product
    const incProduct = (id) => {
        let x = qty;
        // console.log("id===>", id);
        if (qty >= max) {
            setQty(max);
        } else {
            setQty(qty + 1);
        }

        let reqPayload = {
            cartId: id,
            quantity: ++x
        }
        changeCartQuantityAction(dispatch, reqPayload)
    }

    // Decrease the product
    const decProduct = (id) => {
        // console.log("id==>", id)
        let x = qty;
        if (qty <= 1) {
            setQty(0);
        } else {
            setQty(qty - 1);
        }

        let reqPayload = {
            cartId: id,
            quantity: --x
        }

        changeCartQuantityAction(dispatch, reqPayload)

    }

    const changeQuantity = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= max) {
            setQty(value);
        }
    };


    return (
        <>
            <div key={index}>
                <div className="checkout-cardwrap">
                    <div className="">
                        <div className="cartmenu cart-itemlist cart-list-item">
                            <div className="cart-product">
                                <figure>
                                    <img src={items?.productData[0].default_image} alt="product" />
                                </figure>
                            </div>
                            <div
                                className="cart-product-text"
                                style={{
                                    display: "flex",
                                    flexdirection: "column",
                                    width: "80%",
                                }}
                            >
                                <div className="cart-base" style={{ display: "flex" }}>
                                    <div className="cart-des">
                                        <span className="brandName">{items?.BrandData[0].name}</span>
                                        <a href="/product/Electronics/62163754baf8a9199a781a62/?cat=electronics">
                                            <span className="product-name">Dress</span>
                                        </a>
                                        <span className="price">
                                            <span>
                                                ₹{items?.productData[0]?.Price.sell_price.$numberDecimal}
                                            </span>
                                            <span className="old-price">
                                                ₹
                                                {
                                                    items?.productData[0]?.Price.current_store_price
                                                        .$numberDecimal
                                                }
                                            </span>
                                        </span>
                                    </div>
                                    <div className="delete-cart-product" style={{ width: "20%" }}>
                                        <div className="qty-input">
                                            <button
                                                className="qty-decrement qty-decrement-active"
                                                type="button"
                                                onClick={() =>
                                                    decProduct(
                                                        items?._id
                                                        // items.productData[0]?.Price.sell_price
                                                        //   .$numberDecimal
                                                    )
                                                }
                                            >
                                                <i className="fal fa-minus"></i>
                                            </button>
                                            <input id="quantity"
                                                value={qty}
                                                // defaultValue={qty}
                                                onChange={changeQuantity}
                                            />
                                            <button
                                                className="qty-increment"
                                                type="button"
                                                onClick={() =>
                                                    incProduct(
                                                        items?._id
                                                        // items.productData[0]?.Price.sell_price
                                                        //   .$numberDecimal
                                                    )
                                                }
                                            >
                                                <i className="fal fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-total">
                    <div>
                        <span>Total Amount</span>
                        <span>₹{sum}</span>
                    </div>
                    <div>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div>
                        <span>Final Amount</span>
                        <span>₹{sum}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutCompo