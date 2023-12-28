import { InputHTMLAttributes } from "react";
import { Wrapper } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <Wrapper {...props} />;
}
