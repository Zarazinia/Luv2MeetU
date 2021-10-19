var quotes = [
 
    'What\'s your favourite smell?',
    'What\'s your worst fashion decision?',
    'If you had to be a celebrity\'s pet, what would you be, and who would you belong to?',
    'If you could have any animal as a pet what would it be?',
    'What\'s the worst thing you\'ve ever eaten?',
    'What\'s the strangest thing you\'ve found in the fridge?',
    'What do you own that you have no idea how to use?',
    'What\'s the first thing you\'d do if you became a god?',
    'What would you like rainbows to smell of?',
    'What would you name your boat, if you had one?',
    'Which part of your body would you cybernetically enhance?',
    'What have you got rid of, or sold, that you wish you hadn\'t?',
    'What\'s the largest animal you think you can beat in a fight?',
    'What will you win a Nobel Prize for?',
    'Would you prefer a cruise with Tom Cruise or a walking holiday with Christopher Walken?',
    'If you could jump into a pool of something, what would it be?,
    'Who\'s the most interesting person you\'ve ever met, and why?',
    'If you had to, would you eat a human being? If yes, which one?',
    'What\'s the most interesting thing you\'ve seen this week?',
    'What\'s the most sinister thing you\'ve ever seen?',
    'Who\'s your favourite baddie?',
    'If you could hypnotise somebody, who would it be, and what would you make them do?',
    'Have you ever have you had a crush on fictional character?',
    'What\'s the worst present you\'ve ever recieved?',
    'If you could be part Gruffalo would you have claws, fangs, horns or spikes?', 
    'What sport would be the funniest to add a mandatory amount of alcohol to?',
    'What\'s the most annoying thing that your parents do?',
    'What would be the hat to end all hats? What could you wear on your head that would make people stop what they are doing and stare in awe and amazement?',
    'What would be the coolest animal to scale up to the size of a horse?',
    'If you were wrongfully put into an insane asylum, how would you convince them that you’re actually sane and not just pretending to be sane?',
    'If you were arrested with no explanation, what would your friends and family assume you had done?'
    
    /*
    
    '\"Life isn\'t about finding yourself, it is about creating yourself.\"\n\n-George Bernard Shaw',
    '\"If you are going down the right path and you are willing to keep walking, eventually you\'ll make progress.\"\n-Barrack Obama',
    '\"I have far more respect for the person with a single idea who gets there than one with a thousand ideas and does nothing.\"\n-Thomas Edison',
    '\"What is necessary to change a person is to change awareness of himself.\"\n\n-Anonymous',
    '\"Many people die at the age of 25, but their bodies are not buried until 75.\"\n\n-Benjamin Franklin',
    '\"If you don\'t get up every morning with a burning desire to do things, you don\'t have enough goals.\"\n-Lou Holtz',
    '\"The way to learning is to get rid of the arrogance of knowledge.\"\n-Confucius',
    '\"One can have no smaller or greater master than the mastery of oneself.\"\n-Leonardo Da Vinci',
    '\"Empty pockets never held anyone back. Only empty heads and hearts can do that.\"\n-Norman Vincent Peale',
    '\"Great things are not done by impulse, but a series of small things brought together.\"\n-Vincent Van Gogh',
    '\"Why measure your success by the suggestions of society when you can become a success on your own terms.\"\n-Robin Sharma',
    '\"A man may imagine things that are false, but he can only undetsand things that are true.\"\n-Isaac Newton',
    '\"Our fatigue is often caused not by work, but by worry, frustration and resentment.\"\n-Dale Carnegie',
    '\"True freedom is impossible without a mind made free by discipline.\"\n-Mortimer Adler',
    '\"Focus is not saying yes to all important things, rather it is saying no to less important things.\"\n-Steve Jobs',
    '\"Discipline is the bridge between goals and accomplishment.\"\n-Jim Rohn',
    '\"Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure and loss only act as motivation.\"\n-Jim Rohn',
    '\"Be yourself. Everyone else is already taken.\"\n-Oscar Wilde',
    '\"Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind.\"\n-Bernard M. Baruch',
    '\"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.\"\n-Marilyn Monroe',
    '\"When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.\"\n-Lao Tzu',
    '\"If you are always trying to be ordinary, you will never know how extraordinary you can be.\"\n-Michelangelo',
    '\"Leadership is solving problems. The day people stop bringing you their problems is the day you have stopped leading them.\"\n-Colin Powell',
    '\"Start by doing what\'s necessary; then do what\'s possible and suddenly you are doing the impossible.\"\n-Francis of Assisi',
    '\"It is our choices that show what we truly are, far more than our abilities.\"\n-Albus Dumbledore',
    '\"It does not do to dwell on dreams and forget to live.\"\n-Mirror of Erised'
    
    */
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

