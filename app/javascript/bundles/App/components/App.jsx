import PropTypes from 'prop-types';
import React from 'react';

import HomePage from '../pages/HomePage';

export default class App extends React.Component {
  render() {
    return <div className="p-5">
      <HomePage />
    </div>
  }
}
