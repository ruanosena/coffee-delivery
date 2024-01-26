import styled, { css } from "styled-components";
import { ButtonIcon } from "../ButtonIcon";

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

interface CartButtonStyleProps {
	quantity: number;
}

export const CartButton = styled(ButtonIcon)<CartButtonStyleProps>`
	position: relative;
	background: ${(props) => props.theme["yellow-light"]};
	color: ${(props) => props.theme["yellow-dark"]};

	${(props) =>
		props.quantity > 0 &&
		css`
			&::after {
				content: "${props.quantity > 9 ? "9+" : props.quantity}";
				position: absolute;
				top: -0.6rem;
				right: -0.6rem;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 50%;
				background: ${props.theme["yellow-dark"]};
				font-size: 0.75rem;
				font-weight: bold;
				color: ${props.theme.white};
			}
		`}
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
