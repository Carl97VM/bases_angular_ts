export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "John"
}

const passenger2: Passenger = {
    name: "Ariana",
    children: ["Carlos","Joe"]
}

const printChildren = (passenger: Passenger): number => {
    
    if( !passenger.children) return 0; //
    
    const howManyChildren = passenger.children?.length || 0; // cambia a los operadores ternarios
    // const howManyChildren = passenger.children?.length;
    console.log(passenger.name, howManyChildren);

    return 0;
    
}


printChildren(passenger2)