import { createStore } from "redux";

import updating from "./reducer/updating";

const store = createStore(updating);

export default store;
