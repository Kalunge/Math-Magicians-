/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="main mt-5 ">
          <div className="col-8 py-2 zero">
            <p className="px-2 pone">0</p>
          </div>
          <div className="row ">
            <div className="col-2 p-2 bg-light ">
              <span className="p-2 ">AC</span>
            </div>
            <div className="col-2 p-2 bg-light align-items-center">
              <span className="p-2 ">+/-</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">%</span>
            </div>
            <div className="col-2 p-2 orange">
              <span className="p-2  ">÷</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-2 p-2 bg-light">
              <span className="p-2">7</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">8</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">9</span>
            </div>
            <div className="col-2 p-2 orange">
              <span className="p-2  ">X</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">4</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">5</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">6</span>
            </div>
            <div className="col-2 p-2 orange">
              <span className="p-2  ">-</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-2 p-2 bg-light ">
              <span className="p-2">1</span>
            </div>
            <div className="col-2 p-2 bg-light ">
              <span className="p-2 ">2</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">3</span>
            </div>
            <div className="col-2 p-2 orange">
              <span className="p-2  ">+</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-4 p-2 bg-light div-border">
              <span className="p-2 ">0</span>
            </div>
            <div className="col-2 p-2 bg-light">
              <span className="p-2 ">.</span>
            </div>
            <div className="col-2 p-2 orange">
              <span className="p-2  ">=</span>
            </div>
          </div>
          <div className="col-4 " />
        </div>
      </div>
    );
  }
}
