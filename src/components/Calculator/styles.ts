import { StyleSheet } from "react-nativescript";

export const styles = StyleSheet.create({
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
  backspaceButton: {
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
    backgroundColor: "#64B5F6",
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