import OpenStreetMap from './components/open-street-map.tsx';
import { Polygon } from 'react-leaflet';
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import { polygonBounds } from './bounds.ts';

export default function App() {
	const [bounds, setBounds] = useState<LatLngTuple[]>(polygonBounds.walk['30']);

	return (
		<div className="p-8">
			<OpenStreetMap focusOn={bounds}>
				<Polygon positions={bounds} color="#244F4B" />
			</OpenStreetMap>
		</div>
	);
}
