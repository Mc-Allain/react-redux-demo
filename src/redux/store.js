import { legacy_createStore } from "redux";
import productReducer from "./product/productReducer";

const store = legacy_createStore(productReducer);

export default store;