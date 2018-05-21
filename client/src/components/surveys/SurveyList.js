import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import SurveyListItem from "./SurveyListItem";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length) {
      return this.props.surveys.reverse().map(survey => {
        return <SurveyListItem key={survey._id} {...survey} />;
      });
    } else {
      return <p className="flow-text">No surveys found.</p>;
    }
  }

  render() {
    return (
      <div>
        <h1 className="center-align">Surveys</h1>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
