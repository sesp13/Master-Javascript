import { Camiseta } from './camiseta';

class Main {
    constructor() {
        console.log("Aplicacion JS cargada");
        let camisa = new Camiseta("Rojo","Modelo","L",50);
        console.log(camisa);
    }
}