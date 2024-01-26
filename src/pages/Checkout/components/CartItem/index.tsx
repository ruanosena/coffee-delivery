import { Trash } from "@phosphor-icons/react";
import { Button } from "../../../../components/Button";
import { CounterInput } from "../../../../components/CounterInput";
import { Actions, Card, CardContent, CardImg, Price } from "./styles";
import { CartContext, CartData } from "../../../../contexts/CartContext";
import { useContext } from "react";
import { CurrencyFormatter } from "../../../../utils/CurrencyFormatter";

interface CartItemProps {
	item: CartData;
}

export function CartItem({ item }: CartItemProps) {
	const { removeProduct, updateProductQuantity } = useContext(CartContext);

	function removeProductFromCart() {
		removeProduct(item.id);
	}

	function updateProductInCart(quantity: number) {
		updateProductQuantity(item.id, quantity);
	}

	return (
		<Card>
			<CardImg src={item.image} />
			<CardContent>
				<div>{item.name}</div>
				<Actions>
					<CounterInput initialCount={item.quantity} min={1} onChangeValue={updateProductInCart} />
					<Button leftIcon={Trash} onClick={removeProductFromCart}>
						Remover
					</Button>
				</Actions>
			</CardContent>
			<Price>R$ {CurrencyFormatter(item.price)}</Price>
		</Card>
	);
}
