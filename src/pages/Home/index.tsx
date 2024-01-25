import { COFFEES } from "../../data/coffees";
import { CoffeeCard } from "./components/CoffeeCard";
import { Hero } from "./components/Hero";
import { CoffeeList, CoffeeSection, SectionTitle } from "./styles";

export function Home() {
	return (
		<main>
			<Hero />
			<CoffeeSection>
				<SectionTitle>Nossos Cafés</SectionTitle>
				<CoffeeList>
					{COFFEES.map((coffee) => (
						<CoffeeCard coffee={coffee} key={coffee.id} />
					))}
				</CoffeeList>
			</CoffeeSection>
		</main>
	);
}
