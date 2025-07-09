import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import type { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet';
import { type ReactNode, useEffect, useState } from 'react';

type OpenStreetMapProps = {
	focusOn?: LatLngTuple[];
	children?: ReactNode;
};

export default function OpenStreetMap({ focusOn, children }: OpenStreetMapProps) {
	const [mapContainer, setMapContainer] = useState<Map | null>(null);

	useEffect(() => {
		if (mapContainer && mapContainer && focusOn && focusOn.length > 0) {
			mapContainer.fitBounds(focusOn, {
				padding: [25, 25],
				maxZoom: 15,
			});
		}
	}, [focusOn, mapContainer]);

	return (
		<div className="rounded-3xl overflow-hidden border border-primary">
			<MapContainer
				center={[44.1634188, 20.9128565]}
				zoom={6}
				scrollWheelZoom={true}
				className="h-[50vh]"
				attributionControl={false}
				ref={setMapContainer}
			>
				<TileLayer
					attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
					url={`https://api.maptiler.com/maps/winter-v2/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAP_API_KEY}`}
					tileSize={512}
					maxZoom={18}
					zoomOffset={-1}
					detectRetina={true}
				/>
				{children}
				<AttributionControl
					prefix={'<a href="https://leafletjs.com/" target="_blank" rel="noopener">Leaflet</a>'}
				/>
			</MapContainer>
		</div>
	);
}
