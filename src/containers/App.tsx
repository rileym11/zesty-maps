import { withLayout } from 'components/Layout';
import { Property, PropertyContext } from 'context/PropertyContext';
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      <Switch>
        <Route exact path="/">
          SEARCH
        </Route>
        <Route exact path="/map">
          MAP
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </PropertyContext.Provider>
  );
}

export const AppWithLayout = withLayout(App);
