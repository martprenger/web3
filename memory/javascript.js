import {MemoryGame} from './modules/MemoryGame.js';
import {GameSize} from './modules/GameSize.js';
import {GameColor} from "./modules/GameColor.js";


// use new memory game clas
const gameColor = new GameColor();
const gameSize = new GameSize();
const memory = new MemoryGame(gameSize);
