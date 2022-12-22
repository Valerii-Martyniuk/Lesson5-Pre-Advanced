// function addNumb() {
//   let n = 0;
//   return function sum(number) {
//     n = n + number;
//     console.log(n);
//   };
// }

// let N = addNumb();
// N(3);
// N(5);
// N(120);

function addNumb() {
  let n = 0;
  return (number) => (n = n + number);
}
let N = addNumb();
console.log(N(3));
console.log(N(5));
console.log(N(120));

///////////////
let n = 0;
let b = (number) => (n = n + number);
console.log(b(2));
console.log(b(2));
console.log(b(12));
