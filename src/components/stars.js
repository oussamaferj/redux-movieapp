import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { searchMovie } from "../actions/actions";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: "",
      rating: 0,
      star: "★★★★★"
    };
  }
  Rating = event => {
    var starchange = "";
    var myString = event.target.className.substr(-1);
    for (let i = 0; i < Number(myString); i++) {
      starchange = starchange + "★";
    }
    this.setState({
      star: starchange.padEnd(5, "☆")
    });
    this.props.searchMovie(Number(event.target.className.substr(-1)));
  };
  render() {
    var stars = [];
    for (let i = 0; i < this.state.star.length; i++) {
      stars.push(
        <button
          key={i}
          className={`star${i + 1}`}
          onClick={this.Rating}
          onChange={this.rate}
        >
          {this.state.star[i]}
        </button>
      );
    }
    return <div className="star-rating">{stars} </div>;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    searchMovie: stars => dispatch(searchMovie(stars))
  };
}
const Moviesearch = connect(
  null,
  mapDispatchToProps
)(Search);
export default Moviesearch;
