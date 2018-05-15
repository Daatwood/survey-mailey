import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  // Auth state is produced by authReducer
  auth: authReducer
});
