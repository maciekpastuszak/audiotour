"use client"

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  link: string;
}

interface MapComponentProps {
  markers: MarkerData[];
}

const customIcon = new L.Icon({
  iconUrl: '/img/sign_logo.svg',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -32],
});

const MapComponent: React.FC<MapComponentProps> = ({ markers }) => {
  return (
    <MapContainer center={[52.112795, 19.211946]} zoom={6} className='w-full md:w-[450px] lg:w-[500px] h-[300px] md:h-[450px] lg:h-[500px]'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.lat, marker.lng]} icon={customIcon} >
          <Popup>
            <a href={marker.link}>{marker.name}</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
