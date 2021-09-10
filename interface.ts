interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    preveouseClub?: string[];
}


const messy: Player = {
    name: 'messy',
    club: "Abahoni",
    salary: 12000,
    wife: "nosimon"
}
const Ahannan: Player = {
    name: 'a:hannan',
    club: 'kolabagan',
    salary: 2000,
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: developer = {
    name: 'mark zuku',
    designation: 'facebooker',
    salary: 20,
    age: 31,
    language: 'js',
    codeEditor: 'VS code',
    typingSpeed: 56
}