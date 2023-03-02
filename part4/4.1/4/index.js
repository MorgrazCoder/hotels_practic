function sumSalaries(obj) {
  if (JSON.stringify(obj) === "{}") { return 0 }
  return Object.values(obj).reduce((a,c)=>a+c)
}