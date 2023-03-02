//1
function checkAge(age) {
  return age>18?true:confirm("Родитеели разрешили?")
}
//2
function checkAge(age) {
  return age>18 || confirm("Родители разрешили?")
}
