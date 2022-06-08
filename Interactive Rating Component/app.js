
const submitBtn = document.querySelector('.btn');
const rating = document.querySelector('.rating')
const thankYou = document.querySelector('.thank-you-container')
const answer = document.querySelector('.answer-span');
const btns = document.querySelectorAll('.scores-item')
let result;



btns.forEach(value => {
    value.addEventListener('click', (e) => {

        btns.forEach(element => {
            element.style.backgroundColor = 'hsl(213, 19%, 18%)'
            element.style.color = 'hsl(216, 12%, 54%)'
        })
        value.style.backgroundColor = 'hsl(25, 97%, 53%)';
        value.style.color = '#fff'
        result = value.textContent;
    })
})

submitBtn.addEventListener('click', () => {
    if(result !== undefined){
        rating.classList.toggle('no-display')
        thankYou.classList.toggle('no-display')
        answer.textContent = result
    }else{
        alert('Please select a value!')
    }

})








