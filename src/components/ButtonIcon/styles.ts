import styled from "styled-components";

export const Button = styled.button`
	height: 2.375rem;
	padding: 0.5rem;
	background: ${(props) => props.theme["base-button"]};
	border: 0;
	border-radius: 6px;
	line-height: 1;
	cursor: pointer;
`;
