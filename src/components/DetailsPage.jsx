import React, { useEffect } from "react";
import { get_movie_details } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/DetailsPage.css";

const DetailsPage = ({ movie }) => {
  let dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(get_movie_details(id));
    console.log("movie=========", movie);
  }, []);

  return (
    movie && (
      <div className="details-page">
        <img
          style={{ width: "250px", height: "300px" }}
          alt={movie.title}
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
        ></img>
        <div>
          <span>{movie.title}</span> | <span>{movie.runtime}</span>
          <span></span>
          <div>Description : {movie.overview}</div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movieList.movieView[0],
  };
};

export default connect(mapStateToProps, { get_movie_details })(DetailsPage);
