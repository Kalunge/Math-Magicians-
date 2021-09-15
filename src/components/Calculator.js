import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleCalculation(e) {
    const obj = calculate(this.state, e.target.name);
    this.setState(obj);
  }

  render() {
    const firstRow = ['AC', '+/-', '%'];
    const secondRow = [9, 8, 7];
    const thirdRow = [6, 5, 4];
    const fourthRow = [3, 2, 1];

    const { total, next, operation } = this.state;

    return (
      <div className="container">
        <div className="main mt-5  mx-5">
          <div className="col-8 py-2 zero">
            <span className="px-1 pone">{total}</span>
            <span className="px-1 pone">{operation}</span>
            <span className="px-1 pone">{next}</span>
          </div>
          <div className="row">
            {firstRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button
                  type="button"
                  className="p-2 btn col-sm "
                  name={item}
                  onClick={this.handleCalculation}
                >
                  {item}
                </button>
              </div>
            ))}

            <div className="col-2 p-2 orange">
              <button
                type="button"
                className="p-2 btn col-sm "
                name="÷"
                onClick={this.handleCalculation}
              >
                ÷
              </button>
            </div>
          </div>
          <div className="row ">
            {secondRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button
                  onClick={this.handleCalculation}
                  type="button"
                  className="p-2 btn col-sm "
                  name={item}
                >
                  {item}
                </button>
              </div>
            ))}
            <div className="col-2 p-2 orange">
              <button
                onClick={this.handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="x"
              >
                X
              </button>
            </div>
          </div>
          <div className="row ">
            {thirdRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button
                  onClick={this.handleCalculation}
                  type="button"
                  className="p-2 btn col-sm "
                  name={item}
                >
                  {item}
                </button>
              </div>
            ))}
            <div className="col-2 p-2 orange">
              <button
                onClick={this.handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="-"
              >
                -
              </button>
            </div>
          </div>
          <div className="row ">
            {fourthRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button
                  onClick={this.handleCalculation}
                  type="button"
                  className="p-2 btn col-sm "
                  name={item}
                >
                  {item}
                </button>
              </div>
            ))}
            <div className="col-2 p-2 orange">
              <button
                onClick={this.handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="+"
              >
                +
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="col-4 p-2 bg-light div-border">
              <button
                onClick={this.handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="0"
              >
                0
              </button>
            </div>
            <div className="col-2 p-2 bg-light">
              <button
                onClick={this.handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="."
              >
                .
              </button>
            </div>
            <div className="col-2 p-2 orange">
              <button
                onClick={this.handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="="
              >
                =
              </button>
            </div>
          </div>
          <div className="col-4 " />
        </div>
      </div>
    );
  }
}
