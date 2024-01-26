import { IconProps } from "@phosphor-icons/react";
import { ButtonSizeStyleProps, ButtonStyled } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { useTheme } from "styled-components";

export type IconBoxProps = (props: IconProps) => ReactNode;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSizeStyleProps;
	leftIcon?: IconBoxProps;
	children: ReactNode;
}

export function Button({ leftIcon: LeftIcon, size = "small", children, ...props }: ButtonProps) {
	const theme = useTheme();

	return (
		<ButtonStyled type="button" size={size} {...props}>
			{LeftIcon && <LeftIcon size={20} color={theme.purple} style={{ marginRight: 4 }} />}
			{children}
		</ButtonStyled>
	);
}
