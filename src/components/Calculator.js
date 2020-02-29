import React, { useState, useEffect } from "react";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorBody from "./CalculatorBody";
import mexp from "math-expression-evaluator";

const Calculator = () => {
  const [calcKeys, setCalcKeys] = useState([
    "AC",
    "DEL",
    "^",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "="
  ]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const addInput = userInput => {
    setInput(input.concat(userInput));
  };
  useEffect(() => {
    try {
      if (input == output) {
        setOutput("");
      } else {
        setOutput(mexp.eval(input));
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [input]);

  const allClear = () => {
    setInput("");
    setOutput("");
  };

  const del = () => {
    setInput(input.substring(0, input.length - 1));
  };

  const equals = () => {
    setInput(output.toString());
  };
  return (
    <div className="calculator">
      <CalculatorHeader input={input} output={output} />
      <CalculatorBody
        calcKeys={calcKeys}
        addInput={addInput}
        allClear={allClear}
        del={del}
        equals={equals}
      />
    </div>
  );
};

export default Calculator;
