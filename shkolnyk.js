var Figure = function(color) {
    this.color = color || "black";
};


var Square = function(width, height, color) {
    Figure.call(this, color);
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width * this.height;
    }
};

Square.prototype = Object.create(Figure.prototype);
Square.prototype.constructor = Square;

var Rectangle = function(width, height, color) {
    Figure.call(this, color);
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width * this.height;
    }
};

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;

var Circle = function(radius, color) {
    Figure.call(this, color);
    this.radius = radius;
    this.area = function() {
        return 3.14 * (this.radius * this.radius);
    }
};

var square = new Square (20, 30, "green");
var rectangle = new Rectangle(13, 4, "blue");
var circle = new Circle(13, "red");


console.log(square);
console.log("Area:" + square.area());
console.log(rectangle);
console.log("Area:" + rectangle.area());
console.log(circle);
console.log("Area:" + circle.area());