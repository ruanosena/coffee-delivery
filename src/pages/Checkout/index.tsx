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
	CheckoutSection,
	CheckoutItemFeatured,
	CheckoutItemHighlight,
	CardForm,
	Input,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Selectable } from "./components/Selectable";
import { useContext, useState } from "react";
import { CartItem } from "./components/CartItem";
import { Button } from "../../components/Button";
import { CartContext } from "../../contexts/CartContext";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { useForm } from "react-hook-form";

type PaymentMethods = "credit_card" | "debit_card" | "money";

export function Checkout() {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>();
	const [deliveryPrice] = useState(350);
	const theme = useTheme();
	const { cart, cartTotalPrice } = useContext(CartContext);
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();

	function handleConfirmOrder(data: any) {
		console.log(data);
		navigate("/order");
	}

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
					<CardForm>
						<Input {...register("cep")} placeholder="CEP" />
						<Input {...register("rua")} placeholder="Rua" style={{ width: "100%" }} />
						<Input {...register("numero")} placeholder="Número" />
						<Input {...register("complemento")} placeholder="Complemento" style={{ flex: 1 }} />
						<Input {...register("bairro")} placeholder="Bairro" />
						<Input {...register("cidade")} placeholder="Cidade" style={{ flex: 1 }} />
						<Input {...register("uf")} placeholder="UF" style={{ maxWidth: "3.75rem" }} />
					</CardForm>
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
					{cart.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
					<CheckoutSection>
						<CheckoutItemHighlight>
							<span>Total dos itens</span>
							<span>R$ {CurrencyFormatter(cartTotalPrice)}</span>
						</CheckoutItemHighlight>
						<CheckoutItemHighlight>
							<span>Entrega</span>
							<span>R$ {CurrencyFormatter(deliveryPrice)}</span>
						</CheckoutItemHighlight>
						<CheckoutItemFeatured>
							<span>Total</span>
							<span>R$ {CurrencyFormatter(cartTotalPrice + deliveryPrice)}</span>
						</CheckoutItemFeatured>
					</CheckoutSection>
					{/* <NavLink to="/order" title="Pedido" style={{ textDecoration: "none" }}> */}
					<Button
						size="normal"
						style={{ color: theme.white, background: theme.yellow, width: "100%" }}
						onClick={handleSubmit(handleConfirmOrder)}
					>
						Confirmar pedido
					</Button>
					{/* </NavLink> */}
				</Order>
			</Wrapper>
		</MainContainer>
	);
}
