//Create counter 
let counter = document.querySelector('#counter');
let time = 0;
let intervalID =
    setInterval(() => {
    time++;
    counter.innerHTML = time;
}, 1000)

//Assign buttons for counter
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let countArr = []
minus.addEventListener('click', () => {
    time--;
    counter.innerHTML = time;
})
plus.addEventListener('click', () => {
    time++;
    counter.innerHTML = time;
})
heart.addEventListener('click', () => {
    let ul = document.createElement('ul')
    let currentTime = time;
    if (currentTime = time){
        countArr.push('1');
    } else {
        countArr = [];
    }
    ul.innerText = `${time} has been liked ${countArr.length} time(s)!`;
    document.querySelector('.likes').appendChild(ul)
})

pause.addEventListener('click', () => {
    pause.classList.toggle('stop')
    if(pause.classList.contains('stop')) {
        pause.innerHTML = 'start';
        clearInterval(intervalID);
        //minus.disabled = true; 
        //plus.disabled = true;  
        //heart.disabled = true;   
    } else {
        pause.innerHTML = 'pause'
        intervalID = setInterval(() => {
            time++;
            counter.innerHTML = time;
        }, 1000)
        minus.disabled = false; 
        plus.disabled = false;  
        heart.disabled = false; 
    }
})



//comments
    let form = document.querySelector('#comment-form');
    form.addEventListener('submit', e => {
    e.preventDefault();
    let input = document.querySelector('#comment-input')
    createComment(input.value)
    form.reset();
})

function createComment(comment) {
    let ul = document.createElement('ul');
    ul.textContent = `${comment}`;
    document.querySelector('h3').appendChild(ul);
}




