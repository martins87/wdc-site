"use client";

import { FC, useState } from "react";

type InputProps = {
  placeholder: string;
};

const Input: FC<InputProps> = ({ placeholder }) => {
  const [value, setValue] = useState<string>("");

  const onInput = (e: any) => {
    const v: string = e.target.value;
    setValue(v);
  };

  return (
    <input
      className="min-h-20 py-2 px-6 outline-none bg-card_background rounded-2xl text-white text-xl placeholder:text-custom_gray"
      type="text"
      value={value}
      onChange={onInput}
      placeholder={placeholder}
    />
  );
};

export default Input;
