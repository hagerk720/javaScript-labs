// ------- part 1  using prototype ------------
function Shape1(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}
Shape1.prototype.calcPerimeter = function () {
  this.perimeter = this.sides * this.sideLength;
  console.log(`using prototype perimeter is ${this.perimeter}`);
};
var square1 = new Shape1("square", 4, 5);
square1.calcPerimeter();
var triangle1 = new Shape1("triangle", 3, 3);
triangle1.calcPerimeter();
//----------------- part 1 using class ------------
class Shape2 {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    this.perimeter = this.sides * this.sideLength;
    console.log(`using class perimeter is ${this.perimeter}`);
  }
}
var square2 = new Shape2("square", 4, 5);
square2.calcPerimeter();
var triangle2 = new Shape2("triangle", 3, 3);
triangle2.calcPerimeter();
// --------- part 2 using prototype--------
function Square1(sideLength) {
  Shape1.call(this, "square", 4, sideLength);
}
Square1.prototype.calcArea = function () {
  this.area = this.sideLength * this.sideLength;
  console.log(`using prototype area is ${this.area}`);
};
var square4 = new Square1(5);
square4.calcArea();
// --------- part 2 using class--------
class Square extends Shape2 {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    this.area = this.sideLength * this.sideLength;
    console.log(`using class area is ${this.area}`);
  }
}
var square3 = new Square(5);
square3.calcPerimeter();
square3.calcArea();
// -------- part 3 ---------
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}
class SquaredTriple extends Triple {
  static longDescription;
  static description = "square the triple of any number you provide";
  static calculate(n = 1) {
    return Triple.calculate(n) * Triple.calculate(n);
  }
}

console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));
console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);
