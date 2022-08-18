import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { countryStateAction, getUserAddressAction } from '../store/actions/action';
import { addUserAddressAction } from '../store/actions/action';
import { UserAddressAction } from '../store/actions/action';

const ShippingAddress = ({ onClose }) => {

    const dispatch = useDispatch();

    const cancelShippingForm = () => {
        onClose(false)
    }

    const countryAndState = useSelector(state => state.reducerCountryState?.stateCountry);
    // console.log("countryAndState===>", countryAndState)

    const addUserAddress = useSelector(state => state.reducerAddUserAddress?.userAddress);
    // console.log("addUserAddress==>", addUserAddress)

    const getAddress = useSelector(state => state.reducerGetAddressUserCheckOut?.getAddress)
    console.log("getAddress==>", getAddress)

    //country and state api
    useEffect(() => {
        countryStateAction(dispatch)
    }, [dispatch])

    const shippingAdd = (e) => {
        // alert("svksdbk");
        e.preventDefault();
        const regPayload = {


            first_name: e.target.first_name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            postcode: e.target.postcode.value,
            street: e.target.street.value,
            flat_no: e.target.flat_no.value,
            landmark: e.target.landmark.value,
            country: e.target.country.value,
            state: e.target.state.value,
            city: e.target.city.value,
        }
        // console.log("regPayload==>", regPayload);

        addUserAddressAction(dispatch, regPayload); // add user address api
    }

    // get user address


    // for GetProfile--- api
    useEffect(() => {
        let token = localStorage.getItem("logindata")
        const pro = {
            Authorization: "Bearer " + token,
        }
        UserAddressAction(dispatch, pro);


    }, [])

    return (
        <>
            <div className="shipping-itemwrap shipping-remade">
                <div className="shipping-inner shipping-remade">
                    <div className="ship-radio">
                        {/* <input type="radio" className="radio" value="62662e85ef67187f21632c61" checked="" /> */}
                        <div className="radio-circle">
                            <div className="radio-dot"></div>
                        </div>
                    </div>
                    <div className="head-wrap ship-edit" style={{ float: "right" }}><span className="edit-link edit-btn"><i
                        className="fas fa-user-edit"></i><b>EDIT</b></span></div>
                    <div className="desc-txt">
                        <div><span className="ship-add-name">{getAddress[0]?.first_name} </span><br /><span>{getAddress[0]?.phone}</span></div>
                        <div className="address-checkout"><i className="fas fa-map-marker-alt"></i><span className="ship-add">{getAddress[0]?.flat_no},
                        </span>
                            {/* <span className="ship-add">asdf, </span>
                        <span className="ship-add">asdf, </span> */}
                            <span>{getAddress[0]?.postcode},
                            </span><span className="ship-add">{getAddress[0]?.city}, </span><span className="ship-add">{getAddress[0]?.city}</span></div>
                    </div>
                </div>
                <form id="addressForm" style={{ marginTop: "25px" }}
                    onSubmit={shippingAdd}
                >
                    <div className="desc-txt-wrap">
                        <div className="desc-txt edit-address">
                            <div className="edit-wrapper"><label className="edit-label">Name<span className="highlighted">*</span></label><input
                                type="text" placeholder="Name" name="first_name" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Email<span
                                className="highlighted">*</span></label><input type="email" placeholder="Email Address"
                                    name="email" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Mobile Number<span
                                className="highlighted">*</span></label><input type="text" placeholder="Mobile Number"
                                    name="phone" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Flat Number<span
                                className="highlighted">*</span></label><input type="text" maxLength="10"
                                    placeholder="Flat Number" name="flat_no" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Street<span
                                className="highlighted">*</span></label><input type="text" placeholder="Street" maxLength="15"
                                    name="street" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Landmark</label><input type="text"
                                placeholder="Landmark" name="landmark" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Post Code<span
                                className="highlighted">*</span></label><input type="number" minLength="6" maxLength="6"
                                    placeholder="Post Code" name="postcode" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Country<span className="highlighted">*</span></label>
                                <div className="select-state"><select name="country">
                                    <option value="">Please select country</option>
                                    {
                                        countryAndState ? countryAndState.map((items, index) => {
                                            return (
                                                <option key={index} value={items.name}>{items.name}</option>
                                            )
                                        }) : null
                                    }
                                    {/* <option value="5ae8284db37516a75ac0aada">INDIA</option> */}
                                </select></div>
                            </div>
                            <div className="edit-wrapper"><label className="edit-label">City<span className="highlighted">*</span></label><input
                                type="text" placeholder="City" name="city" /></div>
                            <div className="edit-wrapper"><label className="edit-label">State<span className="highlighted">*</span></label>
                                <div className="select-state"><select name="state">
                                    <option value="">Please select state</option>
                                    {
                                        countryAndState ? countryAndState[0].stateData.map((state, index) => {
                                            // console.log("stateData", state)
                                            return (<option key={index} value={state._id}>{state.name}</option>
                                            )
                                        }) : null
                                    }


                                </select></div>
                            </div>
                            <div className="desc-txt edit-address">
                                <div className="btns-wrapping"><button className="complete-purchase" onClick={cancelShippingForm}>Cancel </button>
                                    <button
                                        className="complete-purchase" type="submit">Save</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ShippingAddress