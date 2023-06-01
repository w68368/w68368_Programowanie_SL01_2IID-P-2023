// Zadanie 1

const book = {
  title: "Harry Potter i kamień filozoficzny",
  author: "Joannę Rowling",
  year: 1997,
};

console.log(`${book.title} - ${book.author} (${book.year})`);

// В  переменную  можно задать разные значения типа как автор год и т.д
// Чтобы использовать что-то одно можно использовать просто название переменной и значение (book.title)
// Но если надо совместить пару значений можно использовать такую функцию `${}`

// Zadanie 2

const student = {
  firstName: "",
  lastName: "",
  albumNumber: "68153",
  grades: [4, 4, 5],
};

const averageGrade =
  student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length; // lenght длина массива
// reduce - применяется каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// grade - это текущий обрабатываемый элемент массива.
// sum - перебирает каждый елемент массива. Все просто acc + curr. Это означает что каждый елемент массива будет добавляться

console.log(`Student: ${student.lastName} ${student.firstName}`);
console.log(`Number albumu: ${student.albumNumber}`);
console.log(`Oceny: ${student.grades.join(", ")}`);
console.log(`średnią ocena: ${averageGrade}`);

// Zadanie 3-4

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2021,
  color: "silver",
  speed: 0,
  birthYear: 2021,

  increaseSpeed: function (value) {
    this.speed += value;
  },

  decreaseSpeed: function (value) {
    if (this.speed >= value) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  },

  getInfo: function () {
    return `${this.brand} ${this.model} (${this.year}), Color: ${this.color}, Speed: ${this.speed}`;
  },
  getAge: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

console.log(car.getInfo());
car.increaseSpeed(50);
console.log(car.getInfo());
car.decreaseSpeed(20);
console.log(car.getInfo());
car.decreaseSpeed(40);
console.log(car.getInfo());
console.log(car.getAge());

// Zadanie 5

let rectangle = {
  width: 5,
  height: 7,

  getArea: function () {
    return this.width * this.height;
  },

  getPerimeter: function () {
    return 2 * (this.width + this.height);
  },

  isSquare: function () {
    return this.width === this.height;
  },
};

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.isSquare());


let tb = [1,2,3,4,5];
let count = 0;
function parz () {
  for (const el of tb) {
    if (el % 2 === 0) {
      count++;
    }
  }
}
console.log(tb.parz())



