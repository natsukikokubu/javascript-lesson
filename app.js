// Q1
let nickname = "なつき";
let age = 26;
console.log(`私のニックネームは${nickname}です。年齢は${age}です。`);

// Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log(
  `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
);

// Q3
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;
console.log(averageAge);

// Q6
function sayHello() {
  console.log("Hello");
}
sayHello();

let sayWorld = function () {
  console.log("World");
};
sayWorld();

// Q7
let userMethods = { ...user };
userMethods.birthday = "2000-09-27";
userMethods.sayHello = function () {
  console.log("Hello");
};
console.log(userMethods);
console.log(userMethods.sayHello());

// Q8
let calc = {};
calc.add = function (x, y) {
  console.log(x + y);
};
calc.subtract = function (x, y) {
  console.log(x - y);
};
calc.multiply = function (x, y) {
  console.log(x * y);
};
calc.divide = function (x, y) {
  console.log(x / y);
};
calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

//Q9
function remainder(x, y) {
  return x % y;
}
let returnValue = remainder(5, 3);
console.log(`5を3で割った余りは${returnValue}です。`);

//10
function foo() {
  let x = 1;
}
console.log(x);
//回答
//スコープという変数の有効範囲によって、変数Xは関数fooの中でしか参照することができないから。
