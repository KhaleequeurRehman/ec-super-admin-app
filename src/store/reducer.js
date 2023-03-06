import { combineReducers } from "redux";
import {api} from "./middleware/api"

export default combineReducers({
  [api.reducerPath]:api.reducer
});
