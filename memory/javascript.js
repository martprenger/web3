import {MemoryGame} from './modules/MemoryGame.js';
import {GameSize} from './modules/GameSize.js';
import {GameColor} from "./modules/GameColor.js";
import {GameType} from "./modules/GameType.js";
import { ProfilePreference } from './modules/ProfilePreference.js';


// use new memory game clas
const gameColor = new GameColor();
const gameSize = new GameSize();
const gameType = new GameType();
const memory = new MemoryGame(gameSize, gameType);
const profilePreference = new ProfilePreference();
