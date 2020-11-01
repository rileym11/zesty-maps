import {
  fetchPropertyStatistics,
  fetchPropertyTile,
  Statistic,
} from 'context/PropertyContext';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './PropertyDetails.scss';

export default function PropertyDetails() {
  const [statistics, setStatistics] = useState<Statistic>();
  const [tileImage, setTileImage] = useState<any>();
  const [isFetching, setIsFetching] = useState<any>();

  const { propertyId, distance } = useParams<{
    propertyId: string;
    distance: string;
  }>();

  const getData = async () => {
    setIsFetching(true);

    const [statistics, tileImage] = await Promise.all([
      fetchPropertyStatistics({ propertyId, distance: parseInt(distance) }),
      fetchPropertyTile(propertyId),
    ]);

    setStatistics(statistics);
    setTileImage(tileImage);

    setIsFetching(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fluid>
      {/* TODO: add a loading componenent */}
      {isFetching && 'Loading...'}
      {!isFetching && (
        <div className="z-details-view">
          <div className="image-contain">
            <img src={tileImage} alt="tile image" />
          </div>
          {/* TODO: componentize these */}
          <div className="details">
            {statistics?.building_area_sqm &&
              statistics?.building_area_sqm.length > 0 && (
                <div>
                  <h2>Building Area (Sq Metres)</h2>
                  {statistics?.building_area_sqm.map((a) => (
                    <React.Fragment key={a}>
                      <span>{a.toFixed(5)}</span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            {statistics?.building_distances_m &&
              statistics?.building_distances_m.length > 0 && (
                <div>
                  <h2>Building Distance (Metres)</h2>
                  {statistics?.building_distances_m.map((d) => (
                    <React.Fragment key={d}>
                      <span>{d.toFixed(5)}</span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            {statistics?.parcel_area_sqm && (
              <div>
                <h2>Parcel Area (Sq Metres)</h2>
                {statistics?.parcel_area_sqm.toFixed(5)}
              </div>
            )}
            <div>
              <h2>Zone Density</h2>
              {statistics?.zone_density.map((d) => (
                <React.Fragment key={d}>
                  <span>{d.toFixed(5)}</span>
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
