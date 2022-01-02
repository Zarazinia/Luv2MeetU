var quotes = [
 

    'line 1?',
    'line2?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
