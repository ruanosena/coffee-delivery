import { ReactNode, createContext, useState } from "react";

export interface CartData {
	id: number;
	name: string;
	quantity: number;
	price: number;
	image: string;
}

interface CartContextType {
	cart: CartData[];
	cartTotalPrice: number;
	addProduct: (newProduct: CartData) => void;
	removeProduct: (productId: number) => void;
	updateProductQuantity: (productId: number, quantity: number) => void;
}
export const CartContext = createContext<CartContextType>({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cart, setCart] = useState<CartData[]>([]);
	const cartTotalPrice = cart.reduce<number>((total, item) => {
		total += item.price * item.quantity;
		return total;
	}, 0);

	function addProduct(newProduct: CartData) {
		setCart((state) => {
			const productIndex = state.findIndex((product) => product.id == newProduct.id);
			const newState = [...state];
			if (productIndex > -1) {
				newState[productIndex].quantity += newProduct.quantity;
			} else {
				newState.push(newProduct);
			}
			return newState;
		});
	}

	function removeProduct(productId: number) {
		setCart((state) => state.filter((product) => product.id != productId));
	}

	function updateProductQuantity(productId: number, quantity: number) {
		setCart((state) =>
			state.map((product) => (product.id == productId ? { ...product, quantity } : product))
		);
	}

	return (
		<CartContext.Provider
			value={{ cart, addProduct, removeProduct, cartTotalPrice, updateProductQuantity }}
		>
			{children}
		</CartContext.Provider>
	);
}
