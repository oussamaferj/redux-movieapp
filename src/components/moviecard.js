import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Pop from "./movieadd";
class Moviecard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var stars = "★";
    return (
      <div className="card-title">
        {this.props.movies.map(el => (
          <div className="card">
            <p className="card-rating">
              {stars.repeat(el.rate).padEnd(5, "☆")}
            </p>
            <img className="card-image" src={el.image} />
            <h3>
              {el.title}-{el.date}
            </h3>
          </div>
        ))}
        <Pop />
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.containerReducer.movies.filter((el)=>el.title.includes(state.containerReducer.search)));
  return {
    movies: state.containerReducer.movies
      .filter(el => el.rate <= state.containerReducer.rate)
      .filter(el => el.title.includes(state.containerReducer.search))
  };
};
const MovieCardList = connect(mapStateToProps)(Moviecard);
export default MovieCardList;
