import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
const options = {
    buttons: {
        backgroundColor: "rgba(30, 30, 36, 0.8)",
        iconColor: "#B43DBD",
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false
    }
};

const HotelClick = ({ imageUrl,
    establishmentName,
    description,
    maxGuests,
    establishmentEmail,
    selfCatering,
}) => {
    return (
        <div>
            <div className=" [ specific ] ">
                <div className=" [ specific-header ] ">
                    <SRLWrapper options={options}>
                        <img className=" [ specific-header-img ] " src={imageUrl} alt={establishmentName} />
                        <br></br>
                        <div>
                            <img className=" [ specific-header-img-tn d-hidden ] " src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" alt="Flamingo Time! " />
                            <img className=" [ specific-header-img-tn d-hidden ] " src="https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Palm Trees are nice" />
                            <img className=" [ specific-header-img-tn d-hidden ] " src="https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="Winter for the chills" />
                        </div>
                    </SRLWrapper>
                </div>
                <div className=" [ specific-details col-8 col-t-10 col-m-11 m-auto ] ">
                    <h1 className=' [ heading text-center ] '>{establishmentName}</h1>
                    <div className=" [ col-10 col-t-12 col-m-12 m-auto d-flex jc-center specific-details-icons ] ">
                        <div className={(selfCatering === "true") ? " [ specific-details-icons-box d-block col-3 col-t-3 col-m-5 ] " : " [ d-none ] "}>
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-coffee ] "></i>
                            </div>
                            <p className=" [ text-center specific-details-icons-box-p ] ">Breakfast included</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 col-t-3 col-m-5 ] ">
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-users ] "></i>
                            </div>
                            <p className=" [ text-center specific-details-icons-box-p ] ">Max {maxGuests} guests</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 col-t-3 col-m-5 ] ">
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-envelope ] "></i>
                            </div>
                            <a className=" [ ] " href={"mailto:" + establishmentEmail}> <p className=" [ text-center specific-details-icons-box-p ] ">{establishmentEmail}</p></a>
                        </div>
                    </div>
                    <div className=" [ col-10 col-t-12 col-m-12 m-auto d-flex jc-between ] ">
                        <div className=" [ placeholder col-7 ] ">
                            <div className=" [ specific-details-description col-12 m-auto ] ">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelClick;