import { searchActionsTypes } from "../actions-types";
import { apiAction } from "../helpers";

export default (url, payload) => (dispatch) =>{
	console.log("dispatch::", dispatch)
  dispatch(
    apiAction({
      method: "get",
      url,
      data: payload,
      onStart: searchActionsTypes.SEARCH_ARTIST_START,
      onEnd: searchActionsTypes.SEARCH_ARTIST_END,
      onSuccess: searchActionsTypes.SEARCH_ARTIST_SUCCESS,
      onFailure: searchActionsTypes.SEARCH_ARTIST_FAILURE,
    })
  );}
