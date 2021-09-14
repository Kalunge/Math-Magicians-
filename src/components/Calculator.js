/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const firstRow = ['AC', '+/-', '%'];
    const secondRow = [9, 8, 7];
    const thirdRow = [6, 5, 4];
    const fourthRow = [3, 2, 2];

    return (
      <div className="container">
        <div className="main mt-5 ">
          <div className="col-8 py-2 zero">
            <p className="px-2 pone">0</p>
          </div>
          <div className="row ">
            {firstRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button type="button" className="p-2 btn col-sm ">
                  {item}
                </button>
              </div>
            ))}

            <div className="col-2 p-2 orange">
              <button type="button" className="p-2 btn col-sm ">
                ÷
              </button>
            </div>
          </div>
          <div className="row ">
            {secondRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button type="button" className="p-2 btn col-sm ">
                  {item}
                </button>
              </div>
            ))}
            <div className="col-2 p-2 orange">
              <button type="button" className="p-2 btn col-sm ">
                X
              </button>
            </div>
          </div>
          <div className="row ">
            {thirdRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button type="button" className="p-2 btn col-sm ">
                  {item}
                </button>
              </div>
            ))}
            <div className="col-2 p-2 orange">
              <button type="button" className="p-2 btn col-sm ">
                -
              </button>
            </div>
          </div>
          <div className="row ">
            {fourthRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button type="button" className="p-2 btn col-sm ">
                  {item}
                </button>
              </div>
            ))}
            <div className="col-2 p-2 orange">
              <button type="button" className="p-2 btn col-sm ">
                +
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="col-4 p-2 bg-light div-border">
              <button type="button" className="p-2 btn col-sm ">
                0
              </button>
            </div>
            <div className="col-2 p-2 bg-light">
              <button type="button" className="p-2 btn col-sm ">
                .
              </button>
            </div>
            <div className="col-2 p-2 orange">
              <button type="button" className="p-2 btn col-sm ">
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
