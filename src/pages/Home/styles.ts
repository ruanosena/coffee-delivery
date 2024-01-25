import styled from "styled-components";

export const CoffeeSection = styled.div`
	padding-bottom: 3.375rem;
`;

export const SectionTitle = styled.h1`
	color: ${(props) => props.theme["base-subtitle"]};
	font-size: 2rem;
	padding: 2rem 0;
`;

export const CoffeeList = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	row-gap: 2.5rem;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;
