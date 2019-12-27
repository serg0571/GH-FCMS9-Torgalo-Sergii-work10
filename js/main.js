/*add*/
let add = function (x, y) {
  return x + y
};

console.log(add(100, 5))

/*  subtraction*/
let sub = function (x, y) {
  return x - y
};

console.log(sub(10, 25))

/*  multiple*/
function mul(x, y) {
  return x * y
}

console.log(mul(10, 5));

/*  division*/
function div(x, y) {
  return x / y
}

console.log(div(10, 5))
/*square*/
let square = function (x) {
  return x * x
}
console.log(square(3))

/*square 2^10*/
let result = 2
let counter = 0
while (counter < 10) {
  result = (result * 2)
  counter = counter + 1
}
console.log(result);

/*factorial*/
let factorial = function (x) {
  return x * (x - 1)
}
console.log(factorial(3))

/*sin*/
function sin(a) {
  return Math.sin(a)
}

console.log(sin(1))

/*cos*/
function cos(x) {
  return Math.cos(x)
}

console.log(cos(1))




