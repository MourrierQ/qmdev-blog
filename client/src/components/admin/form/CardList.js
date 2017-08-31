import React, { Component } from 'react';
// import _ from 'lodash';

import FormCard from './FormCard';

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      cards: 1
    };
  }

  renderList() {
    const cards = [];
    for (let i = 0; i < this.state.cards; i++) {
      cards.push(i);
    }
    return cards.map((i = 0) => {
      i++;
      return (
        <li key={i}>
          <FormCard handleSubmit={this.props.handleSubmit} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.renderList()}
          </ul>
        </div>
        <button
          onClick={() => this.setState({ cards: this.state.cards + 1 })}
          className="waves-effect waves-light btn"
        >
          Add Card
        </button>
      </div>
    );
  }
}

export default CardList;
