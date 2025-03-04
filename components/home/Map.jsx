"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/images/home/marker.png",
  iconSize: [45, 45],
  iconAnchor: [17, 42],
  popupAnchor: [0, -40],
});

function Map({ lat = 51.505, lng = -0.09, zoom = 13 }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>Sample Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
