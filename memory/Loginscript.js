import {CheckUser} from './modules/CheckUser.js';
import {OverwriteFetch} from "./modules/OverwriteFetch.js";

const overwriteFetch = new OverwriteFetch();

const checkUser = new CheckUser();
checkUser.addLoginForm();



