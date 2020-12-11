import React from 'react'


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
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
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
            </div>
        )
    }
}

export default Geolocate