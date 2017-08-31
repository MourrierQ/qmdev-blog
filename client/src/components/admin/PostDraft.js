import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const PostDraft = ({ formValues }) => {
  const title = [];
  const subtitle = [];
  const text = [];
  const content = [];

  function getContent() {
    if (formValues && formValues.values) {
      for (
        let i = 1;
        formValues.values[`title${i}`] ||
        formValues.values[`subtitle${i}`] ||
        formValues.values[`text${i}`];
        i++
      ) {
        if (formValues.values[`title${i}`]) {
          title.push(formValues.values[`title${i}`]);
        } else if (formValues.values[`subtitle${i}`]) {
          subtitle.push(formValues.values[`subtitle${i}`]);
        } else if (formValues.values[`text${i}`]) {
          text.push(formValues.values[`text${i}`]);
        }
      }
    }
  }

  const renderTitle = i => {
    return (
      <div key={i}>
        <h3>
          {title[i]}
        </h3>
      </div>
    );
  };
  const renderSubtitle = i => {
    return (
      <div key={i}>
        <h5>
          {subtitle[i]}
        </h5>
      </div>
    );
  };
  const renderText = i => {
    return (
      <div key={i}>
        <p>
          {text[i]}
        </p>
      </div>
    );
  };

  const renderDraft = () => {
    getContent();
    for (let i = 0; i < title.length; i++) {
      content.push(renderTitle(i));
      for (let j = 0; j < subtitle.length; j++) {
        content.push(renderSubtitle(j));
        for (let k = 0; k < text.length; k++) {
          content.push(renderText(k));
        }
      }
    }
    console.log(title, subtitle, text);
  };

  return (
    <div>
      {renderDraft()}
      {content}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.postForm
  };
}

export default connect(mapStateToProps, actions)(withRouter(PostDraft));
