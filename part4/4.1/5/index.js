function multiplyNumeric(obj) {
  for (let key in obj) {
    obj[key] = typeof obj[key] == "number" ? obj[key] *= 2 : obj[key]
  }
}