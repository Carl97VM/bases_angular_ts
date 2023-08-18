
let skills: string[] = ['Bash', 'Counter','Healing'];

// ayuda a definir los objetos, su estructura
interface Character{
    name: string;
    hp: number;
    skills: string[];
    // hometown: string | undefined;
    hometown?: string; // es lo mismo que de arriba
    // pero no es obligatorio asignar o indicar que esta
};

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);


export {};