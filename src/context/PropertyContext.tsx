import { createContext, Dispatch, SetStateAction } from 'react';

export type Property = {
  coordinates: number[];
  propertyId: string;
};

export type Statistic = {
  building_area_sqm: number[];
  parcel_area_sqm: number;
  zone_density: number[];
  building_distances_m: number[];
}

export const baseApi = 'http://localhost:1235'

export async function fetchPropertyTile(id: string) {
  const res = await fetch(`${baseApi}/display/${id}`)
}

export async function fetchProperties() {
  const res = await fetch(`${baseApi}/find`)
}

export async function fetchPropertyStatistics(id: string) {
  const res = await fetch(`${baseApi}/statistics/${id}`)
}

export const PropertyContext = createContext<{
  properties: Property[];
  setProperties: Dispatch<SetStateAction<Property[]>>;
}>({
  properties: [] as Property[],
  setProperties: () => {},
});
