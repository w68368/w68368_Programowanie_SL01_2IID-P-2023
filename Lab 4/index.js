function Book(tutyl, autor, rok) {
    this.tutyl = tutyl;
    this.autor = autor;
    this.rok = rok;
    this.fullBook = function(){
        return this.tutyl + "-" + this.autor + "(" + this.rok + ")";

    };
    
   }
const ksiazka = new Book("Wojna i pokoj", "Lew Tolstoj", 1863);
console.log(ksiazka.fullBook())