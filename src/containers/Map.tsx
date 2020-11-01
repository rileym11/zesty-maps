import React, { useEffect, useState } from 'react';
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
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

// TODO: complete functionality (WIP)

// Avoid conflicting with es6 "Map"
export const MapComponent = withScriptjs(
  withGoogleMap(function MapComponent({}: MapComponentP) {
    const [coordinates, setCoordinates] = useState<Coordinates>();

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        function ({ coords: { latitude, longitude } }) {
          setCoordinates({ latitude, longitude });
        },
        () => {},
        { timeout: 10000 }
      );
    }, []);

    return (
      <div>
        <GoogleMap
          defaultZoom={5}
          defaultCenter={{
            lat: coordinates?.latitude || 45.5017,
            lng: coordinates?.longitude || -73.5673,
          }}
        >
          {coordinates && (
            <Marker
              position={
                new google.maps.LatLng(
                  coordinates.latitude,
                  coordinates.longitude
                )
              }
            />
          )}
        </GoogleMap>
      </div>
    );
  })
);
