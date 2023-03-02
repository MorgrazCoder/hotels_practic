function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sort = word.toLowerCase().split("").sort().join("");
    map.set(sort, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let newarr = aclean(arr);