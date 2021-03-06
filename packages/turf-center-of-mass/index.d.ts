/// <reference types="geojson" />

type Feature = GeoJSON.Feature<any>;
type Features = GeoJSON.FeatureCollection<any>;
type Point = GeoJSON.Feature<GeoJSON.Point>;

/**
 * http://turfjs.org/docs/#center
 */
declare function centerOfMass(features: Feature | Features, properties?: any): Point;
declare namespace centerOfMass { }
export = centerOfMass;
