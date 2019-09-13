console.log("Hello, TypeScript")

//Bollean
let muted: boolean = true 
muted = false

//Números
let age = 6;
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

//String 
let nombre: string = 'Pablo'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = []
people = ["Isabel", "Nicole", "Raul"]
//people.push(900)

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

//Enum
enum color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: color = color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

// any
let comodin: any = 'Joker'
comodin = {type: 'wilcard'}

//Object
let someObject: object = { type: 'wilcard' }

//funcciones

function add(a: number, b: number): number {
    return a + b;
}

const sum = add(2, 3)
console.log(sum)

function createAdder (a: number): (number) => number{
    return function (b: number){
        return b + a 
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)
console.log(fourPlus6)

function fullName(firstName?: string, lastName: string = "Maldonado"): string {
    return `${firstName} ${lastName}`
}

const pablo = fullName('Pablo')

console.log(pablo)

//Interface
interface Rectangulo {
    ancho: number,
    alto: number,
    color?: color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: color.Rojo
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)


rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())



