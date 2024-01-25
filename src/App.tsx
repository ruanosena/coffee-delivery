import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<h1>Encontre o café perfeito para qualquer hora do dia</h1>
			<GlobalStyle />
		</ThemeProvider>
	);
}
