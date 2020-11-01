import React from 'react';
import { Table } from 'react-bootstrap';
import { Property, PropertyContext } from 'context/PropertyContext';
import { Link } from 'react-router-dom';

type PropertyTableP = {
  distance: number;
}

export function PropertyTable({ distance }: PropertyTableP) {
  return (
    <PropertyContext.Consumer>
      {({ properties }) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 &&
              (properties as Property[]).map((p, i) => {
                const [lat, lng] = p.coordinates;

                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{lat}</td>
                    <td>{lng}</td>
                    <td>
                      <Link to={`/property/${p.propertyId}/${distance}`}>Details</Link>
                    </td>
                  </tr>
                );
              })}
            {properties.length === 0 && (
              <tr>
                <td colSpan={4}>No results</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </PropertyContext.Consumer>
  );
}
