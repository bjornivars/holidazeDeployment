import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './../../components/User/navbar';
import Footer from './../../components/User/footer';

import { GET_ESTABLISHMENTS } from './../../constants/constants';
import AllHotelsCard from './../../components/User/allHotels';

export default function AllHotels() {
    const [allEstablishments, setAllEstablishments] = useState(undefined);
    const [isSearched, setIsSearched] = useState(false);
    const [searchReturned, setSearchReturned] = useState([]);

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setAllEstablishments(result.data);
            })
    }, [])

    const handleFiltering = (input) => {
        setIsSearched(true)
        let setFilteredSearch = allEstablishments.filter((value) => {
            return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setSearchReturned(setFilteredSearch);
    }

    return (
        <>
            <Navbar />
            <div className=" [ container ] ">
                <h1 className=" [ text-center ] ">All hotels</h1>
                <div className=" [ header-search col-6 col-t-10 col-m-11 m-auto allHotels ] ">
                    {allEstablishments !== undefined ? (
                        <input
                            autoComplete="off"
                            className=" [ header-search-input input-padding col-10 col-t-10 borderRound ] "
                            type="search"
                            name="search"
                            placeholder="E.g Sunset"
                            onChange={handleFiltering}
                        />
                    ) : (
                            <input
                                className=" [ header-search-input input-padding col-10 col-t-10 borderRound ] "
                                type="search"
                                placeholder="Waiting for data..."
                            />
                        )}
                </div>
                <div className=" [ col-10 m-auto d-flex jc-between flex-wrap hotel ] ">
                    {
                        (!isSearched) ?
                            <>
                                {
                                    (allEstablishments !== undefined) ?
                                        allEstablishments.map((value, index) => {
                                            return <AllHotelsCard key={index}
                                                establishmentName={value.establishmentName}
                                                price={value.price}
                                                id={value.id}
                                                imageUrl={value.imageUrl}
                                                description={value.description}
                                                maxGuests={value.maxGuests}
                                            />
                                        }) :
                                        <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                            <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                                        </div>
                                }
                            </> : <> {
                                (searchReturned !== undefined) ?
                                    searchReturned.map((value, index) => {
                                        return <AllHotelsCard key={index}
                                            establishmentName={value.establishmentName}
                                            price={value.price}
                                            id={value.id}
                                            imageUrl={value.imageUrl}
                                            description={value.description}
                                            maxGuests={value.maxGuests}
                                        />
                                    }) :
                                    <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                        <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                                    </div>
                            }
                            </>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}