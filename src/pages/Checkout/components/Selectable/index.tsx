import { IconProps } from "@phosphor-icons/react";
import { Select } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { useTheme } from "styled-components";

export type IconBoxProps = (props: IconProps) => ReactNode;

interface SelectableProps extends HTMLAttributes<HTMLDivElement> {
	icon: IconBoxProps;
	children: ReactNode;
	isSelected: boolean;
}

export function Selectable({ icon: Icon, children, isSelected, ...props }: SelectableProps) {
	const theme = useTheme();

	return (
		<Select isselected={isSelected ? "true" : "false"} {...props}>
			<Icon size={20} color={theme.purple} />
			{children}
		</Select>
	);
}
