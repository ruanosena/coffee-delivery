import { InputHTMLAttributes } from "react";
import { InputStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
	return <InputStyled type="text" {...props} />;
}
