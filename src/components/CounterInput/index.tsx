import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer, Input } from "./styles";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface CounterInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChangeValue: (value: number) => void;
}

export function CounterInput({ onChangeValue, ...props }: CounterInputProps) {
	const [inputValue, setInputValue] = useState(1);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		const value = Number(event.target.value);
		if (value) {
			onChangeValue(value);
		}
	}

	function handleSubtractOne() {
		setInputValue((state) => {
			state = state <= 0 ? 0 : state - 1;
			if (state != inputValue) onChangeValue(state);
			return state;
		});
	}
	function handleAddOne() {
		setInputValue((state) => {
			state = state >= 99 ? 99 : state + 1;
			if (state != inputValue) onChangeValue(state);
			return state;
		});
	}

	return (
		<CounterContainer>
			<button type="button" onClick={handleSubtractOne}>
				<Minus />
			</button>
			<Input
				type="number"
				min={0}
				max={99}
				value={inputValue}
				onChange={handleInputChange}
				{...props}
			/>
			<button type="button" onClick={handleAddOne}>
				<Plus />
			</button>
		</CounterContainer>
	);
}
