import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
// import { Link } from 'react-router-dom';

import CardField from './CardField';

class FormCard extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      type: 'title'
    };
  }

  renderField() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="input-field col s12">
          <Field
            type="text"
            name={`${this.state.type}${this.props.count}`}
            placeholder={this.state.type}
            component={CardField}
          />
        </div>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState({this.state.type= e.target.name});
    this.setState({ type: e.target.name });
    console.log(this.props);
  }

  render() {
    return (
      <div className="card teal white-text row">
        <form className="col s12" onSubmit={this.props.handleSubmit}>
          <div className="row">
            <div className="col s4 center-align">
              <a className="white-text" name="title" onClick={this.handleClick}>
                Title
              </a>
            </div>
            <div className="col s4 center-align">
              <a
                className="white-text"
                name="subtitle"
                onClick={this.handleClick}
              >
                Subtitle
              </a>
            </div>
            <div className="col s4 center-align">
              <a className="white-text" name="text" onClick={this.handleClick}>
                Text
              </a>
            </div>
          </div>
          {this.renderField()}
          <div>
            <input
              type="submit"
              className="btn-flat teal white-text"
              value="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'postForm',
  destroyOnUnmount: false
})(FormCard);
