"use client";

import { useCallback, useState } from "react";
import Field from "./Field";

const MemoizationExample = () => {
  const [value, setValue] = useState({
    value1: "",
    value2: "",
    value3: "",
  });

  const onChange = useCallback((val, field) => {
    console.log(val, field);
    setValue((prev) => ({ ...prev, [field]: val }));
  }, []);

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
