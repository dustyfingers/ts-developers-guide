// triple slach directive for "cannot find name 'google'.ts" error
/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);