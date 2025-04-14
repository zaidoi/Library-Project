const aadBtn = document.querySelector(".adbk");
const subBtn = document.querySelector(".submit");
const divCards = document.querySelector(".cards")


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
displayBook(name,author,pages,ranId,read)
}

function displayBook(name,author,pages,id,read){
const divCard = document.createElement('div');
divCard.classList.add("card")
divCard.setAttribute("data-id", id)
const p1 = document.createElement('p')
p1.innerHTML = "Name: "+ name
const p2 = document.createElement('p')
p2.innerHTML = "Author: "+ author
const p3 = document.createElement('p')
p3.innerHTML = "Pages: "+ pages
const p4 = document.createElement('p')
p4.innerHTML = "Read: "+ read
const btn = document.createElement('button')
btn.classList.add('submit')
btn.innerHTML = "Delete"
btn.addEventListener("click",()=>{
    const index = myLibrary.findIndex(book => book.id === id);
    if(index !== -1) myLibrary.splice(index,1)
        divCard.remove()
})

divCard.appendChild(p1)
divCard.appendChild(p2)
divCard.appendChild(p3)
divCard.appendChild(p4)
divCard.appendChild(btn)

divCards.appendChild(divCard)
}


aadBtn.addEventListener("click",() => {
    document.querySelector('form').classList.toggle("hidden");
})

subBtn.addEventListener("click", (e) =>{
    e.preventDefault()
const name = document.querySelector('#name').value
const author = document.querySelector('#author').value
const pages = document.querySelector('#pages').value
const read = document.querySelector('#read').value
addBookToLibrary(name,author,pages,read)
document.querySelector('.form').classList.toggle("hidden");

})