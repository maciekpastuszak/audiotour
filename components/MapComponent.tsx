"use client"

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useState } from 'react';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  link: string;
  lead: string;
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
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter the markers based on the search term
  const filteredMarkers = markers.filter(marker => 
    marker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="absolute bottom-2 left-2 z-20 p-2 bg-white shadow-md rounded-md "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Map Container */}
      <MapContainer center={[52.112795, 19.211946]} zoom={6} className='w-full md:w-[450px] lg:w-[500px] h-[400px] md:h-[450px] lg:h-[500px] z-10'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredMarkers.map((marker, idx) => (
          <Marker key={idx} position={[marker.lat, marker.lng]} icon={customIcon} >
            <Popup>
              <div className='relative space-y-1'>
                {/* <Image src='/img/app-icons/Szlak_Marianny_Oranskiej.png' width={45} height={45} alt='Profile img' className='absolute rounded-full shadow-lg top-0 -left-10'/> */}
                <h3 className='ps-3 font-bold'>{marker.name}</h3>
                <p className='ps-3 italic text-xs'>{marker.lead == 'Nieznany' ? '' : marker.lead}</p>
                <div className='flex justify-end '>
                  {/* <Link className='px-3 pt-1 pb-5 h-6 text-xs text-black hover:text-white bg-white hover:bg-zinc-800 border border-stone-400 rounded-xl align-middle' href={marker.link}>Więcej</Link> */}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
