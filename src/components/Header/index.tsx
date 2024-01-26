import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CartButton, HeaderContainer, MapLocation } from "./styles";
import logo from "../../assets/Logo.svg";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
	const theme = useTheme();
	const { cart } = useContext(CartContext);

	return (
		<HeaderContainer>
			<NavLink to="/" title="Início">
				<img src={logo} alt="" />
			</NavLink>
			<nav>
				<MapLocation>
					<MapPin weight="fill" color={theme.purple} size={20} />
					Várzea da Roça, BA
				</MapLocation>
				<NavLink to="/checkout" title="Carrinho">
					<CartButton quantity={cart.length} icon={ShoppingCart} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
