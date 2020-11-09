const correctAnswers = ['A','A','B','A'];

const formu = document.querySelector('form');

formu.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [formu.question1.value, formu.question2.value, formu.question3.value, formu.question4.value];

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })

    const result = document.querySelector('#result');
    result.classList.remove('d-none');

    const puntuacion = document.querySelector('span');
   

    scrollTo(0,0);

    let output = 0;

    const timer = setInterval(() =>{
        puntuacion.innerHTML = output + ' %';
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },10);
    
});