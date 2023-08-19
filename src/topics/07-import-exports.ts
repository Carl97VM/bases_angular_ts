import { Product, taxCalculator } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 1500,
    },
    {
        description: "LG",
        price: 1000
    }
];

const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
});

console.log("total",total);
console.log("tax",tax);




