const zoom = 17;
const viewCoordinates = {
  lat: '59.968322',
  lng: '30.317359',
};

const pinCoordinates = {
  lat: '59.96831',
  lng: '30.31748',
}

const easter = 'Привет Шабалину! :)'

const map = L.map('map')
  .setView(
    viewCoordinates,
    zoom
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/icons-background/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  pinCoordinates,
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map).bindPopup(easter);
