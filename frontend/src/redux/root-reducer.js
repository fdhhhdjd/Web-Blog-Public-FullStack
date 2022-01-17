import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAuth";
import PostReducer from "./Reducer/ReducerPost";
const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
});
export default rootReducer;
