import React from "react";
import "../css/SearchBar.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { search_movie } from "../actions";
import { connect, useDispatch } from "react-redux";

const SearchBar = () => {
  let dispatch = useDispatch();
  const handleChange = (e, term) => {
    console.log("e", e);
    if (e.key === "Enter") {
      dispatch(search_movie(term));
    }
  };
  return (
    <div className="search-container">
      <TextField
        style={{ width: "100%", backgroundColor: "#DFDFDF" }}
        id="outlined-basic"
        variant="outlined"
        size="small"
        onKeyUp={(e) => handleChange(e, e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default connect(null, { search_movie })(SearchBar);
