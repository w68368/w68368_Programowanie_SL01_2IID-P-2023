// const wiek = prompt("Podaj swoj wiek: ");
// if (wiek < 18) {
//     console.log("Jestes niepełnoletni");
// } else {
//     console.log("Jestes pełnoletni");
// }


let age = prompt('Give me your age')
let message = (age < 18) ? 'You are too young' : 'You are enough old';
alert(message);
let temp_cel = Number(prompt('Give me temperature in Celsjusze'))
let temp_far = temp_cel + 273.5
console.log(temp_far)

let tablica = [1, 23, 43, 4, 8, 5, 3, 6, 7, 7, '7'];
console.log(tablica.reduce((a, b) => a+b));


console.log(tablica.filter(i => i%2 == 0))
tablica.forEach(element => {
   result = element * 3;
   console.log(result);
});
tablica.unshift(68304);
console.log(tablica);
console.log(tablica.indexOf(68304));
let il = tablica.length;
let sr = tablica.reduce((a, b) => a+b)/il;
console.log(sr);
max = Math.max(...tablica)
console.log(max)
let szuk = Number(prompt("Jakiej liczby szukamy?"))
ile = tablica.filter(i => i===szuk)
console.log(ile)
function Fibonacci(n) {
    let ciag = []
    if(n < 2) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        b += a;
        a = b-a;
        ciag.push(b);
        
    }
    console.log(ciag);
    return b;
}

for(i = 0; i < 100; i++) console.log(Fibonacci(i));
