import React from 'react';
import {GoogleMap, withGoogleMap} from 'react-google-maps';

const Map = withGoogleMap((props) => 
     <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} defaultLinks={true}></GoogleMap>
)

export default (props) =>{
    return <Map {...props} containerElement={<div style={{ height: '100%' }} />} mapElement={<div style={{ height: '100%' }}/>}/>
}


