export class Person {// 1ra forma de declarar constructores
    // public name?: string;
    // private address?: string;

    // constructor( name: string, address: string ) {
    //     this.name = name;
    //     this.address = address = "No address";
    // };
    // 2da forma de declarar constructores
    constructor(
        public name: string,
        public lastName: string,
        private address: string = "No Address"
    ) { };
}

// export class Hero extends Person {
//     constructor( 
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//      ){
//         super(
//             realName, 'New York'
//         )
//     }
// };
export class Hero {

    constructor(
        public person: Person,
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        // this.person = new Person(realName);
        // super(
        //     realName, 'New York'
        // )
    }
};

const tony = new Person('Tony', 'Stark', 'New York'); // se define la clase persona
const ironMan = new Hero( tony, "carlos Vasquez", 45, "Tony"); // se añade valores de la clase persona
console.log(ironMan);
