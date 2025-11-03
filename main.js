//an Object is need for Q/A

const QA = [

    {
        question: 'What color is an Orange?',
        choice: ['Pink','Red','Orange','Grey'],
        correct: 'Orange'
    },
    {
        question: 'What color is the Sky?',
        choice: ['Red', 'Purple', 'Blue', 'Black'],
        correct: 'Blue'
    },
    {
        question: 'What is 2+6?',
        choice : ['20', '12', '9', '8'],
        correct: '8'
    }
]

//A button to begin the quiz

const begin = document.querySelector('.startQuiz');
begin.addEventListener('click', loadQuiz);


const quiz = document.querySelector('.quiz-container');
const question = document.querySelector('.question');
const btnContainer = document.querySelector('.button-container');
const quizTitle = document.querySelector('.quiz-title');


let questionCounter = 0;
let results = 0;


function loadQuiz(){

    const currentQ = QA[questionCounter];  // since currentQ value is declared as QA's index of [questionCounter] 
    question.textContent = currentQ.question; // allowing currentQ to inherit it's properties
    quizTitle.textContent= '';
    btnContainer.innerHTML = '';
    begin.style.display = 'none'



    currentQ.choice.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('choices');   
        btn.textContent = choice;

        btn.addEventListener('click', () => logic(choice));
        btnContainer.appendChild(btn);

    });


     

    function logic(selectedChoice) {
        const currentQ = QA[questionCounter];
        if(selectedChoice === currentQ.correct){
            results++;
            console.log('congrats')
        }




        // advance to the next question

        questionCounter++;

        if(questionCounter < QA.length) {
            setTimeout(() => loadQuiz(), 200);
        } else if (results < QA.length / 2 ) {
            quiz.innerHTML = `<h2> Ah ${results}/3 better luck next time 😢 <h2>`;
        }else {
            quiz.innerHTML = `<h2> ${results}/3 aren't you a smarty pants!🎉 <h2>`
        }
        

    };
}







