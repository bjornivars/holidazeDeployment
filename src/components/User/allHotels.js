import React from 'react';
import { Link } from 'react-router-dom';

const AllHotelsCard = ({ imageUrl, establishmentName, id, price, description, maxGuests }) => {
    return (
        <div className=" [ col-2 col-t-3 col-m-5 hotel-card ] ">
            <Link to={`/hotelSpecific/${--id}`}>
                <img className=" [ col-12 col-t-12 col-m-12 hotel-card-img ] " src={imageUrl} alt={establishmentName} />
                <div className=" [ promotion-box-text ] ">
                    <h3 className=" [ promotion-box-text-h3 ] ">{establishmentName}</h3>
                    <p className=" [ promotion-box-text-p ] ">{description}</p>
                    <div className=" [ hotel-card-info ] ">
                        <div className=" [ icon-grey ] ">
                            <i className=" [ fa fa-users hotel-card-guest ] "></i><span className=" [ pl-5 ] ">{maxGuests}</span>
                        </div>
                        <div className=" [  ] ">
                            <span className=" [ hotel-card-price ] ">${price}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default AllHotelsCard;