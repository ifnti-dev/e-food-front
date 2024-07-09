import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MakrerUrl from "../../../../../assets/map-icon.png";
import {  Marker, useMap } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode; // Content to display inside the marker
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
  const map = useMap();

  const customIcon = L.icon({
    iconUrl: MakrerUrl,
    iconSize: [30, 30],
    iconAnchor: [25, 50],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;