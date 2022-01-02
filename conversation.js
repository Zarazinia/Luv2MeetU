var quotes = [
 
    'What superpower do you wish you could have?',
    'What makes you smile?',
    'What do you think about cheese?',
    'What do you think about politics?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
