import { combineReducers, legacy_createStore } from "redux";
import colorThemeReducer from "./colorTheme/colorThemeReducer";
import hiraganaReducer from "./hiragana/hiraganaReducer";

const combinedReducer = combineReducers({
    colorThemeReducer: colorThemeReducer, 
    hiraganaReducer: hiraganaReducer,
});

const store = legacy_createStore(combinedReducer);

export default store;