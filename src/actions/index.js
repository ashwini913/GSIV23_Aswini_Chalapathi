import axios from "../dataService";

export const get_movie_list = () => async (dispatch) => {
  let response = await axios.get(
    "/3/movie/upcoming?language=en-US&page=1&sort_by=popularity.desc" +
      "&api_key=" +
      process.env.REACT_APP_KEY
  );
  dispatch({
    type: "FETCH_MOVIE_LIST",
    payload: response.data.results,
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

export const search_movie = (term) => async (dispatch) => {
  let response = await axios.get(
    `/3/search/movie?query=${term.toLowerCase()}&api_key=${
      process.env.REACT_APP_KEY
    }`
  );
  if (response.data.results.length !== 0) {
    dispatch({
      type: "SEARCH_MOVIE",
      payload: response.data.results,
    });
  } else {
    let response = await axios.get(
      "/3/movie/upcoming?language=en-US&page=1&sort_by=popularity.desc" +
        "&api_key=" +
        process.env.REACT_APP_KEY
    );
    dispatch({
      type: "FETCH_MOVIE_LIST",
      payload: response.data.results,
    });
    console.log("response", response);
  }
};
