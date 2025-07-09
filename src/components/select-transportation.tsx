import { Button } from '@/components/ui/button';
import { Bike, Bus, Car, Footprints } from 'lucide-react';

type SelectTransportationProps = {
	value: Transportation;
	onValueChange: (value: Transportation) => void;
};

export type Transportation = 'cycling' | 'driving' | 'walking' | 'bus';

export default function SelectTransportation({ value, onValueChange }: SelectTransportationProps) {
	return (
		<div className="grid grid-cols-4 gap-2">
			<Button
				type="button"
				variant={value === 'driving' ? 'default' : 'outline'}
				className="col-span-1 h-11"
				onClick={() => onValueChange('driving')}
			>
				<Car className="size-6" />
			</Button>
			<Button
				type="button"
				variant={value === 'bus' ? 'default' : 'outline'}
				className="col-span-1 h-11"
				onClick={() => onValueChange('bus')}
			>
				<Bus className="size-6" />
			</Button>
			<Button
				type="button"
				variant={value === 'walking' ? 'default' : 'outline'}
				className="col-span-1 h-11"
				onClick={() => onValueChange('walking')}
			>
				<Footprints className="size-6" />
			</Button>
			<Button
				type="button"
				variant={value === 'cycling' ? 'default' : 'outline'}
				className="col-span-1 h-11"
				onClick={() => onValueChange('cycling')}
			>
				<Bike className="size-6" />
			</Button>
		</div>
	);
}
