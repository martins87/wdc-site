"use client";

import { FC, useState } from "react";

type TextareaProps = {
  placeholder: string;
};

const Textarea: FC<TextareaProps> = ({ placeholder }) => {
  const [value, setValue] = useState<string>("");

  const onInput = (e: any) => {
    const v: string = e.target.value;
    setValue(v);
  };

  return (
    <textarea
      className="w-full min-h-40 mt-2 py-6 pb-2 px-6 outline-none bg-card_background rounded-2xl text-white text-xl placeholder:text-custom_gray"
      value={value}
      onChange={onInput}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
