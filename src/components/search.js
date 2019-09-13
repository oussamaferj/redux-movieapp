import React from "react";
import ReactDOM from "react-dom";
import { searchMovietext } from "../actions/actions";
import { connect } from "react-redux";
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  changetext = event => {
    this.props.searchMovietext(event.target.value);
    if (event.target.value === "") {
      this.props.searchMovietext("");
    }
  };
  render() {
    return (
      <div>
        <form className="example">
          <input
            type="text"
            placeholder="Type Movie Name to Search"
            name="search"
            onChange={this.changetext}
          />
          <button value="Search">
            <i className="fa fa-search" />
            Search
          </button>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    searchMovietext: text => dispatch(searchMovietext(text))
  };
}
const MovieSearch = connect(
  null,
  mapDispatchToProps
)(Search);
export default MovieSearch;
