// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
// });

// const nameField = document.querySelector('[name="name"]');

// nameField.addEventListener('input', () => {
//     console.log(nameField.value);
// });

let liczba1 = prompt("podaj liczbe 1:", "liczba 1");
let liczba2 = prompt("podaj liczbe 2:", "liczba 2");
let operator = prompt("podaj + - * /:", "operator");
if (operator == "+") {
    alert(liczba1 + liczba2);
}
if (operator == "-") {
    alert(liczba1 - liczba2);
}
if (operator == "*") {
    alert(liczba1 * liczba2);
}
if (operator == "/") {
    alert(liczba1 / liczba2);
}
else {
    alert("bledny operator")
}