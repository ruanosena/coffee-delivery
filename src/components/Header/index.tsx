import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CartIcon, HeaderContainer, MapLocation } from "./styles";
import logo from "../../assets/Logo.svg";

export function Header() {
	const theme = useTheme();

	return (
		<HeaderContainer>
			<NavLink to="/" title="Início">
				<img src={logo} alt="" />
			</NavLink>
			<nav>
				<MapLocation>
					<MapPin weight="fill" color={theme.purple} size={20} />
					Porto Alegre, RS
				</MapLocation>
				<NavLink to="/cart" title="Carrinho">
					<CartIcon>
						<ShoppingCart weight="fill" color={theme["yellow-dark"]} size={20} />
					</CartIcon>
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
