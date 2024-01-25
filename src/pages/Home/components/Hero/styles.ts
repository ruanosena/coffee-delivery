import styled from "styled-components";

export const HeroContainer = styled.div`
	display: flex;
	column-gap: 3.5rem;
	row-gap: 1rem;
	flex-wrap: wrap;
	align-items: flex-start;
	padding: 6rem 0;

	@media (max-width: 768px) {
		padding: 3rem 0;
	}
	@media (max-width: 480px) {
		padding: 2rem 0;
	}
`;

export const HeroContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	min-width: 28rem;
	row-gap: 4rem;
`;

export const Title = styled.h1`
	color: ${(props) => props.theme["base-title"]};
	font-size: 3rem;
	font-family: "Baloo 2", sans-serif;
`;

export const Subtitle = styled.h2`
	color: ${(props) => props.theme["base-subtitle"]};
	font-size: 1.25rem;
`;

export const Features = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 2.5rem;
	row-gap: 1.25rem;
	padding: 0 0.65rem;
`;

export const Feature = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.75rem;
`;

const FEATURE_COLORS = {
	yellowDark: "yellow-dark",
	yellow: "yellow",
	base: "base-text",
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

export const HeroImg = styled.img`
	max-width: 100%;
	height: auto;
`;
