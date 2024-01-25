import { ShoppingCart } from "@phosphor-icons/react";
import {
	Actions,
	CardContainer,
	CardFooter,
	CardImg,
	Description,
	Price,
	PriceCurrency,
	Tag,
	TagGroup,
	Title,
} from "./styles";
import { CounterInput } from "../../../../components/CounterInput";
import { Coffee } from "../../../../data/coffees";
import { CurrencyFormatter } from "../../../../utils/CurrencyFormatter";

interface CoffeeCardProps {
	coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	return (
		<CardContainer>
			<CardImg src={coffee.image} alt={`Xícara de ${coffee.title.toLowerCase()}`} />
			<TagGroup>
				{coffee.tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</TagGroup>
			<Title>{coffee.title}</Title>
			<Description>{coffee.description}</Description>
			<CardFooter>
				<Price>
					<PriceCurrency>R$</PriceCurrency> {CurrencyFormatter(coffee.price)}
				</Price>
				<Actions>
					<CounterInput onChangeValue={(value) => value} />
					<button type="button">
						<ShoppingCart weight="fill" size={20} />
					</button>
				</Actions>
			</CardFooter>
		</CardContainer>
	);
}
