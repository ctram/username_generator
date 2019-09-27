import PropTypes from "prop-types";
import React from "react";

export default class RandomUsernameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caseValue: "snake",
      shouldCapitalize: false
    };

    this.handleChangeCase = this.handleChangeCase.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCapitalize = this.handleChangeCapitalize.bind(this);
  }

  handleChangeCase(e) {
    this.setState({ caseValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  handleChangeCapitalize(e) {
    this.setState({ shouldCapitalize: e.target.checked });
  }

  render() {
    const { caseValue, shouldCapitalize } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="text-left">
        <div className="form-check">
          <input onChange={this.handleChangeCapitalize} type="checkbox" checked={shouldCapitalize} id="checkbox-capitalize" className="form-check-input"/>
          <label htmlFor="checkbox-capitalize" className="form-check-label">Capitalize</label>
        </div>
        <fieldset className="text-left">
          <legend>Case</legend>
          <div className="form-check">
            <input
              type="radio"
              id="radio-snake-case"
              className="form-check-input"
              value="snake"
              checked={caseValue === "snake"}
              onChange={this.handleChangeCase}
            />
            <label htmlFor="radio-snake-case" className="form-check-label">
              Snake Case
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="radio-camel-case"
              className="form-check-input"
              value="camel"
              checked={caseValue === "camel"}
              onChange={this.handleChangeCase}
            />
            <label htmlFor="radio-camel-case" className="form-check-label">
              Camel Case
              <small className="form-text text-muted">Camel case is always capitalized</small>
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="radio-hyphen-case"
              className="form-check-input"
              value="hyphen"
              checked={caseValue === "hyphen"}
              onChange={this.handleChangeCase}
            />
            <label htmlFor="radio-hyphen-case" className="form-check-label">
              Hyphen Case
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="radio-space-case"
              className="form-check-input"
              value="space"
              checked={caseValue === "space"}
              onChange={this.handleChangeCase}
            />
            <label htmlFor="radio-space-case" className="form-check-label">
              Space-between Case
            </label>
          </div>
        </fieldset>
        <button className="btn btn-primary mt-5">Random Username</button>
      </form>
    );
  }
}
