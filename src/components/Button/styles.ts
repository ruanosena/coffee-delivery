import styled, { css } from "styled-components";

export type ButtonSizeStyleProps = "small" | "normal";

interface ButtonStyleProps {
	size: ButtonSizeStyleProps;
}

export const ButtonStyled = styled.button<ButtonStyleProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) =>
		props.size == "normal"
			? css`
					height: 2.875rem;
					padding: 0.75rem;
					font-size: 0.875rem;
					font-weight: bold;
			  `
			: css`
					height: 2.375rem;
					padding: 0.5rem;
					font-size: 0.75rem;
			  `}
	color: ${(props) => props.theme["base-text"]};
	background: ${(props) => props.theme["base-button"]};
	border: 0;
	border-radius: 6px;
	line-height: 1.6;
	cursor: pointer;
	text-transform: uppercase;
`;
