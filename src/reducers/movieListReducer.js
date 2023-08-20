import _ from "lodash";

export const movieListReducer = (
  state = {
    movieList: {},
    movieView: [],
    pageNumber: 0,
    searchTerm: "",
    totalPages: 0,
    latestOrSearch: "latest",
  },
  action
) => {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return {
        ...state,
        movieList: { ..._.mapKeys(action.payload.data, "id") },
        pageNumber: action.payload.pageNumber,
        totalPages: action.payload.totalPages,
        latestOrSearch: "latest",
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
          ..._.mapKeys(action.payload.data, "id"),
        },
        pageNumber: action.payload.pageNumber,
        totalPages: action.payload.totalPages,
        searchTerm: action.payload.searchTerm,
        latestOrSearch: "search",
      };
    default:
      return state;
  }
};
