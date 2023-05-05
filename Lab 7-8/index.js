const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(checkNameIsValid()) {
        alert('sukces');
        form.reset();
    }
});

function requiredValidation(field) {
    if(!field.value || field.value === '') {
        field.setCustomValidity("Brak wartosci");
        return false;
    }
    else {
        field.setCustomValidity("");
        return true;
    }
}

function minLengthValidation(field, ) {
    if(!field.value || field.value === '') {
        field.setCustomValidity("Brak wartosci");
        return false;
    }
}
