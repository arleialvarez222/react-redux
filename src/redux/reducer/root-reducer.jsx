import { combineReducers } from "redux";
import game_shop from "./game-shop-reducer";
import buscador from "./buscador-reducer";

const rootReducers = combineReducers({
    game_shop,
    buscador
});

export default rootReducers;