import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialState = {
    total: 0,
    next: null,
    operation: null,
  };

  const [stateObject, setStateObject] = useState({ ...initialState });

  const handleCalculation = (e) => {
    const obj = { ...stateObject, ...calculate(stateObject, e.target.name) };
    setStateObject(obj);
  };

  const firstRow = ['AC', '+/-', '%'];
  const secondRow = [9, 8, 7];
  const thirdRow = [6, 5, 4];
  const fourthRow = [3, 2, 1];

  const { total, operation, next } = stateObject;
  return (
    <>
      <div className="container row d-flex">
        <div className=" mt-5 math col-4">
          <h1>Lets do some Math</h1>
        </div>
        <div className="main ">
          <div className="col-8 py-2 zero">
            <span className="px-1 mr-5 pone">{total}</span>
            <span className="px-1 mr-5 pone">{operation}</span>
            <span className="px-1 mr-5 pone">{next}</span>
          </div>
          <div className="row">
            {firstRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button
                  type="button"
                  className="p-2 btn col-sm "
                  name={item}
                  onClick={handleCalculation}
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
                onClick={handleCalculation}
              >
                ÷
              </button>
            </div>
          </div>
          <div className="row ">
            {secondRow.map((item) => (
              <div className="col-2 p-2 bg-light  " key={item}>
                <button
                  onClick={handleCalculation}
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
                onClick={handleCalculation}
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
                  onClick={handleCalculation}
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
                onClick={handleCalculation}
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
                  onClick={handleCalculation}
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
                onClick={handleCalculation}
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
                onClick={handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="0"
              >
                0
              </button>
            </div>
            <div className="col-2 p-2 bg-light">
              <button
                onClick={handleCalculation}
                type="button"
                className="p-2 btn col-sm "
                name="."
              >
                .
              </button>
            </div>
            <div className="col-2 p-2 orange">
              <button
                onClick={handleCalculation}
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
    </>
  );
};

export default Calculator;
