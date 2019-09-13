import React from "react";
import ReactDOM from "react-dom";
import { showPopup, addMovie } from "../actions/actions";
import { connect } from "react-redux";
class Movieadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "",
      title: "",
      image: "",
      date: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  clickevent = event => {
    const title = this.state.title;
    const rate = this.state.rate;
    const image = this.state.image;
    const date = this.state.date;
    this.props.addMovie({ image, date, rate, title });
  };
  toggle = () => {
    this.props.togglePopup();
  };
  render() {
    const title = this.state.title;
    const rate = this.state.rate;
    const image = this.state.image;
    const date = this.state.date;
    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <h1>Add Movie</h1>
            <button className="btnclose" onClick={this.toggle}>
              ×
            </button>
            <div className="movieadd">
              <p>Picture Url :</p>
              <input
                type="text"
                id="image"
                value={image}
                onChange={this.handleChange}
              />
              <p>Title :</p>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
              <p>Rate :</p>
              <input
                type="text"
                id="rate"
                value={rate}
                onChange={this.handleChange}
                maxLength="1"
              />
              <p>Date :</p>
              <input
                type="text"
                id="date"
                value={date}
                onChange={this.handleChange}
              />
              <button className="btnadd" onClick={this.clickevent}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Popup extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle = () => {
    this.props.togglePopup();
  };
  render() {
    return (
      <div>
        <div className="card">
          <label className="plus" onClick={this.toggle}>
            +
          </label>
        </div>
        {this.props.popup ? <ConnectedMoviecard /> : null}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    togglePopup: popup => dispatch(showPopup(popup)),
    addMovie: movie => dispatch(addMovie(movie))
  };
}
const mapStateToProps = state => {
  return { popup: state.popupReducer };
};
const ConnectedMoviecard = connect(
  null,
  mapDispatchToProps
)(Movieadd);
const pop = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
export default pop;
