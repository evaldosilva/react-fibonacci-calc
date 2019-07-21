/*===============================================================================*/
/* Made By Evaldo Silva on 21/07/2019                                            */
/* GITHUB: https://github.com/evaldosilva                                        */
/*===============================================================================*/

import React, { Component, Fragment } from "react";
import Fibonacci from "../../components/Fibonacci/FibonacciComponent";
import "./FibonacciScreen.css";

class FibonacciScreen extends Component {
  // Render the entire screen, with the Fibonacci component and title description.
  render() {
    return (
      <Fragment>
        <div className="title-jumbotron">
          <h3>React Fibonacci Calculator by Evaldo Silva</h3>
          <p>
            <a href="https://github.com/evaldosilva">
              https://github.com/evaldosilva
            </a>
          </p>
          <p>
            A simple Fibonacci Calculator that uses an ASP .Net api made in
            another project that I've made. Both are at my{" "}
            <a href="https://github.com/evaldosilva">GitHub page.</a>
          </p>
          <p>
            It uses <a href="https://www.npmjs.com/package/axios">axios</a> to
            consume the endpoint.
          </p>
          <p>
            Type the max level of the sequence that you want to see and it will
            consume the api's endpoint to return the results. Beware with the
            level that you want (max 999).
          </p>
          <br />
        </div>
        <Fibonacci />
      </Fragment>
    );
  }
}

export default FibonacciScreen;
