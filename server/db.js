// Storing all data here
const myMainCards = [
  {
    title: "category 1 ",
    image: "some url ",
  },
  {
    title: "category 2 ",
    image: "some url",
  },
  {
    title: "category 3 ",
    image: "some url", // this will throw an error if null
  },
];

const mygifts = [
  {
    id: "1",
    slug: "sticker",
    title: "sticker",
    image: "url",
    rating: 4.2,
    price: "$3.99",
    description: ["shiny sticker", "customizable"],
    inStock: 15,
    onSale: false,
    category: "4", // should match the category id
  },
  {
    id: "22",
    slug: "pin",
    title: "pin",
    image: "url",
    rating: 4.8,
    price: "$1.99",
    description: ["shiny pin", "customizable"],
    inStock: 150,
    onSale: false,
    category: "4",
  },
  {
    id: "51",
    slug: "hoodie",
    title: "hoodie",
    image: "url",
    rating: 4.9,
    price: "$53.99",
    description: ["comfy hoodie", "waterproof"],
    inStock: 35,
    onSale: false,
    category: "3",
  },
];
const mybooks = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const mycategories = [
  {
    id: "1",
    image: "url",
    category: "food",
    slug: "food",
  },
  {
    id: "2",
    image: "urlll",
    category: "accessories",
    slug: "accessories",
  },
  {
    id: "3",
    image: "url",
    category: "clothing",
    slug: "clothing",
  },
  {
    id: "4",
    image: "url",
    category: "decor",
    slug: "decor",
  },
];

module.exports = { myMainCards, mybooks, mygifts, mycategories };
