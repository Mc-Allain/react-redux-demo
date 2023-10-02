import { legacy_createStore } from "redux";
import colorThemeReducer from "./colorTheme/colorThemeReducer";

const store = legacy_createStore(colorThemeReducer);

export default store;