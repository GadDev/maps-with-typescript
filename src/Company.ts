import faker from 'faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable {
	name: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = 'blue';
	constructor() {
		this.name = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
	markerContent() {
		return `<h2>Company name :${this.name}</h2>
		<p> ${this.catchPhrase}<p>`;
	}
}
