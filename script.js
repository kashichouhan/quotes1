// var quotes = [
//     'radhe radhe',
//     'jay shree krishna',
//     'har har mahadev'
// ]

// function newQuote() {
//     var randomNumber = Math.floor(Math.random() * (quotes.length));
//     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

// }
// Global Variable used to store the quotes
// fetched from the API
var data;
let front = true;
const authors = document.querySelectorAll(".author");
const texts = document.querySelectorAll(".text");
const body = document.getElementById("body");
const button = document.querySelectorAll(".new-quote");
const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");
const authorFront = authors[0];
const authorBack = authors[1];
const textFront = texts[0];
const textBack = texts[1];
const buttonFront = button[0];
const buttonBack = button[1];

const displayQuote = () => {

    let index = Math.floor(Math.random() * data.length);
    let quote = data[index].text;
    let author = data[index].author;
    if (!author) {
        author = "Anonymous"
    }
    if (front) {
        textFront.innerHTML = quote;
        authorFront.innerHTML = author;
    } else {
        textBack.innerHTML = quote;
        authorBack.innerHTML = author;
    }
    front = !front;
}
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        this.data = data;

        displayQuote()
    });


function newQuote() {

    // Rotating the Quote Box
    blockBack.classList.toggle('rotateB');
    blockFront.classList.toggle('rotateF');

    displayQuote();
}