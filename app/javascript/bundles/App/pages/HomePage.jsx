import PropTypes from "prop-types";
import React from "react";

import "../styles/page.css";
import "../styles/page-home.css";

export default class HomePage extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/something_random", {
      method: "GET",
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="page page-home">
        <h1>Username Generator</h1>
      </div>
    );
  }
}
