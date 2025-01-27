// Q1
const nickname = "なつき";
const age = 26;
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
// function foo() {
//   let x = 1;
// }
// console.log(x);
//回答
//スコープという変数の有効範囲によって、変数Xは関数fooの中でしか参照することができないから。

//応用Q1
let random = Math.floor(Math.random() * 11);
console.log(random);

//応用Q２
let helloworld = function () {
  console.log("Hello World!");
};

let messageTime = function () {
  setTimeout(helloworld, 3000);
};
messageTime();

//応用Q3
let num = -2;
if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else if (num === 0) {
  console.log("num is 0");
}

//応用Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//応用Q5
const mixed = [4, "2", 5, "8", "9", 0, 1];
for (let i = 0; i < mixed.length; i++) {
  const value = mixed[i];

  if (typeof value === "string") {
    console.log("not number");
  } else {
    if (value % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
}
