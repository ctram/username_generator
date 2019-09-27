import PropTypes from "prop-types";
import React from "react";

import "../styles/page.css";
import "../styles/page-home.css";

import RandomUsernameForm from "../components/RandomUsernameForm";
import TableUsernames from "../components/TableUsernames";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernames: []
    };

    this.getRandomUserName = this.getRandomUserName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getRandomUserName({ numUsernamesToShow: 1 });
  }

  getRandomUserName(options = { caseValue: "snake" }) {
    const { caseValue, shouldCapitalize, numUsernamesToShow } = options;

    const url = `http://localhost:3001/api/v1/generate_random_username?case=${options.caseValue}&capitalize=${shouldCapitalize}&num_usernames_to_show=${numUsernamesToShow}`;

    fetch(url, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          usernames: json.usernames
        });
      });
  }

  handleSubmit(options) {
    this.getRandomUserName(options);
  }

  calcWidthOfUsernamesTable() {
    const width = window.innerWidth;

    if (width >= 1920) {
      return 6;
    } else if (width >= 1440) {
      return 5;
    } else if (width >= 1082) {
      return 4;
    } else if (width >= 826) {
      return 3;
    } else if (width >= 560) {
      return 2;
    } else {
      return 1;
    }
  }

  render() {
    const { usernames } = this.state;

    let domMainUsername = usernames[0];

    return (
      <div className="page page-home">
        <h1>Username Generator</h1>
        <div className="my-5">
          <RandomUsernameForm onSubmit={this.handleSubmit} />
        </div>
        {domMainUsername && (
          <div className="my-5 username">{domMainUsername}</div>
        )}
        {usernames.length > 1 && (
          <TableUsernames
            usernames={usernames.slice(1, usernames.length)}
            width={this.calcWidthOfUsernamesTable()}
          />
        )}
      </div>
    );
  }
}
