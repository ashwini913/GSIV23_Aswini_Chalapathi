import React from "react";
import SearchBar from "./SearchBar";
import "../css/NavBar.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <SearchBar />
      <Link
        to="/"
        style={{ paddingRight: "40px", textDecoration: "none", color: "black" }}
      >
        <HomeIcon />
      </Link>
    </div>
  );
};

export default NavBar;
