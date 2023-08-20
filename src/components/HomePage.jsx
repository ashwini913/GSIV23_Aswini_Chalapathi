import React, { useEffect } from "react";
//import { getAllMoviesList } from "../dataService";
import { get_movie_list, search_movie } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import "../css/HomePage.css";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const HomePage = ({
  movieList,
  pageNumber,
  totalPages,
  latestOrSearch,
  searchTerm,
  movieListError,
}) => {
  let dispatch = useDispatch();
  const onPaginationChange = (e) => {
    console.log("event=============", e);
    if (latestOrSearch === "latest") {
      dispatch(get_movie_list(e));
    } else if (latestOrSearch === "search") {
      dispatch(search_movie(searchTerm, e));
    }
  };
  useEffect(() => {
    dispatch(get_movie_list(1));
    console.log("movilist------", movieList);
  }, []);
  return (
    <div>
      <div className="list-container">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={movie.id}
              to={`movieDetails/${movie.id}`}
            >
              <div key={movie.id} className="movie-card">
                <img
                  alt={movie.title}
                  src={
                    movie.poster_path
                      ? "https://image.tmdb.org/t/p/original" +
                        movie.poster_path
                      : ""
                  }
                ></img>
                <div className="details-section">
                  <div style={{ width: "63%", fontWeight: "600" }}>
                    {movie.title}
                  </div>
                  <div>Rating: {movie.vote_average}</div>
                </div>
                {movie.overview.length > 70 && (
                  <div style={{ fontSize: "14px", padding: "5px" }}>
                    {movie.overview.slice(0, 70)}...
                  </div>
                )}
                {movie.overview.length < 70 && (
                  <div style={{ fontSize: "14px", padding: "5px" }}>
                    {movie.overview}
                  </div>
                )}
              </div>
            </Link>
          ))}
      </div>
      {console.log("movieListError", movieListError)}
      {movieListError && (
        <div className="not-found">
          {movieListError.type} : {movieListError.message}
        </div>
      )}
      {movieList.length === 0 && !movieListError && (
        <div className="not-found">Results are found</div>
      )}

      {movieList.length > 0 && (
        <Pagination
          onChange={(e) => onPaginationChange(e)}
          className="pagination"
          current={pageNumber}
          defaultCurrent={1}
          total={totalPages}
          showSizeChanger={false}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: Object.values(state.movieList.movieList),
    pageNumber: state.movieList.pageNumber,
    totalPages: state.movieList.totalPages,
    latestOrSearch: state.movieList.latestOrSearch,
    searchTerm: state.movieList.searchTerm,
    movieListError: state.movieList.movieListError,
  };
};
export default connect(mapStateToProps, { get_movie_list })(HomePage);
