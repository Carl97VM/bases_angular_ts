
function addNumbers(a: number, b: number): number{
    return a + b;
}

const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
}

const addNumbersArrow2 = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply(firstNumber: number, secondNumber?: number, base = 2): number {
    return (firstNumber*base);
}

// const result: number = addNumbers(1,2);
// const result2: number = addNumbersArrow(2,2);
// const result3: string = addNumbersArrow2(2,2);
// const multiplyResult: number = multiply(2);

// console.log({result, result2, result3, multiplyResult});
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
        
    }
}

healCharacter(strider, 50);
strider.showHp();


export {};