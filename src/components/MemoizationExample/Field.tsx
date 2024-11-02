import { Input } from "antd";
import { useEffect, useRef, memo } from "react";

const Field = ({ value, onChange, name }) => {
  const ref = useRef(0);

  useEffect(() => {
    ref.current++;
  });
  return (
    <div>
      {ref.current}
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
      ></Input>
    </div>
  );
};

export default memo(Field);
