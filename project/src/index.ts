<<<<<<< HEAD
import { User } from './User';
import { Company } from './Company';

const user = new User();
const c = new Company();
console.log(user);
console.log(c);
=======
import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
>>>>>>> maps
