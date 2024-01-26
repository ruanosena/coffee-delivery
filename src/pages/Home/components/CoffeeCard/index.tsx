import { ShoppingCart } from "@phosphor-icons/react";
import {
	Actions,
	CardContainer,
	CardFooter,
	CardImg,
	CartButton,
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
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

interface CoffeeCardProps {
	coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	const [isAdding, setIsAdding] = useState(false);
	const [quantity, setQuantity] = useState<number>(1);
	const { addProduct } = useContext(CartContext);

	function addProductToCart() {
		if (quantity) {
			setIsAdding(true);
			addProduct({
				id: coffee.id,
				image: coffee.image,
				name: coffee.title,
				price: coffee.price,
				quantity,
			});
			setTimeout(() => setIsAdding(false), 1000);
		}
	}

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
					<CounterInput min={1} initialCount={quantity} onChangeValue={setQuantity} />
					<CartButton isAdding={isAdding} icon={ShoppingCart} onClick={addProductToCart} />
				</Actions>
			</CardFooter>
		</CardContainer>
	);
}
