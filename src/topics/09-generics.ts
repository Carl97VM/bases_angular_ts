export function whatsMyType<T>( argument: T ): T { // funciones generica que no sabe el tipo

    return argument;

}

let amIString = whatsMyType<string>( "es string" ); // asi le paso el tipo de tipado que tendra
let amINumber = whatsMyType<number>( 100 ); // asi le paso el tipo de tipado que tendra
let amIArray  = whatsMyType<number[]>( [1,2,3,4,5] ); // asi le paso el tipo de tipado que tendra

console.log(amIString.split(' '));
console.log(amINumber.toFixed() );
console.log(amIArray.join(' - '));
