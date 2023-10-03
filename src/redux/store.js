import { combineReducers, legacy_createStore } from "redux";
import colorThemeReducer from "./colorTheme/colorThemeReducer";
import hiraganaReducer from "./hiragana/hiraganaReducer";
import quizGroupReducer from "./quizGroup/quizGroupReducer";

const combinedReducer = combineReducers({
    colorThemeReducer: colorThemeReducer, 
    hiraganaReducer: hiraganaReducer,
    quizGroupReducer: quizGroupReducer,
});

const store = legacy_createStore(combinedReducer);

export default store;