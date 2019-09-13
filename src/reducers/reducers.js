import { ADD_MOVIE,TOGGLE_POPUP,SEARCH_MOVIE,SEARCH_MOVIETEXT } from "../constants/action-types";
import { combineReducers } from 'redux'
const initialState = {
    search:"",
    rate:5,
    movies : [
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
          date: "2014",
          rate: 5,
          title: "interstellar"
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
          date: "2017",
          rate: 4,
          title: "getout"
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          date: "2019",
          rate: 5,
          title: "avengers endgame"
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          date: "2019",
          rate: 5,
          title: "avengers endgame"
        }
      ]
  };
  
function containerReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE) {
      if (action.payload.title==="" || action.payload.image==="" || action.payload.rate==="" || action.payload.date===""){
      alert("Invalide Inputs");
      }
      else{
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    
    });
  }}
  else  if (action.type === SEARCH_MOVIE) {
  return Object.assign({}, state, {
    rate:state.rate=action.payload,
  });
}
else  if (action.type === SEARCH_MOVIETEXT) {
    return Object.assign({}, state, {
      search:state.search=action.payload,
    });
  }
  return state;
}
function popupReducer(state = false, action) {
    if (action.type === TOGGLE_POPUP) {
       return !state;
      };
      return state;
    }
export default combineReducers({
    containerReducer,
    popupReducer,
  })
