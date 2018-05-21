import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSurvey } from "../../actions";
class SurveyListItem extends Component {
  render() {
    return (
      <div className="card indigo lighten-5">
        <div className="card-content indigo-text text-lighten-2">
          <a
            style={{ cursor: "pointer" }}
            className="red-text right flow-text"
            onClick={() => this.props.deleteSurvey(this.props._id)}>
            x
          </a>
          <span className="card-title teal-text">{this.props.title}</span>
          <p className="flow-text">{this.props.body}</p>
          <p className="right grey-text">
            Sent On: {new Date(this.props.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a className="teal-text">Yes: {this.props.yes}</a>
          <a className="teal-text">No: {this.props.no}</a>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteSurvey })(SurveyListItem);
