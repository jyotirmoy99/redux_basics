import { combineReducers } from "redux";

import shirtReducer from "./shirt/shirtReducer";
import pantReducer from "./pant/pantReducer";

const rootReducer = combineReducers({
  shirts: shirtReducer,
  pants: pantReducer,
});

export default rootReducer;
