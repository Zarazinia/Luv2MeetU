var inspire = [
 
    'Keep calm',
    'Take deep breaths!',
    'Be Brave!',
    'Keep trying',
    'Love Life!',
    'Be Awesome!',
    'Stay strong!',
    'Be Kind',
    'Yes you can!',
    'Go for it!',
    'Stay positive',
    'Never give up!',
    'Just be you',
    'Be proud of you',
    'Make some-one smile!',
    'Be happy!',
    'Don\'t panic!', 
    'Smile!'

]

function newinspire(){
    var randomNumber = Math.floor(Math.random()*inspire.length);
    document.getElementById('inspire').innerHTML = inspire[randomNumber];
}
