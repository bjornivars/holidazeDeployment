import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = ({ establishmentName, price, id }) => {
    return (
        <div>
            <div className=" [ header-search-dropdown-ul ] ">
                <Link to={`/hotelSpecific/${--id}`} className=" [ header-search-dropdown-ul-link ] ">
                    <div className=" [ d-flex  ] ">
                        <i className=" [ fa fa-h-square ] "></i>
                        <div className=" [ header-search-dropdown-ul-text ] ">
                            <h3 className=" [ m-0 searchResult ] ">{establishmentName}</h3>
                            <p className=" [ m-0 orange ] ">${price} per night</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomeHeader;