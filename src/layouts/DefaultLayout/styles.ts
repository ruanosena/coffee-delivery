import styled from "styled-components";

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;

	max-width: 80rem;
	margin: 0 auto;
	padding: 0 1rem;

	background: ${(props) => props.theme.background};
`;
