
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Phone A1",
    price: 50,   // $50.00
}

const tablet: Product = {
    description: "Zony A1",
    price: 100,   // $100.00
}

interface TaxCalculationOptions {
    tax: number; 
    products: Product[];
}

// function taxCalculator( options: TaxCalculationOptions ): number[] {
// function taxCalculator( {tax, products}: TaxCalculationOptions ): [number, number] {
export function taxCalculator(options: TaxCalculationOptions ): [number, number] {
    const {tax, products} = options;
    let total = 0;
    // options.products.forEach( ({price}) => {
    products.forEach( ({price}) => {
        total += price;
    })
    // return [total, total*options.tax];
    return [total, total*tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;
const [ total, res_tax ] = taxCalculator({
    products: shoppingCart,
    tax,
})

console.log("Total",total);
console.log("Tax",res_tax);




// export {};