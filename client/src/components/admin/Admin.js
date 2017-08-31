import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import CardList from './form/CardList';

class Admin extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('hello submit');
  }

  renderContent() {
    switch (this.props.admin) {
      default:
        return (
          <div>
            <div className="row">
              <div className="col s12 m6">
                <div className="container">
                  <CardList handleSubmit={this.handleSubmit} />
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card orange darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">test</span>
                    <p>I'm a useless test</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case false:
        return (
          <div>
            <h2>Unauthorized access</h2>
          </div>
        );
      case null:
        return;
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ admin, auth }) {
  return { admin, auth };
}

export default connect(mapStateToProps, actions)(Admin);
