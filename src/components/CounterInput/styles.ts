import styled from "styled-components";

export const CounterContainer = styled.div`
	display: flex;
	background: ${(props) => props.theme["base-button"]};
	border-radius: 6px;
	overflow: hidden;

	> button {
		border: 0;
		color: ${(props) => props.theme["purple"]};
	}
`;

export const Input = styled.input`
	max-width: 2.5rem;
	text-align: center;
	background: ${(props) => props.theme["base-button"]};
	border: 0;
`;
