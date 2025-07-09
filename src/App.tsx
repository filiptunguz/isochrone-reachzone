import OpenStreetMap from './components/open-street-map.tsx';
import { Polygon } from 'react-leaflet';
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import { polygonBounds } from './bounds.ts';
import Form, { type FormValue } from '@/components/form.tsx';
import type { Transportation } from '@/components/select-transportation.tsx';

const DEFAULT_TRANSPORTATION: Transportation = 'driving';

export default function App() {
	const [bounds, setBounds] = useState<LatLngTuple[]>(polygonBounds[DEFAULT_TRANSPORTATION][30]);

	const onFormChange = (value: FormValue) => {
		setBounds(polygonBounds[value.transportation][value.travelTime]);
	};

	return (
		<main className="flex items-center max-w-[1100px] mx-auto h-svh">
			<div className="p-8 space-y-4 flex-1">
				<Form onChange={onFormChange} defaultTransportation={DEFAULT_TRANSPORTATION} />
				<OpenStreetMap focusOn={bounds}>
					<Polygon positions={bounds} color="#244F4B" />
				</OpenStreetMap>
			</div>
		</main>
	);
}
