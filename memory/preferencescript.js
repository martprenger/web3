import { ProfilePreference } from './modules/ProfilePreference.js';
import { OverwriteFetch } from "./modules/OverwriteFetch.js";

const overwriteFetch = new OverwriteFetch();

const profilePreference = new ProfilePreference();
profilePreference.changePreference();
