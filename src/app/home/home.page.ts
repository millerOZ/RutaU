import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

declare var google: any;
interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  map = null;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  origin = {
    lat: 6.244391,
    lng: -75.606031,
  };
  destination = {
    lat: 6.245410615036414,
    lng: -75.55106273297991,
  };
  markers: Marker[] = [
    {
      position: {
        lat: 6.245410615036414,
        lng: -75.55106273297991,
      },
      title: 'ITM Fratermindad',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    this.loadMap();
  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement | null = document.getElementById('map');
    const indicatorsEle: HTMLElement | null =
      document.getElementById('indicators');

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 12,
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle ? mapEle.classList.add('show-map') : null;
      this.renderMarkers();
      this.calculateRoute();
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }

  renderMarkers() {
    this.markers.forEach((marker) => {
      this.addMarker(marker);
    });
  }

  calculateRoute() {
    this.directionsService.route(
      {
        origin: this.origin,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response: any, status: any) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      }
    );
  }
}
