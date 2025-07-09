import SelectTransportation, { type Transportation } from '@/components/select-transportation.tsx';
import type { TravelTime } from '@/bounds.ts';
import { useDeferredValue, useState } from 'react';
import { Slider } from '@/components/ui/slider.tsx';

export type FormValue = {
	transportation: Transportation;
	travelTime: TravelTime;
};

type FormProps = {
	defaultTransportation: Transportation;
	defaultTravelTime: TravelTime;
	onChange: (value: FormValue) => void;
};

export default function Form({ onChange, defaultTransportation, defaultTravelTime }: FormProps) {
	const [transportation, setTransportation] = useState<Transportation>(defaultTransportation);
	const [travelTime, setTravelTime] = useState<TravelTime>(defaultTravelTime);
	const deferredTravelTime = useDeferredValue(travelTime);

	const onTransportationChange = (value: Transportation) => {
		setTransportation(value);
		onChange({ transportation: value, travelTime });
	};

	const onTravelTimeChange = (value: number[]) => {
		const travelTimeValue = value[0] as TravelTime;
		setTravelTime(travelTimeValue);
		onChange({ transportation, travelTime: travelTimeValue });
	};

	return (
		<div className="space-y-4 p-6 border border-primary rounded-3xl">
			<SelectTransportation onValueChange={onTransportationChange} value={transportation} />
			<div className="flex gap-4">
				<Slider step={10} min={0} max={30} onValueChange={onTravelTimeChange} />
				<div className="border-l border-gray-300 pl-2">
					<span className="block w-14 whitespace-nowrap text-center text-sm">
						{deferredTravelTime} min
					</span>
				</div>
			</div>
		</div>
	);
}
