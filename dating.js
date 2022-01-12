var quotes = [           
 
    'How many brothers and sisters do you have?',
    'If you cooked me a three course meal what would it be?',
    'What is your least favourite food?',
    'What/’s your favourite thing to do at the weekend?',
    'Do you like being out with a group of people or do you prefer just one or two people at a time?',
    'What are the three most important things that make you happy?',
    'Do you have a job or volunteer?',
    'What would you say are the best things about you, being kind, helping people or able to make people laugh maybe?',
    'Do you have any bad habits?',
    'Are you looking for a long term relationship, how would you like it to go?',
    'Can you give me some examples of music that you like and when you listen to it?',
    'Are you interested in any subjects like history, art or space? Can you tell me about them?',
    'What is your perfect date?',
    'Are you looking for a long term relationship?',
    'Do you like speaking on the telephone or texting?',
    'Is it important to you to be friends first?',
    'What kind of music do you listen to?',
    'Have you been anywhere interesting lately?',
    'Do you have any hidden talents?',
    'Do you enjoy cooking? What do like to cook?',
    'What activities or places do you enjoy going to? Bowling, cinema or walking in the countryside maybe?',
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
