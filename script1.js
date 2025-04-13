const aadBtn = document.querySelector(".adbk");
const subBtn = document.querySelector(".submit");


function Book(name,author,pages,id,read){
    this.name = name;
    this.author = author
    this.pages = pages
    this.id = id
    this.read = read
}

const myLibrary = []

function addBookToLibrary(name,author,pages,read){
let ranId = crypto.randomUUID();
const newBook = new Book(name,author,pages,ranId,read)
myLibrary.push(newBook)
console.log(myLibrary);

}
addBookToLibrary("Zaid","Zaid",3,"yes")


aadBtn.addEventListener("click",() => {
    document.querySelector('form').classList.toggle("hidden");

})