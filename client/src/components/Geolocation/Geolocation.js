import React from 'react'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API

class Geolocate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this)
    }

    getLocation() {
        console.log("click working")
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browswer")
        }
    }

    getCoordinates(position) {
        console.log(position)
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
             alert("User denied the request for Geolocation.")
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

    render() {
        return (
            <div className="Geo">
                <h2>Geolocation Example</h2>

                <button onClick={this.getLocation}>Get Coordinates</button>
                <h4>HTML5 Coordinates</h4>
                <ul>
                    <li>Latitude: {this.state.latitude} </li>
                    <li>Longitude: {this.state.longitude} </li>
                </ul>
                <h4> Google Maps Reverse Geocoding</h4>
                <p>Address: {this.state.userAddress}</p>
                {
                    this.state.latitude && this.state.longitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude}${this.state.longitude}&zoom=14&size=400x300&sensor=false&key=${GOOGLE_API_KEY}`} alt="google-maps"/>
                    : 
                    null
                }
            </div>
        )
    }
}

export default Geolocate