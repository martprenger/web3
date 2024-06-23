import {MemoryGame} from './modules/MemoryGame.js';
import {GameSize} from './modules/GameSize.js';
import {GameColor} from "./modules/GameColor.js";
import {GameType} from "./modules/GameType.js";
import { ProfilePreference } from './modules/ProfilePreference.js';
import { TopScores } from './modules/TopScores.js';
import { OverwriteFetch } from "./modules/OverwriteFetch.js";
import { JWT } from "./modules/JWT.js";
import { RequireLogin } from "./modules/RequireLogin.js";

const overwriteFetch = new OverwriteFetch();
const jwt = new JWT();

//require login
const requireLogin = new RequireLogin(jwt);

// use new memory game clas
const gameColor = new GameColor();
const gameSize = new GameSize();
const gameType = new GameType();
const memory = new MemoryGame(gameSize, gameType, jwt);

// show list of best players
const topScores = new TopScores();

// adds profile preference button
const profilePreference = new ProfilePreference(jwt);
profilePreference.setPreferenceButton();


