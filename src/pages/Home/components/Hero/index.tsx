import {
	Feature,
	FeatureIcon,
	Features,
	HeroContainer,
	HeroContent,
	HeroImg,
	Subtitle,
	Title,
} from "./styles";

import HeroImage from "../../../../assets/Hero.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Hero() {
	return (
		<HeroContainer>
			<HeroContent>
				<div>
					<Title>Encontre o café perfeito para qualquer hora do dia</Title>
					<Subtitle>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
					</Subtitle>
				</div>

				<Features>
					<Feature>
						<FeatureIcon featureColor="yellowDark">
							<ShoppingCart weight="fill" />
						</FeatureIcon>
						Compra simples e segura
					</Feature>
					<Feature>
						<FeatureIcon featureColor="yellow">
							<Timer weight="fill" />
						</FeatureIcon>
						Entrega rápida e rastreada
					</Feature>
					<Feature>
						<FeatureIcon featureColor="base">
							<Package weight="fill" />
						</FeatureIcon>
						Embalagem mantém o café intacto
					</Feature>
					<Feature>
						<FeatureIcon featureColor="purple">
							<Coffee weight="fill" />
						</FeatureIcon>
						O café chega fresquinho até você
					</Feature>
				</Features>
			</HeroContent>
			<div>
				<HeroImg src={HeroImage} alt="Copo de café" />
			</div>
		</HeroContainer>
	);
}
