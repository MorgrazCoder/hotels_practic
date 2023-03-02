function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B );//true

//inscanceof учитывает prototype, а не функцию.