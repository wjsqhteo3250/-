const title = document.querySelector('#title');
const range = document.querySelector('#range');
const form = document.querySelector('form');
const userNumber = form.querySelector('#userNumber')
const playBtn = form.querySelector('#play');
const measure = document.querySelector('#measure');
const result = document.querySelector('#result');


function handleChange(){
    title.innerHTML = `Generate a number between ${range.min} to ${range.value}`
    userNumber.min = range.min;
    userNumber.max = range.value;
    const rangeNumber = parseInt(range.value, 10);
    const userChoseNumber = parseInt(userNumber.value, 10);
    if(userChoseNumber > rangeNumber) {
        measure.innerHTML = `Choose number less than equal to ${range.value}`
    } else {
        measure.innerHTML = `choose a number between ${range.min} to ${range.value}`;
        result.innerHTML = "";
    }
}


range.addEventListener('input', handleChange);

function handlePlay(event){
    event.preventDefault();
    const userChoseNumber = parseInt(userNumber.value, 10);
    const rangeNumber = parseInt(range.value, 10);
    if(userChoseNumber <= rangeNumber){
        const number = Math.floor(Math.random()*(rangeNumber+1));
        measure.innerHTML = `You chose:${userNumber.value}, the machine chose:${number}`
        if(userChoseNumber === number) {
            result.innerHTML = "You won!"
        }
        else{result.innerHTML = "You lost!"}
        
    } 
    else if(userChoseNumber > rangeNumber) {
        range.addEventListener('input', handleChange);
        
    }
}

playBtn.addEventListener('click', handlePlay);