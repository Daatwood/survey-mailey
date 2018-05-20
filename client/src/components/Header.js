import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
            <i className="large material-icons">monetization_on</i>
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
            Feedback Assist
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
