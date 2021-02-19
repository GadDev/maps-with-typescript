import { User } from './User';
import { Company } from './Company';
import {} from 'google.maps';
const user = new User();
const company = new Company();
console.log(user);
console.log(company);

new google.maps.Map(document.getElementById('map'), {
	zoom: 3,
	center: {
		lat: 0,
		lng: 0,
	},
});
