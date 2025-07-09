import SelectTransportation, { type Transportation } from '@/components/select-transportation.tsx';
import type { TravelTime } from '@/bounds.ts';
import { useState } from 'react';

export type FormValue = {
	transportation: Transportation;
	travelTime: TravelTime;
};

type FormProps = {
	defaultTransportation: Transportation;
	onChange: (value: FormValue) => void;
};

export default function Form({ onChange, defaultTransportation }: FormProps) {
	const [transportation, setTransportation] = useState<Transportation>(defaultTransportation);

	const onTransportationChange = (value: Transportation) => {
		setTransportation(value);
		onChange({ transportation: value, travelTime: 30 });
	};

	return (
		<div className="space-y-4 p-6 border border-primary rounded-3xl">
			<SelectTransportation onValueChange={onTransportationChange} value={transportation} />
			<span>something</span>
		</div>
	);
}
