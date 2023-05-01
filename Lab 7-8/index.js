// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
// });

// const nameField = document.querySelector('[name="name"]');

// nameField.addEventListener('input', () => {
//     console.log(nameField.value);
// });

let liczba = prompt("wpisz liczbe", "liczba");
if (liczba % 2 == 0) {
    alert("liczba parzysta");
}
else {
    alert("liczba nieparzysta");
}