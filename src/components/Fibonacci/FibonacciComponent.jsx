/*===============================================================================*/
/* Made By Evaldo Silva on 21/07/2019                                            */
/* GITHUB: https://github.com/evaldosilva                                        */
/*===============================================================================*/

import React, { Component, Fragment } from "react";
import axios from "axios";
import { ENDPOINT_FIBONACCI } from "../../utils/FibonacciUtils";
import "./FibonacciComponent.css";

// Fake control for React keys in arrays. In this case, the fibonacci sequence
// has 2 numbers 1, so I can't use the own number as key.
let keyControl = 0;

class FibonacciComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fibonacciLevel: 0, fibonacciValues: [], errorMessage: "" };
    this.onClickGetFibonacci = this.onClickGetFibonacci.bind(this);
    this.onChangeFibonacciLevel = this.onChangeFibonacciLevel.bind(this);
  }

  onChangeFibonacciLevel(e) {
    this.setState({ fibonacciLevel: e.target.value });
  }

  onClickGetFibonacci() {
    // Reset some values
    keyControl = 0;
    this.setState({ errorMessage: "" });
    this.setState({ fibonacciValues: [] });

    // Check if the typed value is a number
    if (isNaN(this.state.fibonacciLevel)) {
      this.setState({ errorMessage: "The level must be a number." });
    } else {
      // It it is, do the endpoint search using axios
      axios
        .get(ENDPOINT_FIBONACCI + "?level=" + this.state.fibonacciLevel)
        .then(
          response => {
            this.setState({ fibonacciValues: response.data });
          },
          error => {
            this.setState({ errorMessage: error.message });
          }
        );
    }
  }

  render() {
    // Render the input, button and result of fibonacci search.
    return (
      <Fragment>
        <div className="fibonacci-frame">
          <div>
            Type the level of the sequence:{" "}
            {this.state.errorMessage === "" ? (
              ""
            ) : (
              <span className="error-message">{this.state.errorMessage}</span>
            )}
          </div>
          <div>
            <input onChange={this.onChangeFibonacciLevel} />
          </div>
          <button
            className="standard-normal-button"
            onClick={this.onClickGetFibonacci}
          >
            Get the sequence
          </button>
        </div>
        <div>
          {this.state.fibonacciValues.map(sequenceValue => (
            <div className="fibonacci-value" key={keyControl++}>
              {sequenceValue}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default FibonacciComponent;
