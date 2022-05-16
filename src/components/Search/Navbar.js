import * as React from "react";
import { connect } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import rootReducers from '../../reducers';
import { SearchArtists } from '../../store/initialState';
// import {SearchArtists as initialState } from '../store/initialState';

import { searchArtists } from "../../actions";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));


const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "80ch",
    },
  },
}));

const PrimarySearchAppBar = ({ details,props }) => {
  const [searchField, setSearchField] = React.useState("");
  const [state, dispatch] = React.useReducer(rootReducers, SearchArtists);
  console.log("SATE", state)
  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // console.log('props', this.props)
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Deezer
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleChange}
              inputProps={{ "aria-label": "search" }}
            />
            <Button
              variant="text"
              onClick={() => {
                dispatch(searchArtists(`search?q=${searchField}`, searchField));
              }}
              style={{ color: "white" }}
            >
              Search
            </Button>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
const mapStateToProps = state =>({
   SearchArtists : state.searchArtists,
})

// const mapDispatchToProps = (dispatch) => ({
//   fetchDataAction: () => dispatch(searchArtists())  
// });

export default connect(mapStateToProps, { searchArtists })(PrimarySearchAppBar);
