import * as React from "react";
import { useState } from "react";
import { Display } from "./Display";
import { styles } from "./styles";
import { calculate } from "./utils";

export function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (num: string) => {
    setDisplay(prev => prev + num);
  };

  const handleOperator = (op: string) => {
    setDisplay(prev => prev + op);
  };

  const handleCalculate = () => {
    setResult(calculate(display));
  };

  const clear = () => {
    setDisplay("");
    setResult("");
  };

  const handleBackspace = () => {
    setDisplay(prev => prev.slice(0, -1));
    setResult("");
  };

  return (
    <flexboxLayout style={styles.container}>
      <Display expression={display} result={result} />

      <gridLayout rows="auto,auto,auto,auto" columns="*,*,*,*" style={styles.buttonGrid}>
        <button row={0} col={0} style={styles.button} onTap={() => handleNumber("7")}>7</button>
        <button row={0} col={1} style={styles.button} onTap={() => handleNumber("8")}>8</button>
        <button row={0} col={2} style={styles.button} onTap={() => handleNumber("9")}>9</button>
        <button row={0} col={3} style={styles.operatorButton} onTap={() => handleOperator("/")}>÷</button>

        <button row={1} col={0} style={styles.button} onTap={() => handleNumber("4")}>4</button>
        <button row={1} col={1} style={styles.button} onTap={() => handleNumber("5")}>5</button>
        <button row={1} col={2} style={styles.button} onTap={() => handleNumber("6")}>6</button>
        <button row={1} col={3} style={styles.operatorButton} onTap={() => handleOperator("*")}>×</button>

        <button row={2} col={0} style={styles.button} onTap={() => handleNumber("1")}>1</button>
        <button row={2} col={1} style={styles.button} onTap={() => handleNumber("2")}>2</button>
        <button row={2} col={2} style={styles.button} onTap={() => handleNumber("3")}>3</button>
        <button row={2} col={3} style={styles.operatorButton} onTap={() => handleOperator("-")}>-</button>

        <button row={3} col={0} style={styles.clearButton} onTap={() => clear()}>C</button>
        <button row={3} col={1} style={styles.backspaceButton} onTap={() => handleBackspace()}>⌫</button>
        <button row={3} col={2} style={styles.button} onTap={() => handleNumber("0")}>0</button>
        <button row={3} col={3} style={styles.operatorButton} onTap={() => handleOperator("+")}>+</button>
      </gridLayout>

      <gridLayout columns="*,*" style={styles.buttonGrid}>
        <button col={0} style={styles.button} onTap={() => handleNumber(".")}>.</button>
        <button col={1} style={styles.equalButton} onTap={() => handleCalculate()}>=</button>
      </gridLayout>

      <label style={styles.credit}>Calc by Aditya Jambale</label>
    </flexboxLayout>
  );
}