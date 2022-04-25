const p = {
  nombre: "Santi",
  edad: 27,
};

class Persona {
  constructor(nombre, edad, correo = "") {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Hola " + this.nombre + "!" + " Tu edad es " + this.edad);
  }
}

const p1 = new Persona("Santi", 27);
p1.saludar();
const p2 = new Persona("Ginis", 27);
p2.saludar();

console.log(p1);
console.log(p2);

const s = {
  nombre: "Samuel",
  edad: 35,
  llamar() {
    console.log("Hola " + this.nombre + "!" + " Tu edad es " + this.edad);
  },
};

s.llamar();

function caminar(a, b) {
  console.log(this);
  console.log(a + b);
}

let jojito = caminar.bind(undefined, 7, 9);
jojito();


function car(marca, color){
  this.marca = marca;
  this.color = color;
}
var audi= new car("Audi", "verde")
