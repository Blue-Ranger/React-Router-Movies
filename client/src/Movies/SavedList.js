import React from "react";
import { Link } from "react-router-dom";

const SavedList = (props) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    {/* Replaced this Home btn w/ a linked Home btn */}
    {/* <div className="home-button">Home</div> */}

    {/* added a link around Home button */}
    <Link to="/" className="home-button">
      Home
    </Link>
  </div>
);

export default SavedList;
