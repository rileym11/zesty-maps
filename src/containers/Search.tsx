import React, { Component, FormEvent } from 'react';
import {
  fetchProperties,
  Property,
  PropertyContext,
} from 'context/PropertyContext';
import { Button, Form } from 'react-bootstrap';
import './Search.scss';
import { PropertyTable } from 'components/PropertyTable';

export class Search extends Component {
  // Needs to be a class componenet so we can consume the context via the contextType property
  static contextType = PropertyContext;

  state = {
    longitude: '',
    latitude: '',
    radius: '',
  };

  handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { longitude, latitude, radius } = this.state;
    const { setProperties } = this.context;

    e.preventDefault();

    const properties = await fetchProperties({
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude),
      // Assuming the radius needs to be an int
      radius: parseInt(radius),
    });

    // The instructions say to list the results of the search including the image
    // but the image is not returned from the /find endpoint and I'm unsure if it's by
    // mistake. As a result I've decided to not include the images in this view...
    // I could loop over every result and fetch each individual image although
    // that does not seem ideal. In my opinion, a better way would be for the endpoint to
    // return the images or image urls alongside the rest of the data...

    setProperties(properties);
  };

  render() {
    const { longitude, latitude, radius } = this.state;

    return (
      <div>
        <Form className="z-search-form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="longitude">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              name="longitude"
              value={longitude}
              onChange={this.handleChange}
              type="number"
              placeholder="Longitude"
            />
          </Form.Group>

          <Form.Group controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              name="latitude"
              type="number"
              value={latitude}
              onChange={this.handleChange}
              placeholder="Latitude"
            />
          </Form.Group>

          <Form.Group controlId="radius">
            <Form.Label>Search Radius</Form.Label>
            <Form.Control
              name="radius"
              type="number"
              value={radius}
              onChange={this.handleChange}
              placeholder="Default 10000"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <hr />
        <PropertyTable />
      </div>
    );
  }
}
