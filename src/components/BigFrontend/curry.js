const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`);
  return `${a}_${b}_${c}`;
};

// method 1
function curry(fn) {
  return function (...args) {
    if (args.length === fn.length) {
      return fn(...args);
    }
    return fn.bind(this, ...args);
  };
}

//method 2

function curry2(fn) {
  const inner = function (...args) {
    if (args.length < fn.length) {
      return (...newArgs) => inner(...args, ...newArgs);
    }
    return fn(...args);
  };
  return inner;
}

// curried placeholder
const removePlaceHolders = (args, placeholer) => {
  return args.filter((arg) => arg !== placeholer);
};

function curry2(fn) {
  curry2.placeholder = "$";
  const inner = function (...args) {
    args = removePlaceHolders(args, placeholder);
    if (args.length < fn.length) {
      return (...newArgs) => inner(...args, ...newArgs);
    }
    return fn(...args);
  };
  return inner;
}

const curriedJoin = curry2(join);
const placeholder = curry2.placeholder;
curriedJoin(1, placeholder, 2, 3); // '1_2_3'
curriedJoin(1)(placeholder)(2, 3); // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'
