import {
  ADD_MOVIE,
  TOGGLE_POPUP,
  SEARCH_MOVIE,
  SEARCH_MOVIETEXT
} from "../constants/action-types";
export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}
export function showPopup(payload) {
  return { type: TOGGLE_POPUP, payload };
}
export function searchMovie(payload) {
  return { type: SEARCH_MOVIE, payload };
}
export function searchMovietext(payload) {
  return { type: SEARCH_MOVIETEXT, payload };
}
