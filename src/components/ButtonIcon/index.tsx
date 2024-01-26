import { IconProps } from "@phosphor-icons/react";
import { Button } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type IconBoxProps = (props: IconProps) => ReactNode;

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IconBoxProps;
}

export function ButtonIcon({ icon: Icon, ...props }: ButtonIconProps) {
	return (
		<Button type="button" {...props}>
			<Icon size={20} weight="fill" />
		</Button>
	);
}
