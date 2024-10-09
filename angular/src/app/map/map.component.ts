import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent{
  // private map: any;

  // // City data
  // private cities = [
  //   { name: "Zagreb", lat: 45.8150, lng: 15.9819 },
  //   { name: "Split", lat: 43.5081, lng: 16.4402 },
  //   { name: "Dubrovnik", lat: 42.6507, lng: 18.0944 }
  // ];

  // constructor() { }

  // ngOnInit(): void {
  //   this.initMap();
  //   this.addCountryBorder();
  //   this.addCityMarkers();
  // }

  // // Initialize the map
  // private initMap(): void {
  //   this.map = L.map('map', {
  //     center: [45.1, 15.2],  // Centered on Croatia
  //     zoom: 6,
  //     zoomControl: false,
  //     attributionControl: false
  //   });

  //   // Optionally, add an empty tile layer to keep the map blank
  //   L.tileLayer('', {
  //     attribution: ''
  //   }).addTo(this.map);
  // }

  // // Function to add the country border
  // private addCountryBorder(): void {
  //   fetch('../assets/json/custom.geo.json')  // Replace with actual GeoJSON path
  //     .then(res => res.json())
  //     .then(geojsonData => {
  //       L.geoJSON(geojsonData, {
  //         style: {
  //           color: 'blue',
  //           weight: 2,
  //           fillOpacity: 0
  //         }
  //       }).addTo(this.map);
  //     });
  // }

  // // Function to add animated city circles
  // private addCityMarkers(): void {
  //   this.cities.forEach(city => {
  //     const marker = L.circleMarker([city.lat, city.lng], {
  //       radius: 10,
  //       fillColor: "#ff7800",
  //       color: "#000",
  //       weight: 1,
  //       opacity: 1,
  //       fillOpacity: 0.8
  //     }).addTo(this.map);

  //     // Bind a tooltip to display the city name on hover
  //     marker.bindTooltip(city.name, {
  //       permanent: false,
  //       direction: "top"
  //     });

  //     // Add animation to the circle marker when added
  //     marker.on('add', () => {
  //       const el = marker.getElement();
  //       el!.classList.add('animated-circle');
  //     });
  //   });
  // }
}
