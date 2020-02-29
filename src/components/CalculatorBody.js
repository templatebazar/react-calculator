import React from "react";

const CalculatorBody = ({ calcKeys, addInput, allClear, del, equals }) => {
  return (
    <div className="calculator__body">
      {calcKeys.map(keys => {
        if (keys == "AC") {
          return (
            <button className="calculator__keys" onClick={allClear}>
              {keys}
            </button>
          );
        } else if (keys == "DEL") {
          return (
            <button className="calculator__keys" onClick={del}>
              {keys}
            </button>
          );
        } else if (keys == "=") {
          return (
            <button className="calculator__keys calculator__keys-equal" onClick={equals}>
              {keys}
            </button>
          );
        } else {
          return (
            <button className="calculator__keys" onClick={() => addInput(keys)}>
              {keys}
            </button>
          );
        }
      })}
    </div>
  );
};

export default CalculatorBody;
