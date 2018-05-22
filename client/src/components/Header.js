import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <GoogleButton
              type="light"
              onClick={() => {
                window.location = "/auth/google";
              }}
              style={{ margin: "6px" }}
            />
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            <i className="material-icons left">monetization_on</i>
            {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ padding: "0 20px" }}>
            Survey Mailey
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// State is from reducer, auth is property on authReducer
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
