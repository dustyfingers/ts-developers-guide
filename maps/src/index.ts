// triple slash directive for "cannot find name 'google'" error
/// <reference types="@types/google.maps" />

import { Map } from './Map';
import { User } from './User';

// import { User } from './User';
// import { Company } from './Company';

const user = new User();
const map = new Map('map');

map.addMarker(user)