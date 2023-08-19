export class Person {// 1ra forma de declarar constructores
    // public name?: string;
    // private address?: string;

    // constructor( name: string, address: string ) {
    //     this.name = name;
    //     this.address = address = "No address";
    // };
    // 2da forma de declarar constructores
    constructor( 
        public name: string, private address: string 
    ) {};
}

export class Hero extends Person {
    constructor( 
        public alterEgo: string,
        public age: number,
        public realName: string,
     ){
        super(
            realName, 'New York'
        )
    }
};

const ironMan = new Hero("carlos Vasquez",45,"Tony");
console.log(ironMan);
