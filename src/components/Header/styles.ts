import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-self: stretch;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;

	nav {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}
`;

export const CartIcon = styled.div`
	height: 2.375rem;
	border: 0;
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 6px;
	line-height: 1;
	background: ${(props) => props.theme["yellow-light"]};
`;

export const MapLocation = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	height: 2.375rem;
	padding: 0.5rem;
	border-radius: 6px;
	background: ${(props) => props.theme["purple-light"]};
	color: ${(props) => props.theme["purple-dark"]};
`;
