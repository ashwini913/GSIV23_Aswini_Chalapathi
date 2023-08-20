import _ from "lodash";

export const movieListReducer = (
  state = {
    movieList: {},
    movieView: [],
    pageNumber: 0,
    searchTerm: "",
    totalPages: 0,
    latestOrSearch: "latest",
    movieListError: null,
    movieViewError: null,
    searchMovieError: null,
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
        movieListError: null,
        searchMovieError: null,
      };
    case "FETCH_MOVIE_DETAILS":
      console.log(" action.payload===", action.payload);
      return {
        ...state,
        movieView: [action.payload],
        movieViewError: null,
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
        searchMovieError: null,
        movieListError: null,
      };
    case "FETCH_MOVIE_LIST_ERROR":
      return {
        ...state,
        movieListError: { type: action.type, message: action.payload },
      };
    case "FETCH_MOVIE_DETAILS_ERROR":
      return {
        ...state,
        movieViewError: { type: action.type, message: action.payload },
      };
    case "SEARCH_MOVIE_ERROR":
      return {
        ...state,
        searchMovieError: { type: action.type, message: action.payload },
      };
    default:
      return state;
  }
};
