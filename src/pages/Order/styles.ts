import styled from "styled-components";

export const Delivery = styled.article`
	display: flex;
	flex-wrap: wrap;
	margin: 5rem auto;
	align-items: center;
`;

export const Title = styled.h2`
	color: ${(props) => props.theme["yellow-dark"]};
	font-size: 2rem;
	font-family: "Baloo 2", sans-serif;
	font-weight: 900;
`;

export const Subtitle = styled.h3`
	font-weight: 400;
	font-size: 1.25rem;
	color: ${(props) => props.theme["base-subtitle"]};
`;

export const OrderInfo = styled.div`
	max-width: 32.875rem;
	padding: 2.5rem;
	margin-top: 2.5rem;
	border-width: 1px;
	border-style: solid;
	border-image: linear-gradient(
			to-right,
			${(props) => props.theme.yellow},
			${(props) => props.theme.purple}
		)
		1;
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	border-top-left-radius: 6px;
	border-top-right-radius: 36px;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 36px;
`;

export const Feature = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.75rem;
`;

const FEATURE_COLORS = {
	yellowDark: "yellow-dark",
	yellow: "yellow",
	purple: "purple",
} as const;

interface FeatureProps {
	featureColor: keyof typeof FEATURE_COLORS;
}

export const FeatureIcon = styled.div<FeatureProps>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	color: ${(props) => props.theme.background};

	&::before {
		content: "";
		position: absolute;
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		background: ${(props) => props.theme[FEATURE_COLORS[props.featureColor]]};
		z-index: -1;
	}
`;
