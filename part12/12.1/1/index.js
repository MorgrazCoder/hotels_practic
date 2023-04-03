function pseudoRandom(seed) {
  return function() {
    return seed * 16807 % 2147483647;
  }
}

let generator = pseudoRandom(1);

alert(generator()); // 16807
alert(generator()); // 282475249
alert(generator()); // 1622650073