// let animal = {
//     eats: true
// }
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;
//
// let rabbit = new Rabbit('White Rabbit');
// alert(rabbit.eats)


// function Rabbit() {
// }
//
// let rabbit = new Rabbit()
// alert(rabbit.constructor === Rabbit)


// function Rabbit(name) {
//     this.name = name;
//     alert(name)
// }
//
// let rabbit = new Rabbit('White Rabbit');
// let rabbit2 = new rabbit.constructor('Black Rabbit');


// function Rabbit() {
// }
//
// Rabbit.prototype = {
//     jumps: true
// };
// let rabbit = new Rabbit();
// alert(rabbit.constructor === Rabbit);


// function Rabbit() {
// }
//
// Rabbit.prototype = {
//     eats: true
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// alert(rabbit.eats)