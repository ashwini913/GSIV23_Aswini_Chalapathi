import _ from "lodash";

export const movieListReducer = (
  state = { movieList: {}, movieView: [], searchedMovie: {} },
  action
) => {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return {
        ...state,
        movieList: { ..._.mapKeys(action.payload, "id") },
      };
    case "FETCH_MOVIE_DETAILS":
      console.log(" action.payload===", action.payload);
      return {
        ...state,
        movieView: [action.payload],
      };
    case "SEARCH_MOVIE":
      return {
        ...state,
        movieList: {
          ..._.mapKeys(action.payload, "id"),
        },
      };
    default:
      return state;
  }
};
