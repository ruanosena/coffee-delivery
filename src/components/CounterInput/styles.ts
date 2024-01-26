import styled from "styled-components";

export const CounterContainer = styled.div`
	display: flex;
	background: ${(props) => props.theme["base-button"]};
	border-radius: 6px;
	overflow: hidden;
	padding: 2px;

	> button {
		border: 0;
		border-radius: 2px;
		z-index: 1;
		color: ${(props) => props.theme["purple"]};
	}
`;

export const Input = styled.input`
	max-width: 2rem;
	text-align: center;
	background: ${(props) => props.theme["base-button"]};
	border-radius: 2px;
	border: 0;
	-moz-appearance: textfield;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
