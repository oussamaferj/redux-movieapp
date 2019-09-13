import React from "react";
import ReactDOM from "react-dom";
import MovieCardList from "./moviecard";
import Search from "./search";
import Stars from "./stars";

class Moviecontainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Search />
        <Stars />
        <MovieCardList />
      </div>
    );
  }
}

export default Moviecontainer;
