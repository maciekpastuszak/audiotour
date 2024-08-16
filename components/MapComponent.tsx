import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

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

const MapComponent: React.FC<MapComponentProps> = ({ markers }) => {
  return (
    <MapContainer center={[52.237049, 21.017532]} zoom={6} className='w-full md:w-[450px] lg:w-[500px] h-[300px] md:h-[450px] lg:h-[500px]'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.lat, marker.lng]}>
          <Popup>
            <a href={marker.link}>{marker.name}</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
