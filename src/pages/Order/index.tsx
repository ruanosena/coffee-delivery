import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Delivery, Feature, FeatureIcon, OrderInfo, Subtitle, Title } from "./styles";

import DeliveryImg from "../../assets/Delivery.png";

export function Order() {
	return (
		<Delivery>
			<div>
				<Title>Uhu! Pedido confirmado</Title>
				<Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

				<OrderInfo>
					<Feature>
						<FeatureIcon featureColor="purple">
							<MapPin weight="fill" />
						</FeatureIcon>
						Entrega em Rua João Daniel Martinelli, 102
						<br />
						Farrapos - Porto Alegre, RS
					</Feature>
					<Feature>
						<FeatureIcon featureColor="yellow">
							<Timer />
						</FeatureIcon>
						Previsão de entrega
						<br />
						20 min - 30 min
					</Feature>
					<Feature>
						<FeatureIcon featureColor="yellowDark">
							<CurrencyDollar weight="fill" />
						</FeatureIcon>
						Pagamento na entrega
						<br />
						Cartão de Crédito
					</Feature>
				</OrderInfo>
			</div>
			<div>
				<img src={DeliveryImg} alt="Homem carregando uma caixa numa moto" />
			</div>
		</Delivery>
	);
}
