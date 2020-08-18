import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './../../components/User/navbar';
import Footer from './../../components/User/footer';

import HotelClick from './../../components/User/hotelSpecific';
import { GET_ESTABLISHMENTS } from './../../constants/constants';
import Modal from './Modal';
import EstablishmentMap from './../../components/User/googleMap';
import SimpleReactLightbox from "simple-react-lightbox";

export default function HotelSpecific() {
    let { id } = useParams();
    const [hotelResult, setHotelResult] = useState(undefined);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setHotelResult(result.data[id]);
            })
    }, [id])

    const showModalss = (e) => {
        setOpenModal(true);
    }
    const closeModalss = () => {
        setOpenModal(false);
    }

    return (
        <>
            <SimpleReactLightbox>
                <Navbar />
                <div>
                    {openModal && <Modal
                        establishmentName={hotelResult.establishmentName}
                        maxGuests={hotelResult.maxGuests}
                        price={hotelResult.price}
                        closeModal={closeModalss}
                    />}
                    <div className=' [ mb-5 ] '>

                        <div className=' [ row ] '>
                            <div className=' [ col-md-12 ] '>
                                {
                                    (hotelResult !== undefined) ?
                                        <HotelClick
                                            establishmentName={hotelResult.establishmentName}
                                            imageUrl={hotelResult.imageUrl}
                                            id={hotelResult.id}
                                            price={hotelResult.price}
                                            description={hotelResult.description}
                                            maxGuests={hotelResult.maxGuests}
                                            establishmentEmail={hotelResult.establishmentEmail}
                                            googleLat={hotelResult.googleLat}
                                            googleLong={hotelResult.googleLong}
                                            selfCatering={hotelResult.selfCatering}
                                        /> :
                                        <div className=' [ d-flex justify-content-center col-md-6 ] '>
                                            <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                                        </div>
                                }

                            </div>
                            {/* PLACEHOLDER INFO START */}
                            <div className=" [ placeholder col-8 col-t-10 col-m-11 m-auto ] ">
                                <div className=" [ col-10 col-t-12 col-m-12 m-auto ] ">
                                    <div className=" [ placeholder col-12 ] ">
                                        <div className=" [ col-12 m-auto ] ">
                                            <h3>Facilities</h3>
                                            <div className=" [ placeholder-box ] ">
                                                <ul className=" [ placeholder-box-ul col-3 col-t-12 col-m-12 ] ">
                                                    <li className=" [ placeholder-box-ul-li ] ">400 guest rooms</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Restaurant</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Bar</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Indoor pool</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Parking</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Daily cleaning</li>
                                                </ul>
                                                <ul className=" [ placeholder-box-ul col-3 col-t-12 col-m-12 ] ">
                                                    <li className=" [ placeholder-box-ul-li ] ">Conference rooms</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Gym</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Car rental</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">PC</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Free Wifi</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Fireplace in Lobby</li>
                                                </ul>
                                                <ul className=" [ placeholder-box-ul col-3 col-t-12 col-m-12 ] ">
                                                    <li className=" [ placeholder-box-ul-li ] ">Fridge in every room</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Extra beds (free)</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Private bathroom</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Roomservice</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Sunbeds</li>
                                                    <li className=" [ placeholder-box-ul-li ] ">Smart TV</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> {/* PLACEHOLDER INFO END */}

                            <div className=" [ placeholder col-8 col-t-10 col-m-11 m-auto ] ">
                                <div className=" [ col-10 m-auto ] ">
                                    <h3>Where to find us</h3>
                                    {
                                        (hotelResult !== undefined) ?
                                            <EstablishmentMap
                                                latitude={hotelResult.googleLat}
                                                longitude={hotelResult.googleLong}
                                            />
                                            : <div className=' [ d-flex justify-content-center col-md-6 ] '>
                                                <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                                            </div>
                                    }
                                </div>
                            </div>
                            {/* PLACEHOLDER INFO START */}
                            <div className=" [ placeholder col-8 col-t-10 col-m-11 m-auto ] ">
                                <div className=" [ col-10 col-t-12 col-m-12 m-auto ] ">
                                    <div className=" [ placeholder col-12 ] ">
                                        <div className=" [ placeholder-nearby col-12 col-t-12 col-m-12 m-auto ] ">
                                            <h3>Things nearby</h3>
                                            <div className=" [ col-12 col-t-12 col-m-12 m-auto ] ">
                                                <a href="https://no.tripadvisor.com/Attraction_Review-g190479-d206477-Reviews-Akershus_Castle_and_Fortress_Akershus_Slott_og_Festning-Oslo_Eastern_Norway.html" className=" [ placeholder-nearby-box col-12 col-t-12 col-m-12 ] " target="_blank" rel="noopener noreferrer">
                                                    <div className=" [ placeholder-nearby-box-imgBox col-3 col-t-3 col-m-12 ] ">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OSLO-NO-02_05_ubt.jpeg/500px-OSLO-NO-02_05_ubt.jpeg" alt="nearby" className=" [ placeholder-nearby-box-imgBox-img col-12 col-t-12 col-m-12 m-auto ] " />
                                                    </div>

                                                    <div className=" [ placeholder-nearby-box-textBox col-8 col-t-8 col-m-12 ] ">
                                                        <h4 className=" [ m-0 ] ">
                                                            Akershus Fortress
                                                        </h4>
                                                        <p>1,2 km</p>
                                                        <p>Akershus Fortress (Norwegian: Akershus Festning) or Akershus Castle (Norwegian: Akershus slott) is a medieval castle in the Norwegian capital Oslo that was built to protect and provide a royal residence for the city.</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" [ col-12 col-t-12 col-m-12 m-auto ] ">
                                                <a href="https://no.tripadvisor.com/Attraction_Review-g190479-d206473-Reviews-National_Theater_Nationaltheatret-Oslo_Eastern_Norway.html" className=" [ placeholder-nearby-box col-12 col-t-12 col-m-12 ] " target="_blank" rel="noopener noreferrer">
                                                    <div className=" [ placeholder-nearby-box-imgBox col-3 col-t-3 col-m-12 ] ">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Oslo_Nationaltheater-1.jpg/250px-Oslo_Nationaltheater-1.jpg" alt="nearby" className=" [ placeholder-nearby-box-imgBox-img col-12 col-t-12 col-m-12 m-auto ] " />
                                                    </div>

                                                    <div className=" [ placeholder-nearby-box-textBox col-8 col-t-8 col-m-12 ] ">
                                                        <h4 className=" [ m-0 ] ">
                                                            National Theatre
                                                        </h4>
                                                        <p>1,4 km</p>
                                                        <p>The National Theatre in Oslo (Norwegian: Nationaltheatret) is one of Norway's largest and most prominent venues for performance of dramatic arts.</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" [ col-12 col-t-12 col-m-12 m-auto ] ">
                                                <a href="https://no.tripadvisor.com/Attraction_Review-g190479-d9599227-Reviews-Frogner_Park-Oslo_Eastern_Norway.html" className=" [ placeholder-nearby-box col-12 col-t-12 col-m-12 ] " target="_blank" rel="noopener noreferrer">
                                                    <div className=" [ placeholder-nearby-box-imgBox col-3 col-t-3 col-m-12 ] ">
                                                        <img src="https://ourwaytours.com/wp-content/uploads/Vigeland.jpg" alt="nearby" className=" [ placeholder-nearby-box-imgBox-img col-12 col-t-12 col-m-12 m-auto ] " />
                                                    </div>

                                                    <div className=" [ placeholder-nearby-box-textBox col-8 col-t-8 col-m-12 ] ">
                                                        <h4 className=" [ m-0 ] ">
                                                            Frogner Park
                                                        </h4>
                                                        <p>2,1 km</p>
                                                        <p>Frogner Park contains, in its present centre, the Vigeland installation (Norwegian: Vigelandsanlegget; originally called the Tørtberg installation), a permanent sculpture installation created by Gustav Vigeland between 1924 and 1943.</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" [ col-12 col-t-12 col-m-12 m-auto ] ">
                                                <a href="https://no.tripadvisor.com/Attraction_Review-g190479-d1902077-Reviews-The_Norwegian_National_Opera_Ballet-Oslo_Eastern_Norway.html" className=" [ placeholder-nearby-box col-12 col-t-12 col-m-12 ] " target="_blank" rel="noopener noreferrer">
                                                    <div className=" [ placeholder-nearby-box-imgBox col-3 col-t-3 col-m-12 ] ">
                                                        <img src="https://tellusdmsmedia.newmindmedia.com/wsimgs/Den-Norske-Opera_Ballett_1__c_VisitOSLO_Thomas-Johannessen_8977006.jpg[ProductImage][4D037D0DBEC323D15D8FF16649BD]" alt="nearby" className=" [ placeholder-nearby-box-imgBox-img col-12 col-t-12 col-m-12 m-auto ] " />
                                                    </div>

                                                    <div className=" [ placeholder-nearby-box-textBox col-8 col-t-8 col-m-12 ] ">
                                                        <h4 className=" [ m-0 ] ">
                                                            Oslo Opera House
                                                        </h4>
                                                        <p>800 m</p>
                                                        <p>he Oslo Opera House (Norwegian: Operahuset) is the home of the Norwegian National Opera and Ballet, and the national opera theatre in Norway. The building is situated in the Bjørvika neighbourhood of central Oslo, at the head of the Oslofjord.</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* PLACEHOLDER INFO END */}
                        </div>
                    </div>
                    {
                        (hotelResult !== undefined) ?
                            <div className=" [  col-4 d-flex jc-center m-auto ] ">
                                <button className=" [ btn bookingBtn ] " onClick={showModalss}>Book for ${hotelResult.price} per night</button>
                            </div> : <div className=' [ d-flex justify-content-center col-md-6 ] '>
                                <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                            </div>
                    }
                </div>
                <Footer />
            </SimpleReactLightbox>
        </>
    )
}
