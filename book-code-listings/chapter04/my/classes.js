let a = function () {
  this.x = 10;
  this.y = 8;
};
let b = new a();
let c = new a();
b.x = 100;