var Figure = function (name) {
    this.name = name;
};

var Rectangle = function (name, width, height, area) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = calkRectArea(width, height);
    var args = Array.prototype.slice.call(arguments);
    Figure.apply(this, args);
};

function calkRectArea (width, height) {
    return width * height;
}

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;

//------------------------------------------------

var Circle = function (name, radius, area) {
    this.name = name;
    this.radius = radius;
    this.area = calkCirklArea(radius);
    var args = Array.prototype.slice.call(arguments);
    Figure.apply(this, args);
};

function calkCirklArea (radius) {
    return Math.floor((Math.PI*radius)**2);
}

Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;


var circle = new Circle("Круг", 5);
console.log(circle);

//-------------------------------------------------

var rectangle = new Rectangle("Куб", 5, 5);
console.log(rectangle);
