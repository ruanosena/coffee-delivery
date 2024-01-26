import styled from "styled-components";

export const InputStyled = styled.input`
	padding: 0.75rem;
	border: 1px solid ${(props) => props.theme["base-button"]};
	border-radius: 4px;
	font-size: 0.875rem;
	color: ${(props) => props.theme["base-text"]};
	background: ${(props) => props.theme["base-input"]};
	z-index: 0;

	&::placeholder {
		font-size: 0.875rem;
		color: ${(props) => props.theme["base-label"]};
	}
`;
