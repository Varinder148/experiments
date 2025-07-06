/**
 * @param {string[]} tokens
 * @return {number}
 */

const operate = (sym, value1, value2) => {
  switch (sym) {
    case "/":
      return parseInt(value1 / value2);
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    // default: return -1
  }
};

var evalRPN = function (tokens) {
  const stack = [];
  if (tokens.length === 1) {
    return tokens[0];
  }
  tokens.forEach((token) => {
    if (token.match(/\d/)) {
      stack.push(token);
    } else {
      console.log(stack);

      let ele1 = stack.pop();
      let ele2 = stack.pop();
      let tempRes = operate(token, Number(ele2), Number(ele1));
      stack.push(tempRes);
    }
  });

  return stack.pop();
};

console.log(evalRPN(["18"]));
