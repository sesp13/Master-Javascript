//Molde para crear objetos con características parecidas
// export class Camiseta {
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta con logo de " + logo);
        };
    };
}
;
var Camiseta = /** @class */ (function () {
    //Métodos
    function Camiseta(color, modelo, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    return Camiseta;
}());
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
