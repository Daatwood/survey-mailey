import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="card indigo lighten-5">
        <div className="card-content ">
          <span className="card-title teal-text">New Campaign Survey</span>
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <div className="card-action">
              <Link to="/surveys" className="red btn-flat white-text">
                Cancel
                <i className="material-icons right">cancel</i>
              </Link>
              <button className="green btn-flat right white-text" type="submit">
                Next
                <i className="material-icons right">done</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ name, required }) => {
    if (!values[name]) errors[name] = "Required";
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
