import styled from "styled-components";

export const MainContainer = styled.main`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	margin-bottom: 5rem;
`;

export const AreaTitle = styled.h2`
	color: ${(props) => props.theme["base-subtitle"]};
	font-size: 1.125rem;
	font-family: "Baloo 2", sans-serif;
	font-weight: bold;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	flex: 1;
	max-width: 40rem;
`;

export const Card = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	padding: 2.5rem;
	background: ${(props) => props.theme["base-card"]};
	border-radius: 6px;
`;

export const CardHeader = styled.header`
	display: flex;
	column-gap: 0.5rem;
`;

export const CardTitle = styled.h4`
	font-size: 1rem;
	font-weight: normal;
`;

export const CardSubtitle = styled.h5`
	font-size: 0.875rem;
	font-weight: normal;
`;

export const CardBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 1rem;
	column-gap: 0.75rem;
`;

export const Order = styled.aside`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	padding: 2.5rem;
	border-top-left-radius: 6px;
	border-top-right-radius: 44px;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 44px;
	background: ${(props) => props.theme["base-card"]};
`;

export const Divider = styled.hr`
	border-color: ${(props) => props.theme["base-button"]};
	border-bottom: 0;
`;

export const CheckoutSection = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
`;

const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CheckoutItemHighlight = styled(CheckoutItem)`
	font-size: 0.875rem;
`;

export const CheckoutItemFeatured = styled(CheckoutItem)`
	font-size: 1.25rem;
	font-weight: bold;
  color: ${props => props.theme["base-subtitle"]}
`;
