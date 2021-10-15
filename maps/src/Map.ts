import { User } from './User';
import { Company } from './Company';

interface Markable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  // props in TS are PUBLIC by default
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), { zoom: 1, center: { lat: 0, lng: 0 }});
  }

  addMarker(item: Markable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: item.location
    })
  }
}