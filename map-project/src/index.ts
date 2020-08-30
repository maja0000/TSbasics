import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
