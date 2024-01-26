import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer, Input } from "./styles";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface CounterInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChangeValue: (value: number) => void;
	initialCount: number;
}

export function CounterInput({ onChangeValue, initialCount, ...props }: CounterInputProps) {
	const [inputValue, setInputValue] = useState(initialCount);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		const value = Number(event.target.value);
		if (value) {
			onChangeValue(value);
		}
	}

	function handleSubtractOne() {
		setInputValue((state) => {
			const min = Number(props.min) || 0;
			state = state <= min ? min : state - 1;
			if (state != inputValue) onChangeValue(state);
			return state;
		});
	}
	function handleAddOne() {
		setInputValue((state) => {
			const max = Number(props.max) || 99;
			state = state >= max ? max : state + 1;
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
