import { UserRegistration } from "./modules/UserRegistration.js";
import { OverwriteFetch } from "./modules/OverwriteFetch.js";

const overwriteFetch = new OverwriteFetch();

const userRegistration = new UserRegistration();
userRegistration.addRegistrionForm();

