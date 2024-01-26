import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import {
	AreaTitle,
	Card,
	MainContainer,
	Wrapper,
	CardHeader,
	CardSubtitle,
	CardTitle,
	CardBody,
	Order,
	Divider,
	CheckoutSection,
	CheckoutItemFeatured,
	CheckoutItemHighlight,
} from "./styles";
import { useTheme } from "styled-components";
import { Input } from "./components/Input";
import { Selectable } from "./components/Selectable";
import { useState } from "react";
import { CartItem } from "./components/CartItem";
import { Button } from "../../components/Button";
import { NavLink } from "react-router-dom";

type PaymentMethods = "credit_card" | "debit_card" | "money";

export function Checkout() {
	const theme = useTheme();
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>();

	return (
		<MainContainer>
			<Wrapper>
				<AreaTitle>Complete seu pedido</AreaTitle>
				<Card>
					<CardHeader>
						<div>
							<MapPinLine size={20} color={theme["yellow-dark"]} />
						</div>
						<div>
							<CardTitle>Endereço de Entrega</CardTitle>
							<CardSubtitle>Informe o endereço onde deseja receber seu pedido</CardSubtitle>
						</div>
					</CardHeader>
					<CardBody>
						<Input placeholder="CEP" />
						<Input placeholder="Rua" style={{ width: "100%" }} />
						<Input placeholder="Número" />
						<Input placeholder="Complemento" style={{ flex: 1 }} />
						<Input placeholder="Bairro" />
						<Input placeholder="Cidade" style={{ flex: 1 }} />
						<Input placeholder="UF" style={{ flexShrink: 1, maxWidth: "3.75rem" }} />
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<div>
							<CurrencyDollar size={20} color={theme.purple} />
						</div>
						<div>
							<CardTitle>Pagamento</CardTitle>
							<CardSubtitle>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</CardSubtitle>
						</div>
					</CardHeader>
					<CardBody>
						<Selectable
							isSelected={paymentMethod == "credit_card"}
							onClick={() =>
								setPaymentMethod((state) => (state == "credit_card" ? undefined : "credit_card"))
							}
							icon={CreditCard}
						>
							Cartão de crédito
						</Selectable>
						<Selectable
							isSelected={paymentMethod == "debit_card"}
							onClick={() =>
								setPaymentMethod((state) => (state == "debit_card" ? undefined : "debit_card"))
							}
							icon={Bank}
						>
							Cartão de débito
						</Selectable>
						<Selectable
							isSelected={paymentMethod == "money"}
							onClick={() => setPaymentMethod((state) => (state == "money" ? undefined : "money"))}
							icon={Money}
						>
							Dinheiro
						</Selectable>
					</CardBody>
				</Card>
			</Wrapper>
			<Wrapper>
				<AreaTitle>Cafés selecionados</AreaTitle>
				<Order>
					<CartItem />
					<Divider />
					<CartItem />
					<Divider />
					<CheckoutSection>
						<CheckoutItemHighlight>
							<span>Total dos itens</span>
							<span>R$ 19,80</span>
						</CheckoutItemHighlight>
						<CheckoutItemHighlight>
							<span>Entrega</span>
							<span>R$ 3,50</span>
						</CheckoutItemHighlight>
						<CheckoutItemFeatured>
							<span>Total</span>
							<span>R$ 23,30</span>
						</CheckoutItemFeatured>
					</CheckoutSection>
					<NavLink to="/order" title="Pedido" style={{ textDecoration: "none" }}>
						<Button
							size="normal"
							style={{ color: theme.white, background: theme.yellow, width: "100%" }}
						>
							Confirmar pedido
						</Button>
					</NavLink>
				</Order>
			</Wrapper>
		</MainContainer>
	);
}
