"use client";

import { useCallback, useState } from "react";
import Field from "./Field";

const throttle = function (callback, interval) {
  let triggeredAt = Date.now();
  let timer = null;
  return function () {
    const now = Date.now();
    if (now - triggeredAt >= interval) {
      triggeredAt = now;
      callback();
    }
    // else {
    //   if (!timer) {
    //     const remainingTime = interval - (Date().now - triggeredAt);
    //     timer = setTimeout(() => {
    //       triggeredAt = Date.now();
    //       callback();
    //       timer = null;
    //     }, remainingTime);
    //   }
    // }
  };
};

const cb = () => console.log("hello");
const func = throttle(cb, 5000);

const MemoizationExample = () => {
  const [value, setValue] = useState({
    value1: "",
    value2: "",
    value3: "",
  });

  const onChange = useCallback((val, field) => {
    func();
    setValue((prev) => ({ ...prev, [field]: val }));
  }, []);

  const debounce = function (callback, interval) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, interval);
    };
  };

  return (
    <div className="w-[500px] flex flex-col gap-5">
      {Object.keys(value).map((val, index) => (
        <Field
          value={value[val]}
          onChange={onChange}
          name={`value${index + 1}`}
        />
      ))}
    </div>
  );
};

export default MemoizationExample;
