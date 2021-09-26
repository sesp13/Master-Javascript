class Bicicleta {
  color;
  nombre;

  constructor() {
    this.color = "Rojo";
    this.nombre = "GW BMX 2030";
  }

  CambiarColor(color) {
    this.color = color;
  }
}

var bici = new Bicicleta();

console.log(bici);
bici.CambiarColor("Verde");
console.log(bici);

let bici2 = new Bicicleta("Specialized");
console.log(bici2);
