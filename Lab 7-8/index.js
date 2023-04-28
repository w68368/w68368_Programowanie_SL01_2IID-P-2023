const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
})

const nameField = document.querySelector('[name="name"]');

nameField.addEventListener('input', () => {
    console.log(nameField.value);
});