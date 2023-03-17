function User(name) {
  this.name = name;
}

let user = new User('Dmitry');
let user2 = new user.constructor('Vasya');
