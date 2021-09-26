//Molde para crear objetos con características parecidas
// export class Camiseta {
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log("Camiseta con logo de " + logo)
        }
    }
}
@estampar("Gucci");
class Camiseta {
    //Propiedades
    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //Métodos
    constructor(color, modelo, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color;
    }
}

var camisa = new Camiseta("Rojo", "Nike", "L", 10);
camisa.estampacion();
// camisa.setColor("Rojo");
// camisa.modelo = "Manga larga";
// camisa.marca = "Rojo";
// camisa.talla = "L";
// camisa.precio = 10;

var playera = new Camiseta("Azul", "Adidas", "S", 5);
// playera.setColor("Azul");
// playera.modelo = "Manga Corta";
// playera.marca = "Adidas";
// playera.talla = "S";
// playera.precio = 78;


console.log(camisa);
console.log(playera);

