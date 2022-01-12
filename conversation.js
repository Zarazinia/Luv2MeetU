var quotes = [
 
    'If you could fly a plane, where would you go?',
    'If you could choose to be any animal, what would it be and why?',
    'How do you like to decorate your house, pictures, cushions, posters, bright colours or plain colours?',
    'What do you think about green issues, do you like to recycle or grow your own vegetables?',
    'What is your favourite film and why do you like it?',
    'If you could live in any type of building or house what would it be and why?',
    'Would you prefer to go on an adventure, maybe in the country-side or stay at home and bake or draw maybe?',
    'If you could visit the moon, what would you like to leave there to show you’ve been?',
    'If you could be a super hero what would your super power be?',
    'The Major Oak in Sherwood forest as stood there for hundreds of years and must have seen so many things happen and people! If you were an oak tree, where would you want to be so you could watch the people and world go by?',
    'Do you think it would be best to be a tiny mouse and be able to hide easily or a tiger and be big enough to protect yourself?',
    'Tell me your best joke',
    'If you could build a house under the sea or in space where would you build it and why?',
    'If you were Dr Who and had the Tardis, where would you go and then what would you do there',
    'Describe what would be your best picnic: where, food, company?',
    'What superpower do you wish you could have?',
    'Where would you live if you could live anywhere in the world and why?',
    'If you owned a farm, what animals would you have on it or what would you grow?',
    'What is your best memory of being a child?',
    'If you had to give someone advice on how to be happy, what would you tell them?',
    'What makes you smile?',
    'What do you think about cheese?',
    'How have you kept yourself busy and happy through covid?',
    'What do you think about politics?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
