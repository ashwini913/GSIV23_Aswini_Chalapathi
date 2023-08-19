import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import "../css/NavBar.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("useLocation", location);
  }, [location]);
  return (
    <div className="navbar-container">
      {!location.pathname.includes("/movieDetails") && <SearchBar />}
      {location.pathname.includes("/movieDetails") && (
        <div
          style={{ marginLeft: "50px", fontSize: "18px", fontWeight: "500" }}
        >
          Movie Details
        </div>
      )}
      <Link
        to="/"
        style={{
          paddingRight: "40px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <HomeIcon />
      </Link>
    </div>
  );
};

export default NavBar;
