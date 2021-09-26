"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS cargada");
        var camisa = new camiseta_1.Camiseta("Rojo", "Modelo", "L", 50);
        console.log(camisa);
    }
    return Main;
}());
