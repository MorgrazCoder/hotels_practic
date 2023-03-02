let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // Вывод всех элементов массива, их стало 3(a,b,function)