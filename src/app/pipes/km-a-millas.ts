import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'KmAMIllaPipe' })
export class KmAMIllaPipe implements PipeTransform {
	transform(value: number): number {
		const kilometersInMile = 1.609344;
		if (!isNaN(value)) {
			return value / kilometersInMile;
		}
		return null;
	}
}
