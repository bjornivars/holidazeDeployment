import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function EstablishmentMap({ google, name, latitude, longitude }) {
  return (
    <div className=" [ col-7 map ] ">
      <Map
        google={google}
        zoom={14}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
      >
        <Marker
          name={'Current location'} />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnQ3VT1GsCOkeL2LrAu33LjpqrTgJyYfY",
})(EstablishmentMap)
