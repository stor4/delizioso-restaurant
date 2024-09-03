import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
  const containerStyle = {
    width: '100%',
    height: '567px'
  }
  
  const center = {
    lat: -3.745,
    lng: -38.523
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyDcP0nvpqHTYLo9VwRGo96EtpIEZw6bnMA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map