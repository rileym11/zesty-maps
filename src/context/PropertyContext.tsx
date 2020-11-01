import { createContext, Dispatch, SetStateAction } from 'react';

// Data types
export type Property = {
  coordinates: number[];
  propertyId: string;
};

export type Statistic = {
  building_area_sqm: number[];
  parcel_area_sqm: number;
  zone_density: number[];
  building_distances_m: number[];
};

// Function args
type FetchPropertiesArgs = {
  latitude: number;
  longitude: number;
  radius: number;
};

// API methods
// TODO: make a fetch wrapper
export const baseApi = 'http://localhost:1235';

export async function fetchPropertyTile(id: string) {
  const res = await fetch(`${baseApi}/display/${id}`);
}

export async function fetchProperties({
  latitude,
  longitude,
  radius,
}: FetchPropertiesArgs): Promise<Property[]> {
  const body = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [longitude, latitude],
    },
    'x-distance': radius,
  };

  const res = await fetch(`${baseApi}/find`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), 
  });

  return res.json();
}

export async function fetchPropertyStatistics(id: string) {
  const res = await fetch(`${baseApi}/statistics/${id}`);
}

// Context
export const PropertyContext = createContext<{
  properties: Property[];
  setProperties: Dispatch<SetStateAction<Property[]>>;
}>({
  properties: [] as Property[],
  setProperties: () => {},
});
