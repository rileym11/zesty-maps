import { withLayout } from 'components/Layout';
import { Property, PropertyContext } from 'context/PropertyContext';
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MapComponent } from './Map';
import { Search } from './Search';

export function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        </Route>
        <Route exact path="/map">
          <MapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div id="map" />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </PropertyContext.Provider>
  );
}

export const AppWithLayout = withLayout(App);
