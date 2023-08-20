import axios from "../dataService";

export const get_movie_list = (pageNumber) => async (dispatch) => {
  let response = await axios.get(
    `/3/discover/movie?language=en-US&page=${pageNumber}&sort_by=primary_release_date.asc&primary_release_date.gte=2023-08-20` +
      "&api_key=" +
      process.env.REACT_APP_KEY
  );
  dispatch({
    type: "FETCH_MOVIE_LIST",
    payload: {
      data: response.data.results,
      pageNumber: response.data.page,
      totalPages: response.data.total_pages,
    },
  });
  console.log("response", response);
};

export const get_movie_details = (id) => async (dispatch) => {
  console.log("id===>", id);
  let response = await axios.get(
    `/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}`
  );

  dispatch({
    type: "FETCH_MOVIE_DETAILS",
    payload: response.data,
  });

  console.log("response_movie", response);
};

export const search_movie = (term, pageNumber) => async (dispatch) => {
  let response = await axios.get(
    `/3/search/movie?language=en-US&page=${pageNumber}&query=${term.toLowerCase()}&api_key=${
      process.env.REACT_APP_KEY
    }`
  );
  if (term.trim().length !== 0) {
    dispatch({
      type: "SEARCH_MOVIE",
      payload: {
        data: response.data.results,
        pageNumber: response.data.page,
        totalPages: response.data.total_pages,
        searchTerm: term,
        latestOrSearch: "search",
      },
    });
  } else {
    let response = await axios.get(
      `/3/discover/movie?language=en-US&page=${pageNumber}&sort_by=primary_release_date.asc&primary_release_date.gte=2023-08-20` +
        "&api_key=" +
        process.env.REACT_APP_KEY
    );
    dispatch({
      type: "FETCH_MOVIE_LIST",
      payload: {
        data: response.data.results,
        pageNumber: response.data.page,
        totalPages: response.data.total_pages,
        latestOrSearch: "latest",
      },
    });
    console.log("response", response);
  }
};
