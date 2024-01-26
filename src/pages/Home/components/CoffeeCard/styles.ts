import styled, { css, keyframes } from "styled-components";
import { ButtonIcon } from "../../../../components/ButtonIcon";

export const CardContainer = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.theme["base-card"]};
	border-top-left-radius: 6px;
	border-top-right-radius: 36px;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 36px;
	overflow: visible;
	padding: 1.5rem;
`;

export const CardImg = styled.img`
	display: block;
	margin-top: calc(-1.25rem + -1.5rem);
`;

export const TagGroup = styled.div`
	display: flex;
	align-items: center;
	column-gap: 4px;
`;

export const Tag = styled.span`
	display: inline-flex;
	padding: 0.25rem 0.5rem;
	margin: 0.75rem 0;
	background: ${(props) => props.theme["yellow-light"]};
	color: ${(props) => props.theme["yellow-dark"]};
	text-transform: uppercase;
	font-size: 0.625rem;
	border-radius: 100px;
	font-weight: bold;
`;

export const Title = styled.h1`
	margin: 0.5rem 0;
	color: ${(props) => props.theme["base-subtitle"]};
	font-size: 1.25rem;
	font-family: "Baloo 2", sans-serif;
	font-weight: bold;
	text-transform: capitalize;
`;

export const Description = styled.p`
	color: ${(props) => props.theme["base-label"]};
	font-size: 0.875rem;
	text-align: center;
`;

export const CardFooter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
`;

export const Price = styled.div`
	font-family: "Baloo 2", sans-serif;
	font-size: 1.5rem;
	font-weight: 900;
`;
export const PriceCurrency = styled.span`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	font-size: 0.875rem;
`;

export const Actions = styled.div`
	display: flex;
	column-gap: 0.5rem;
`;

interface CartButtonStyleProps {
	isAdding: boolean;
}

const translate = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(50%);
	}
`;

export const CartButton = styled(ButtonIcon)<CartButtonStyleProps>`
	background: ${(props) => props.theme["purple-dark"]};
	color: ${(props) => props.theme["base-card"]};
	${(props) =>
		props.isAdding &&
		css`
			animation: ${translate} .5s forwards 1;
		`}
`;
