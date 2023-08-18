import React, { useEffect } from "react";
//import { getAllMoviesList } from "../dataService";
import { get_movie_list } from "../actions/index";
import NavBar from "./NavBar";
import { connect, useDispatch } from "react-redux";
import "../css/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = ({ movieList, searchTerm }) => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_movie_list());
    console.log("movilist------", movieList);
  }, []);
  return (
    <div>
      <div className="list-container">
        {movieList.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={movie.id}
            to={`movieDetails/${movie.id}`}
          >
            <div key={movie.id} className="movie-card">
              <img
                alt={movie.title}
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
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
      {console.log("searchTerm", searchTerm)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: Object.values(state.movieList.movieList),
  };
};
export default connect(mapStateToProps, { get_movie_list })(HomePage);
