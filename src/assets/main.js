let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let input = document.getElementById('user-guess');
let message = document.getElementById('message');
let results = document.getElementById('results');
let code = document.getElementById('code');
let guessingDiv = document.getElementById('guessing-div');
let replayDiv = document.getElementById('replay-div');


function guess() {
    if(answer.value === '' && attempt.value === '') {
        setHiddenFields();
    }

    if(validateInput(input.value)){
        let results = getResults(input.value);
        if(results){
            setMessage("You Win! :)");
            showAnswer(true);
            showReplay();
        }
        else if(attempt.value >= 10){
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
        }
        else{
            setMessage("Incorrect, try again.");
        }
        attempt.value++;
    }
}

function setHiddenFields(){
    // Set hidden fields required for gameplay, ie. the answer
    let randomNumber = Math.floor(Math.random()*10000) // Randomly generated whole number [0-9999]
    //Make sure answer is always 4 digits
    answer.value = ("0000" + randomNumber.toString()).slice(-4);

    // Initialize the number of attempts
    attempt.value = 0;
}

function setMessage(msg){
    message.innerHTML = msg;
}

function validateInput(input){
    var result = true;
    if(input.length !== 4){
        result = false;
        setMessage("Guesses must be exactly 4 characters long.");
    }

    return result;
}
function getResults(input){
    let resultString = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

    let okspan = '<span class="glyphicon glyphicon-ok"></span>';
    let rightCharWrongPosition = '<span class="glyphicon glyphicon-transfer"></span>';
    let wrongChar = '<span class="glyphicon glyphicon-remove"></span>';

    let currentChar = '';
    let numCorrect = 0;
    for(var i = 0; i < input.length;i++){
        //loop through chars to check
        currentChar = input[i];
        let correctSequence = answer.value;
        if(currentChar == correctSequence[i]){
            resultString += okspan;
            numCorrect++;
        }
        else if(correctSequence.indexOf(currentChar)> -1){
            resultString += rightCharWrongPosition;
        }
        else{
            resultString += wrongChar;
        }
    }
    resultString += '</div>';

    // assign value to div's innerHTML
    results.innerHTML += resultString;

    return numCorrect == 4;
}

function showAnswer(hasWon){
    code.innerHTML = answer.value;

    if(hasWon){
        code.className += ' success';
    }
    else{
        code.className += ' failure';
    }
}
function showReplay(){
    guessingDiv.style.display = 'none';
    replayDiv.style.display = 'block';
}