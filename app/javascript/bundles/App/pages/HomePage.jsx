import PropTypes from "prop-types";
import React from "react";

import "../styles/page.css";
import "../styles/page-home.css";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/something_random", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          username: json.username
        });
      });
  }

  render() {
    const { username } = this.state;

    let domUsername = username;

    return (
      <div className="page page-home">
        <h1>Username Generator</h1>
        {domUsername && <div className="my-5 username">{domUsername}</div>}
        <button className="btn btn-primary">Random Username</button>
      </div>
    );
  }
}
