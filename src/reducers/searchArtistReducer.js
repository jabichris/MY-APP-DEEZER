import { searchActionsTypes } from '../actions-types';
import {SearchArtists as initialState } from '../store/initialState';

const SearchArtists = (state = initialState,  action ) => {
	console.log("state:", state, "action:", action, "types::", action)
  switch (action) {
    case searchActionsTypes.SEARCH_ARTIST_START:
	    console.log("SEARCHSTART")
      return { ...state, artists: [] };
    case searchActionsTypes.SEARCH_ARTIST_SUCCESS:
	console.log("SEARCHSUCCESS")
      // return { ...state, artists: [...state.artists, ...payload.artists] };
    case searchActionsTypes.SEARCH_ARTIST_FAILURE:
	console.log("SEARCHFAIL")
      // return {
      //   ...state,
      //   loading: false,
      //   errors: payload.message
      // };
    default:
      return state;
  }
};

export default SearchArtists;