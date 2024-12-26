export const calculate = (expression: string): string => {
  try {
    const evalResult = eval(expression);
    return evalResult.toString();
  } catch (error) {
    return "Error";
  }
};