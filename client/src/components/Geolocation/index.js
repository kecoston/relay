import React, { useEffect, useState } from 'react';
const GOOGLE_API_KEY = "AIzaSyBbDsRn9kjkZyKD1FIaMfzKVz-4GPHuHro"

function Geolocate({
    longitude,
    latitude
}) {

    const [userAddress, setAddress] = useState("");
   
    useEffect(() => {
        if(!latitude && longitude) return;
        reverseGeocodeCoordinates(latitude, longitude)
        // handleLocationError
    }, [latitude, longitude]);


   function reverseGeocodeCoordinates(longitude, latitude) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${GOOGLE_API_KEY}`)
        .then(response => response.json())
        .then(data => setAddress({
            userAddress: data.results[0].formatted_address
        }))

        .catch(error => console.log("waiting on coordinates"))
        
    }

    function handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
             alert("User denied the request for Geolocation, make sure your location is allowed in browser.")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
          }
    }



        return (
            <div className="Geo">
                        <h4>RELAY LOCATION</h4>

                 <p>Your Coordinates</p>
             
                     <p>Latitude: {latitude} </p>
                     <p>Longitude: {longitude} </p>
            
               {
                    latitude && longitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`} alt="google-maps"/>
                    : 
                    null
                }
            </div>


          
        )
    
}

export default Geolocate