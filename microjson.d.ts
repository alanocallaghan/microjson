/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The root object of a MicroJSON file
 */
export type MicroJSON =
  | MicroFeature
  | MicroFeatureCollection
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon
  | GeometryCollection
  | null;
export type Bbox = [number, number, number, number, ...number[]] | null;
export type Type = "Feature";
/**
 * The geometry of the
 *                                    feature
 */
export type Geometry =
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon
  | GeometryCollection
  | null;
export type Bbox1 = [number, number, number, number, ...number[]] | null;
export type Type1 = "Point";
/**
 * @minItems 2
 * @maxItems 3
 */
export type Coordinates = [number, number] | [number, number, number];
export type Bbox2 = [number, number, number, number, ...number[]] | null;
export type Type2 = "MultiPoint";
export type Coordinates1 = [number, number] | [number, number, number][];
export type Bbox3 = [number, number, number, number, ...number[]] | null;
export type Type3 = "LineString";
export type Coordinates2 = [number, number] | [number, number, number][];
export type Bbox4 = [number, number, number, number, ...number[]] | null;
export type Type4 = "MultiLineString";
export type Coordinates3 = [number, number] | [number, number, number][][];
export type Bbox5 = [number, number, number, number, ...number[]] | null;
export type Type5 = "Polygon";
export type Coordinates4 = [number, number] | [number, number, number][][];
export type Bbox6 = [number, number, number, number, ...number[]] | null;
export type Type6 = "MultiPolygon";
export type Coordinates5 = [number, number] | [number, number, number][][][];
export type Bbox7 = [number, number, number, number, ...number[]] | null;
export type Type7 = "GeometryCollection";
export type Geometries = (Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon)[];
export type String = {
  [k: string]: string;
} | null;
export type Numeric = {
  [k: string]: number;
} | null;
export type MultiNumeric = {
  [k: string]: number[];
} | null;
export type Id = string | number | null;
export type Coordinatesystem = Axis[] | null;
export type Name = string;
/**
 * The type of an axis
 */
export type AxisType = "cartesian" | "angular" | "temporal" | "spectral";
/**
 * A unit of measurement
 */
export type Unit =
  | "angstrom"
  | "attometer"
  | "centimeter"
  | "decimeter"
  | "exameter"
  | "femtometer"
  | "foot"
  | "gigameter"
  | "hectometer"
  | "inch"
  | "kilometer"
  | "megameter"
  | "meter"
  | "micrometer"
  | "mile"
  | "millimeter"
  | "nanometer"
  | "parsec"
  | "petameter"
  | "picometer"
  | "terameter"
  | "yard"
  | "yoctometer"
  | "yottameter"
  | "zeptometer"
  | "zettameter"
  | "pixel"
  | "radian"
  | "degree";
export type PixelsPerUnit = number | null;
export type Description = string | null;
export type Ref = string | number | null;
export type Bbox8 = [number, number, number, number, ...number[]] | null;
export type Type8 = "FeatureCollection";
export type Bbox9 = [number, number, number, number, ...number[]] | null;
export type Type9 = "Feature";
/**
 * The geometry of the
 *                                    feature
 */
export type Geometry1 =
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon
  | GeometryCollection
  | null;
export type Id1 = string | number | null;
export type Features = Feature[];
export type Axes = Axis[];
export type TransformationMatrix = number[][] | null;
export type ValueRange = {
  [k: string]: ValueRange1;
} | null;
export type Min = number;
export type Max = number;
export type DescriptiveFields = string[] | null;

/**
 * A MicroJSON feature, which is a GeoJSON feature with additional
 * metadata
 */
export interface MicroFeature {
  bbox?: Bbox;
  type: Type;
  geometry: Geometry;
  properties: Properties;
  id?: Id;
  coordinateSystem?: Coordinatesystem;
  ref?: Ref;
  [k: string]: unknown;
}
/**
 * A GeoJSON Point object
 */
export interface Point {
  bbox?: Bbox1;
  type: Type1;
  coordinates: Coordinates;
  [k: string]: unknown;
}
/**
 * A GeoJSON MultiPoint object
 */
export interface MultiPoint {
  bbox?: Bbox2;
  type: Type2;
  coordinates: Coordinates1;
  [k: string]: unknown;
}
/**
 * A GeoJSON LineString object
 */
export interface LineString {
  bbox?: Bbox3;
  type: Type3;
  coordinates: Coordinates2;
  [k: string]: unknown;
}
/**
 * A GeoJSON MultiLineString object
 */
export interface MultiLineString {
  bbox?: Bbox4;
  type: Type4;
  coordinates: Coordinates3;
  [k: string]: unknown;
}
/**
 * A GeoJSON Polygon object
 */
export interface Polygon {
  bbox?: Bbox5;
  type: Type5;
  coordinates: Coordinates4;
  [k: string]: unknown;
}
/**
 * A GeoJSON MultiPolygon object
 */
export interface MultiPolygon {
  bbox?: Bbox6;
  type: Type6;
  coordinates: Coordinates5;
  [k: string]: unknown;
}
/**
 * A GeoJSON GeometryCollection object
 */
export interface GeometryCollection {
  bbox?: Bbox7;
  type: Type7;
  geometries: Geometries;
  [k: string]: unknown;
}
/**
 * Metadata properties of a MicroJSON feature
 */
export interface Properties {
  string?: String;
  numeric?: Numeric;
  multiNumeric?: MultiNumeric;
  [k: string]: unknown;
}
/**
 * An axis of a coordinate system
 */
export interface Axis {
  name: Name;
  type?: AxisType | null;
  unit?: Unit | null;
  pixelsPerUnit?: PixelsPerUnit;
  description?: Description;
  [k: string]: unknown;
}
/**
 * A MicroJSON feature collection, which is a GeoJSON feature
 * collection with additional metadata
 */
export interface MicroFeatureCollection {
  bbox?: Bbox8;
  type: Type8;
  features: Features;
  coordinateSystem?: CoordinateSystem | null;
  valueRange?: ValueRange;
  descriptive_fields?: DescriptiveFields;
  propertie?: Properties | null;
  [k: string]: unknown;
}
/**
 * A GeoJSON Feature object
 */
export interface Feature {
  bbox?: Bbox9;
  type: Type9;
  geometry: Geometry1;
  properties: Properties1;
  id?: Id1;
  [k: string]: unknown;
}
/**
 * Properties of the feature
 */
export interface Properties1 {
  [k: string]: unknown;
}
/**
 * A coordinate system for MicroJSON coordinates
 */
export interface CoordinateSystem {
  axes: Axes;
  transformationMatrix?: TransformationMatrix;
  [k: string]: unknown;
}
/**
 * A range of values for MicroJSON quantitative properties
 */
export interface ValueRange1 {
  min: Min;
  max: Max;
  [k: string]: unknown;
}
