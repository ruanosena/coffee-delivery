const formatter = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export function CurrencyFormatter(value: number) {
	const currencyValue = formatter.format(value / 100);
	return currencyValue.split(/\s/).pop();
}