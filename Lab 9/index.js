//Zad 1

// Получаем ссылку на все кнопки
const button1 = document.getElementById("button1"); // getElementById - возвращает ссылку на элемент по его идентификатору
const button2 = document.getElementById("button2"); // индефекаторы мы поставили в html тегом id
const button3 = document.getElementById("button3");

// Добавляем обработчик событий для каждой кнопки
button1.addEventListener("click", function () {
    resetButtonColors(); // Сбрасываем цвет для всех кнопок
    button1.style.backgroundColor = "red"; // Змінюємо колір фону для натиснутої кнопки
});
// addEventListener - добавляет событие на кнопку (тут у нас стоит так чтобы функция срабатыв при нажатии на кнопку)
// .style.backgroundColor - это функция меняет фактически сss (в данном случаи задний фон)

button2.addEventListener("click", function () {
    resetButtonColors();
    button2.style.backgroundColor = "blue";
});
// Тоже самое только для другой кнопки

button3.addEventListener("click", function () {
    resetButtonColors();
    button3.style.backgroundColor = "green";
});

//Функция для сброса цвета фона для всех кнопок

function resetButtonColors() {
    button1.style.backgroundColor = "";
    button2.style.backgroundColor = "";
    button3.style.backgroundColor = "";
}

//Zad 2

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validForm()) {
        alert("Sukces");
    }
});
// Первые две строки определяют элемент формы и добавляют обработчик события
// Если форма валидна то она возвращает true, то выводится сообщение "Sukces".

const nameField = document.querySelector("[name='name']");
nameField.addEventListener("input", () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});
// Следующие блоки кода назначают обработчики событий "input" для полей формы
// minLenghtValidation - Задаёт минимальную и длину текстовых данных (есть и maxLenghtValidation)

const surnameField = document.querySelector("[name='surname']");
surnameField.addEventListener("input", () => {
    requiredValidation(surnameField);
    minLengthValidation(surnameField, 2);
});

const emailField = document.querySelector("[name='email']");
emailField.addEventListener("input", () => {
    requiredValidation(emailField);
    minLengthValidation(emailField, 2);
    emailValidation(emailField);
});

const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener("input", () => {
    requiredValidation(passwordField);
});

const confirmPasswordField = document.querySelector(
    "[name='confirm-password']"
);
confirmPasswordField.addEventListener("input", () => {
    validConfirmPassword();
});
//  В обработчике вызывается функция validConfirmPassword, которая проверяет, соответствуют ли значения полей
// "confirm-password" и "password". Если значения не совпадают, выводится сообщение об ошибке.

function requiredValidation(field) {
    const errorField = document.querySelector(
        `[name='${field.name}'] + span.error`
    );
    if (!field.value || field.value === "") {
        //Zad 2
        //field.setCustomValidity('To pole jest wymagane');
        errorField.innerHTML = "To pole jest wymagane";
        return true;
    } else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = "";
        return false;
    }
}

function minLengthValidation(field, minLength = 0) {
    const errorField = document.querySelector(
        `[name='${field.name}'] + span.error`
    );
    if (field.value.length < minLength) {
        //Zad 2
        //field.setCustomValidity(`To pole musi mieć conajmniej ${minLength} znaków`);
        errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    } else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = "";
        return false;
    }
}

function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorField = document.querySelector(
        `[name='${field.name}'] + span.error`
    );
    if (!emailRegex.test(field.value)) {
        //Zad 2
        // field.setCustomValidity("Proszę podać poprawny adres e-mail.");
        errorField.innerHTML = "Proszę podać poprawny adres e-mail.";
        return true;
    } else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = "";
        return false;
    }
}

function passwordValidation(field) {
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
    const errorField = document.querySelector(
        `[name='${field.name}'] + span.error`
    );
    if (!passwordRegex.test(field.value)) {
        //Zad 2
        //field.setCustomValidity("Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.");
        errorField.innerHTML =
            "Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.";
        return true;
    } else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = "";
        return false;
    }
}

function validConfirmPassword() {
    const errorField = document.querySelector(
        `[name='confirm-password'] + span.error`
    );
    if (confirmPasswordField.value !== passwordField.value) {
        errorField.innerHTML = "Hasła nie są takie same";
        return true;
    } else {
        errorField.innerHTML = "";
        return false;
    }
}

function validForm() {
    if (
        requiredValidation(nameField) ||
        requiredValidation(surnameField) ||
        requiredValidation(emailField) ||
        requiredValidation(passwordField) ||
        minLengthValidation(nameField, 2) ||
        minLengthValidation(surnameField, 2) ||
        minLengthValidation(emailField, 2) ||
        minLengthValidation(passwordField, 8) ||
        emailValidation(emailField) ||
        passwordValidation(passwordField) ||
        validConfirmPassword()
    ) {
        return false;
    }

    return true;
}

