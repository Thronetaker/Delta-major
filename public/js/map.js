// import * as maptilersdk from '@maptiler/sdk';
// import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
// // import "@maptiler/sdk/dist/maptiler-sdk.css";
// // import "@maptiler/geocoding-control/style.css";

maptilersdk.config.apiKey = mapAPI;

const map = new maptilersdk.Map({
     container: 'map', // container's id or the HTML element in which the SDK will render the map
     style: maptilersdk.MapStyle.STREETS,
     center: [ 77.7480, 27.5746], // starting position [lng, lat]
     zoom: 14 // starting zoom
     // geolocateControl: true,
});

const gc = new GeocodingControl();

map.addControl(gc, 'top-left');
