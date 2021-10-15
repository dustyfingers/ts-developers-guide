// this interface informs other classes/objects
// how they can be an argument to addMarker
interface Markable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  // props in TS are PUBLIC by default
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), { zoom: 1, center: { lat: 0, lng: 0 }});
  }

  addMarker(item: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: item.location
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }


}