let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    if(answer === '' && attempt === '') {
        setHiddenFields();
    }
    
    let input = document.getElementById('user-guess');

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
    document.getElementById('message').innerHTML = msg;

}