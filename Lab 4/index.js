// Zadanie 1

const book = {
    title: "Harry Potter i kamień filozoficzny",
    author: "Joannę Rowling",
    year: 1997,
  };
  
function getBookInfo(book) {
    return book.title + "-" + book.author + "(" + book.year + ")";
  }
  
const bookInfo = getBookInfo(book);
  
console.log(bookInfo);
  
   // Zadanie 2

  const student = {
    firstName: "A",
    lastName: "B",
    albumNumber: "68153",
    grades: [4, 4, 5],
  };
  
//   const averageGrade =
//     student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;

const averageGrade = (student.grades[0] + student.grades[1] +student.grades[2])/student.grades.length;
  
console.log("Student: " + student.firstName + " " + student.lastName);
console.log("Numer albomu: " + student.albumNumber);
console.log("Oceny: " + student.grades);
console.log("Srednia ocena: " + averageGrade);
  
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
      return this.brand + " " + this.model + "(" + this.year + ")" + ", " + "Kolor: " + this.color + " " + "Predkosc: " + this.speed;
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
  console.log("Age: " + car.getAge());
  
  // Zadanie 5
  
  let wysota = Number(prompt("wysota prostakata: ", "0"));
  let szer = Number(prompt("szerokosc prostakata: ", "0"));
  let prost = {
    height: wysota,
    width: szer,

    getArea: function(){
        return this.height * this.width;
    },
    getPerimeter: function() {
        return (this.height * 2) + (this.width * 2);
    },
    getSquare: function() {
        if (this.height == this.width) {
            return true;
        } else {
            return false;
        }
    },  
};

document.write("Pole: " + prost.getArea() + " ");
document.write("Obwod: " + prost.getPerimeter() + " ");
document.wrie("Prostakat jest kwadratem: " + prost.getSquare());







