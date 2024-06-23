import { ProfilePreference } from './modules/ProfilePreference.js';
import { OverwriteFetch } from "./modules/OverwriteFetch.js";
import { JWT } from "./modules/JWT.js";
import { RequireLogin } from "./modules/RequireLogin.js";

const overwriteFetch = new OverwriteFetch();
const jwt = new JWT();

const requireLogin = new RequireLogin(jwt);

const profilePreference = new ProfilePreference(jwt);
profilePreference.changePreference();
