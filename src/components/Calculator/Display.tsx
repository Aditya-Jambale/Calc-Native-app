import * as React from "react";
import { styles } from "./styles";

interface DisplayProps {
  expression: string;
  result: string;
}

export function Display({ expression, result }: DisplayProps) {
  return (
    <flexboxLayout style={styles.displayContainer}>
      <label className="text-gray-400 text-xl" textWrap={true}>{expression}</label>
      <label className="text-3xl font-bold" textWrap={true}>{result}</label>
    </flexboxLayout>
  );
}