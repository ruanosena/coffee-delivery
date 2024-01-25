type CoffeeTag = "Tradicional" | "Gelado" | "Com leite" | "Especial" | "Alcoólico";

export interface Coffee {
	id: number;
	image: string;
	tags: CoffeeTag[];
	title: string;
	description: string;
	price: number;
}

export const COFFEES: Coffee[] = [
	{
		id: 1,
		image: "/Expresso.png",
		tags: ["Tradicional"],
		title: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		price: 990,
	},
	{
		id: 2,
		image: "/Americano.png",
		tags: ["Tradicional"],
		title: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		price: 990,
	},
	{
		id: 3,
		image: "/Expresso Cremoso.png",
		tags: ["Tradicional"],
		title: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		price: 990,
	},
	{
		id: 4,
		image: "/Café Gelado.png",
		tags: ["Tradicional", "Gelado"],
		title: "Expresso Gelado",
		description: "Bebida preparada com café expresso e cubos de gelo",
		price: 990,
	},
	{
		id: 5,
		image: "/Café com Leite.png",
		tags: ["Tradicional", "Com leite"],
		title: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		price: 990,
	},
	{
		id: 6,
		image: "/Latte.png",
		tags: ["Tradicional", "Com leite"],
		title: "Latte",
		description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
		price: 990,
	},
	{
		id: 7,
		image: "/Capuccino.png",
		tags: ["Tradicional", "Com leite"],
		title: "Capuccino",
		description: "Bebida com canela feita de doses iguais de café, leite e espuma",
		price: 990,
	},
	{
		id: 8,
		image: "/Macchiato.png",
		tags: ["Tradicional", "Com leite"],
		title: "Macchiato",
		description: "Café expresso misturado com um pouco de leite quente e espuma",
		price: 990,
	},
	{
		id: 9,
		image: "/Mochaccino.png",
		tags: ["Tradicional", "Com leite"],
		title: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		price: 990,
	},
	{
		id: 10,
		image: "/Chocolate Quente.png",
		tags: ["Tradicional", "Com leite"],
		title: "Chocolate Quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		price: 990,
	},
	{
		id: 11,
		image: "/Cubano.png",
		tags: ["Especial", "Alcoólico", "Gelado"],
		title: "Cubano",
		description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
		price: 990,
	},
	{
		id: 12,
		image: "/Havaiano.png",
		tags: ["Especial"],
		title: "Havaiano",
		description: "Bebida adocicada preparada com café e leite de coco",
		price: 990,
	},
	{
		id: 13,
		image: "/Árabe.png",
		tags: ["Especial"],
		title: "Árabe",
		description: "Bebida preparada com grãos de café árabe e especiarias",
		price: 990,
	},
	{
		id: 14,
		image: "/Irlandês.png",
		tags: ["Especial", "Alcoólico"],
		title: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		price: 990,
	},
];
