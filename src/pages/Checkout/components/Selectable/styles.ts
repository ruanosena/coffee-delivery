import styled, { css } from "styled-components";

interface SelectStyleProps {
	isselected: "false" | "true";
}

export const Select = styled.div<SelectStyleProps>`
	display: flex;
	align-items: center;
	column-gap: 0.75rem;
	height: 2.375rem;
	padding: 1rem;
	background: ${(props) => props.theme["base-button"]};
	border: 0;
	border-radius: 6px;
	line-height: 1.6;
	text-transform: uppercase;
	font-size: 0.75rem;
	cursor: pointer;
	${(props) =>
		props.isselected == "true" &&
		css`
			box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
		`}
`;
