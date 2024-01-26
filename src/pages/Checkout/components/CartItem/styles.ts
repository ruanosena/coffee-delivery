import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	column-gap: 1.25rem;
	padding: 0.5rem 4px;
	max-height: 5rem;
`;

export const CardImg = styled.img`
	max-width: 100%;
	height: auto;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
`;

export const Actions = styled.div`
	display: flex;
	column-gap: 0.5rem;
`;

export const Price = styled.span`
	display: block;
	margin-left: auto;
	font-weight: bold;
	white-space: nowrap;
`;
