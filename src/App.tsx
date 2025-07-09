import OpenStreetMap from './components/open-street-map.tsx';
import { Polygon } from 'react-leaflet';
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import { polygonBounds, type TravelTime } from './bounds.ts';
import Form, { type FormValue } from '@/components/form.tsx';
import type { Transportation } from '@/components/select-transportation.tsx';

const DEFAULT_TRANSPORTATION: Transportation = 'driving';
const DEFAULT_TRAVEL_TIME: TravelTime = 10;

export default function App() {
	const [bounds, setBounds] = useState<LatLngTuple[]>(
		polygonBounds[DEFAULT_TRANSPORTATION][DEFAULT_TRAVEL_TIME],
	);

	const onFormChange = (value: FormValue) => {
		if (value.travelTime) setBounds(polygonBounds[value.transportation][value.travelTime]);
		else setBounds([]);
	};

	return (
		<main className="flex items-center max-w-[1100px] mx-auto h-svh">
			<div className="p-8 space-y-4 flex-1">
				<Form
					onChange={onFormChange}
					defaultTravelTime={DEFAULT_TRAVEL_TIME}
					defaultTransportation={DEFAULT_TRANSPORTATION}
				/>
				<OpenStreetMap focusOn={bounds.length ? bounds : undefined}>
					{bounds.length > 0 && <Polygon positions={bounds} color="#244F4B" />}
				</OpenStreetMap>
			</div>
		</main>
	);
}
