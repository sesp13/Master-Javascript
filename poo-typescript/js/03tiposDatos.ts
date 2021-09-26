//String
let cadena: string = "Santiago Espinosa";
let number: number = 8;
let bool: boolean = false;
let oso: any = "Lo que sea";
// Múltiples tipos de datos
let mutiussos: number | string = "Lo que sea";
console.log(mutiussos);
mutiussos = 4;
console.log(mutiussos);

let lenguas: Array<string> = [];

lenguas.push("Otro lenguaje");
console.log(cadena, number, bool, oso);
console.log(lenguas);
