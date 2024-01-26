import { Trash } from "@phosphor-icons/react";
import { Button } from "../../../../components/Button";
import { CounterInput } from "../../../../components/CounterInput";
import { Actions, Card, CardContent, CardImg, Price } from "./styles";

export function CartItem() {
	return (
		<Card>
			<CardImg src="/Café com Leite.png" />
			<CardContent>
				<div>Café com Leite</div>
				<Actions>
					<CounterInput min={1} onChangeValue={(value) => value} />
					<Button leftIcon={Trash}>Remover</Button>
				</Actions>
			</CardContent>
			<Price>R$ 9,90</Price>
		</Card>
	);
}
