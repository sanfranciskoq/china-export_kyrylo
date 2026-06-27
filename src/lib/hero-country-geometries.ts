import { heroMapCountries } from "@/content/hero-map";
import type { HeroMapCountry } from "@/content/hero-map";
import {
  geometryToPaths,
  type MultiPolygonGeometry,
  type PolygonGeometry,
} from "@/lib/geo";
import countriesGeo from "../../public/geo/countries-low.json";

export type HeroCountryGeometry = {
  country: HeroMapCountry;
  paths: string[];
};

export const heroCountryGeometries: HeroCountryGeometry[] = heroMapCountries.map(
  (country) => {
    const feature = countriesGeo.features.find(
      (entry) => entry.id === country.geoId,
    );

    if (!feature) {
      return { country, paths: [] };
    }

    return {
      country,
      paths: geometryToPaths(
        feature.geometry as PolygonGeometry | MultiPolygonGeometry,
      ),
    };
  },
);
