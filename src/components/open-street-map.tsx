import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function OpenStreetMap() {
	return (
		<div className="rounded-3xl overflow-hidden">
			<MapContainer
				center={[44.1634188, 20.9128565]}
				zoom={6}
				scrollWheelZoom={true}
				className="h-[50vh]"
				attributionControl={false}
			>
				<TileLayer
					attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
					url={`https://maps.geoapify.com/v1/tile/dark-matter-dark-grey/{z}/{x}/{y}.png?apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`}
					tileSize={512}
					maxZoom={18}
					zoomOffset={-1}
					detectRetina={true}
				/>
				<AttributionControl
					prefix={'<a href="https://leafletjs.com/" target="_blank" rel="noopener">Leaflet</a>'}
				/>
			</MapContainer>
		</div>
	);
}
