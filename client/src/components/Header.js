import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderAdmin() {
    if (this.props.admin) {
      return (
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      );
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null: //Request still pending
        return;
      case false: //When user is not logged in
        return (
          <li>
            <a href="/auth/google">Log In With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log Out</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="teal">
        <div className="nav-wrapper container">
          <a href="" className="brand-logo">
            QMDev
          </a>
          <ul className="right hide-on-med-and-down">
            {this.renderAdmin()}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth, admin }) {
  return { auth, admin };
}

export default connect(mapStateToProps)(Header);
