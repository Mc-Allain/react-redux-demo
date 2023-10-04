import { combineReducers, legacy_createStore } from "redux";
import colorThemeReducer from "./colorTheme/colorThemeReducer";
import gameReducer from "./game/gameReducer";
import quizGroupReducer from "./quizGroup/quizGroupReducer";

const combinedReducer = combineReducers({
    colorThemeReducer: colorThemeReducer, 
    gameReducer: gameReducer,
    quizGroupReducer: quizGroupReducer,
});

const store = legacy_createStore(combinedReducer);

export default store;