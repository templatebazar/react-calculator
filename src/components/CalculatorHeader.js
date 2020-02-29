import React from "react";

const CalculatorHeader = ({ input, output }) => {
  console.log("input is:", Boolean(input));
  return (
    <div className="calculator__header">
      <h1 className="calculator__header-input">{input ? input : "0"}</h1>
      {output && input && (
        <h3 className="calculator__header-output">{output}</h3>
      )}
    </div>
  );
};

export default CalculatorHeader;
