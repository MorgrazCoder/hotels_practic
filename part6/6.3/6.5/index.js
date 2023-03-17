function inBetween(min, max) {
  return function(el) {
    return el >= min && el <= max;
  };
}

function inArray(arr) {
  return function(el) {
    return arr.includes(el);
  };
}