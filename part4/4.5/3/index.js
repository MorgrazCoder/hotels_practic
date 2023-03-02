function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('Введите число для выполнения прибавления', 0);
  };

  let accumulator = new Accumulator(225);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);

}