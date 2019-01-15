import React, { Component } from 'react';
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
import { FormGroup, Label,Input ,Button } from 'reactstrap';

// import local components Filter and ForkMe
import { auth , database} from '../../fire';

import {  Circle,
    CircleMarker,
    Map,
    Polygon,
    Polyline,
    Popup,
    Rectangle,
    Marker,
  TileLayer,FeatureGroup} from 'react-leaflet';

  





class TablighComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lat: 36.849101999999995,
        lng: 10.1815426,
    zoom: 15,
    hasLocation: false,
    animate: true,
    description :'',
    type :''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
          console.log('poiton is' + JSON.stringify(position));
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude,
        hasLocation:false});
      },
      error => console.log(error)
    );
  }
  componentDidUpdate(prevProps, prevState) {
   
  }

  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
   
  }

  handleClick = () => {
    const map = this.mapRef.current
    alert("balstek")
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }


  toggleAnimate = () => {
    this.setState({
      animate: !this.state.animate,
    })
}


  //_____________________________________//
  handleChange(event) {
    this.setState({value: event.target.value});
  }

addTabligh = (e) =>
{
  alert("mrigla")
  let { description} = this.state ;
  e.preventDefault();

  var reclamationData = {
    lat: 36.849101999999995,
    lng: 10.1815426,
    type :"Moualhdha enti5abyea",
    description : description,
    location : 'Tunis,',
    date : new Date().getTime()

};

console.log('the user offer ' + JSON.stringify(reclamationData));

//generate new post reference key
var offerRefKey = database.ref().child('reclamations').push().key;
//sets the postData to the post child with the postRefKey
database.ref('reclamations/' + offerRefKey).set(reclamationData);
//sets the postData to the user-posts child with the currentUserId & the postRefKey
//database.ref('/user-reclamations/' + auth.currentUser.uid + '/' + offerRefKey).set( offerData);
}


  render() {
    const { subwayLinesFilter } = this.state;
    const position = [this.state.lat, this.state.lng]
    console.log('lat long ' + JSON.stringify(this.props))
    const marker = this.state.hasLocation ? (
        <Marker position={this.state.latlng}>
          <Popup>You are here</Popup>
        </Marker>
  ) : null
    return (
<div>

      <form onSubmit={this.addTabligh}>
     

     <h3>Clicki Ala Blassa !</h3>

    <div className="row center">
    <Map ref={m => { this.leafletMap = m; }} center={position} zoom={this.state.zoom}
        animate={this.state.animate}>
         
        <CircleMarker center={[36.849101999999995, 10.1815426]} color="red" radius={20}>
          <Popup>Enti Win</Popup>
        </CircleMarker>
      
        <TileLayer
          attribution='Reclamai Map Observer'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         
</Map>
    

<select className="form-control form-control-sm" value={this.state.type}>
  <option>Moualhdha enti5abyea</option>
  <option>Chirae asouat</option>
</select>
    
    </div>

     <div className="form-group">
    <label for="exampleFormControlTextarea1">Description mte3ek !</label>
    <textarea  onChange={this.handleChange} value={this.state.description} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
     
     
      <button type="submit" className="btn btn-primary" style={{backgroundColor: "#214574" ,border: "none"}}>Submit</button>
    </form>




  <div>
     

</div>
</div>
    );
  }
}

export default TablighComponent;