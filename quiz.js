const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const qImg = document.getElementById('qImg');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C')
const counter = document.getElementById('counter')
const timeGuage = document.getElementById('timeGuage');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('score');

// create questions
let questions = [
  {
    question: " 1. what does html stands for?",
    imgSrc : "./html.png",
    choiceA: "Hyper Text Markup Lang",
    choiceB: "Hyper Transform Lang",
    choiceC: "Hyper control Lang",
    correct: "A"
  },
  {
    question: " 2. what does CSS stands for?",
    imgSrc : "./css.png",
    choiceA: "Cascading Sheet Style",
    choiceB: "Cascading Style Sheet",
    choiceC: "Cascading control sheet",
    correct: "B"
  },
  {
    question: " 3.what does JS stands for?",
    imgSrc : "./js.png",
    choiceA: "JavaStructure",
    choiceB: "JavaSource",
    choiceC: "JavaScript",
    correct: "C"
  }
];

// Variables
const lastQuestion = questions.length - 1;
let runningQuestion  = 0;

//render question
function renderQuestion(){
  let q = questions[runningQuestion];
  question.innerHTML = ` <p>${q.question}</p>`;
  qImg.innerHTML = `<img src="${q.imgSrc}">`;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();


//render Progress
function renderProgress(){
  for( let qIndex = 0; qIndex <= lastQuestion; qIndex++){
    progress.innerHTML += `<div class='prog' 
    id='qIndex'></div>`;
  }
}

let count = 0;
const questionTime = 10;
const guageWidth = 150;
const guageUnit = guageWidth/ questionTime;

// counter render 
function renderCounter(){
  if(count <= questionTime){
    counter.innerHTML = count;
    timeGuage.style.width = count * guageUnit;
    count++
  } else {
    count = 0;
  }
}