var Box = function (ink, prise) {
    this.ink = ink;
    this.prise = prise;

};

var RedInk = function (protection) {
    this.protection = protection;
};

RedInk.prototype = Object.create(Box.prototype);
RedInk.prototype.constructor = RedInk;

var red = new RedInk({ink:'Red', prise:'50$', protection:'100%'});
console.log(red);
