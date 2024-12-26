import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";

export function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (num: string) => {
    setDisplay(prev => prev + num);
  };

  const handleOperator = (op: string) => {
    setDisplay(prev => prev + op);
  };

  const calculate = () => {
    try {
      const evalResult = eval(display);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setDisplay("");
    setResult("");
  };

  return (
    <flexboxLayout style={styles.container}>
      <flexboxLayout style={styles.displayContainer}>
        <label className="text-gray-400 text-xl" textWrap={true}>{display}</label>
        <label className="text-3xl font-bold" textWrap={true}>{result}</label>
      </flexboxLayout>

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
        <button row={3} col={1} style={styles.button} onTap={() => handleNumber("0")}>0</button>
        <button row={3} col={2} style={styles.button} onTap={() => handleNumber(".")}>.</button>
        <button row={3} col={3} style={styles.operatorButton} onTap={() => handleOperator("+")}>+</button>
      </gridLayout>

      <button style={styles.equalButton} onTap={() => calculate()}>=</button>

      <label style={styles.credit}>Calc by Aditya Jambale</label>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#f5f5f5"
  },
  displayContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 8
  },
  buttonGrid: {
    marginBottom: 16
  },
  button: {
    margin: 4,
    padding: 16,
    fontSize: 24,
    backgroundColor: "white",
    borderRadius: 8,
    color: "#333"
  },
  clearButton: {
    margin: 4,
    padding: 16,
    fontSize: 24,
    backgroundColor: "#FF9800",
    borderRadius: 8,
    color: "white"
  },
  operatorButton: {
    margin: 4,
    padding: 16,
    fontSize: 24,
    backgroundColor: "#1976D2",
    borderRadius: 8,
    color: "white"
  },
  equalButton: {
    margin: 4,
    padding: 16,
    fontSize: 24,
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: 8
  },
  credit: {
    textAlignment: "center",
    color: "#666",
    fontSize: 14,
    fontFamily: "System",
    marginTop: 20
  }
});