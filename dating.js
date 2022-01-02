var quotes = [
 

    'What is your perfect date?',
    'Are you looking for a long term relationship?',
    'Do you like speaking on the telephone or texting?',
    'Is it important to you to be friends first?',
    'What kind of music do you listen to?',
    'Have you been anywhere interesting lately?',
    'Do you have any hidden talents?',
    'Do you enjoy cooking? What do like to cook?',
    'Do you like going to new places?',
    'Where are your favourite places to visit?',
    'Would you try new foods?',
    'Would you try new places?',
    'Would you try new hobbies?',
    'Do you have hobbies?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
