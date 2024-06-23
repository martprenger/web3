import { ProfilePreference } from './modules/ProfilePreference.js';
import { OverwriteFetch } from "./modules/OverwriteFetch.js";
import { JWT } from "./modules/JWT.js";

const overwriteFetch = new OverwriteFetch();
const jwt = new JWT();

const profilePreference = new ProfilePreference(jwt);
profilePreference.changePreference();
