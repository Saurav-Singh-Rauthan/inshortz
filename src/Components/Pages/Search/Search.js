import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { connect } from "react-redux";

import Styles from "./Search.module.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";

const Search = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [searchVal, setsearchVal] = useState("");
  const [searchparam, setsearchparam] = useState(1);
  const [retData, setretData] = useState([]);

  useEffect(() => {
    searchHandler(searchVal);
  }, [searchVal]);

  useEffect(() => {
    const tag = searchParams.get("tag")
    if(tag){
      setsearchVal(tag)
    }
  }, [])

  const handleChange = (event, type) => {
    if (type === "search") {
      setsearchVal(event.target.value);
    } else {
      setsearchparam(event.target.value);
    }
  };

  const searchHandler = (value) => {
    let loadedShorts = props.shorts
      ? Object.keys(props.shorts)?.map((key) => {
          const short = { ...props.shorts[key], shortKey: key };
          return short;
        })
      : [];

    if (searchparam === 1) {
      setretData(
        loadedShorts?.filter((short) => {
          return short.tags.includes(value);
        })
      );
    } else {
      setretData(
        loadedShorts?.filter((short) => {
          return short.author === value;
        })
      );
    }
  };

  const res =
    retData.length > 0 ? (
      retData.map((short) => {
        return (
          <Link
            to={"/search/" + short.shortKey}
            className={Styles.searchResult}
            key={short.shortKey}
          >
            {short.title}
          </Link>
        );
      })
    ) : (
      <p style={{ textAlign: "center" }}>
        No results found for the search query!!
      </p>
    );

  return (
    <div className={Styles.cont}>
      <div className={Styles.searchCont}>
        <FormControl sx={{ width: "43%" }}>
          <InputLabel id="demo-simple-select-label">Search By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchparam}
            label="Search By"
            onChange={(event) => handleChange(event, "select")}
          >
            <MenuItem value={1}>Tag</MenuItem>
            <MenuItem value={2}>Username</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            width: "55%",
            margin: "0 0 0 1rem",
            padding: "1rem",
          }}
        >
          <TextField
            id="input-with-sx"
            label=""
            variant="standard"
            sx={{ width: "95%" }}
            value={searchVal}
            onChange={(event) => setsearchVal(event.target.value)}
          />
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        </Box>
      </div>
      <div className={Styles.content}>{res}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    shorts: state.shorts.shorts,
  };
};

export default connect(mapStateToProps)(Search);
