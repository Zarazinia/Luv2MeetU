var quotes = [
 

    'What is your perfect date?',
    'Are you looking for a long term relationship?',
    'Do you like speaking on the telephone or texting?',
    'Is it important to you to be friends first?',
    'Do you have hobbies?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
