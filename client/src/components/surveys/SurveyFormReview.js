import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name} className="center">
        <label className="indigo-text text-lighten-2">{label}</label>
        <div className="flow-text" style={{ wordWrap: "break-word" }}>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="card indigo lighten-5">
      <div className="card-content">
        <span className="card-title teal-text">Campaign Survey Review</span>
        <p className="indigo-text">Please confirm your entries</p>
        {reviewFields}
        <div className="card-action">
          <button
            className="yellow darken-3 btn-flat white-text"
            onClick={onCancel}>
            Change
            <i className="material-icons right">edit</i>
          </button>
          <button
            className="green btn-flat right white-text"
            onClick={() => submitSurvey(formValues, history)}>
            Send Survey
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
