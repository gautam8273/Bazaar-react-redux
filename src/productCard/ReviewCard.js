import React from 'react';
import { Link } from 'react-router-dom';
import testi from '../assests/images/testi.png';


const ReviewCard = ({ data }) => {
    return (
        <>
            <div className="review-card-wrap">
                <div className="review-card">
                    <Link className="" to="/"></Link>
                    <Link className="prof-img" to="/">
                        <span>
                            <img src={data.image} alt="Customer man" />
                        </span>
                        <span className="prof-name">{data.name}</span>
                    </Link>
                    <Link className="review-content" to="/">{data.review_comment}</Link>
                    <div className="test-ico">
                        <img src={testi} alt="" />
                    </div>
                    <ul className="ratings" >
                        <Link className="fill" to="/">
                            <i className="fas fa- star" >{data.rating}</i>

                        </Link>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default ReviewCard


