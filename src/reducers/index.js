import { combineReducers } from "redux";
import { movieListReducer } from "./movieListReducer";

const reducer = combineReducers({
  movieList: movieListReducer,
});

export default reducer;
