import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import CustomMarker from './custom-marker';


export default function Map() {
  return (
    <MapContainer center={[8.9891266, 1.116126]} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <CustomMarker position={[8.9891266, 1.116126]}>
      <Popup>This is a custom marker popup</Popup>
    </CustomMarker>
  </MapContainer>
  );
}