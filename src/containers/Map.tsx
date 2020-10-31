import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import './Map.scss';

type MapComponentP = {
  isMarkerShown?: boolean;
  googleMapURL: string;
  loadingElement: JSX.Element;
  containerElement: JSX.Element;
  mapElement: JSX.Element;

}

// Avoid conflicting with es6 "Map"
export const MapComponent = withScriptjs(
  withGoogleMap(function MapComponent({}: MapComponentP) {
    return (
      <div>
        <GoogleMap defaultZoom={5} defaultCenter={{ lat: 45.5017, lng: -73.5673 }}>
          {/* Markers */}
        </GoogleMap>
      </div>
    );
  })
);
