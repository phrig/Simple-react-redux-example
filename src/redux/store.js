/* store.js */
/*jshint esversion: 6 */

import { createStore } from "redux";
import dataPassApp from "./reducers";

let store = createStore(dataPassApp);
store.subscribe(() => console.log(store.getState()));
export default store;

