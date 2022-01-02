var quotes = [
 

    'What do you think about cheese?',
    'Do you enjoy cooking? What do like to cook?',
    'Do you like going to new places?',
    'Where are your favourite places to visit?',
    'Would you try new foods?',
    'Would you try new places?',
    'Would you try new hobbies?',
    'Are you interested in politics?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
