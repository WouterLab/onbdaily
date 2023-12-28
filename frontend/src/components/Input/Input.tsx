import { ChangeEvent } from "react";
import { Wrapper } from "./styled";

export function Input({
  placeholder,
  value,
  onChange,
  type,
}: {
  placeholder: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Wrapper
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
