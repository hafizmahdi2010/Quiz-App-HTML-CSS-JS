const quiz = [
  {
    id: 1,
    ques: "What does HTML stand for?",
    options: [
      { id: 1, option: "HyperText Markup Language", isTrue: true },
      { id: 2, option: "HyperText Machine Language", isTrue: false },
      { id: 3, option: "Hyper Transfer Markup Language", isTrue: false },
      { id: 4, option: "Home Tool Markup Language", isTrue: false },
    ],
    reason: "HTML is the standard markup language for creating web pages.",
  },
  {
    id: 2,
    ques: "Which CSS property is used to change the text color of an element?",
    options: [
      { id: 1, option: "font-color", isTrue: false },
      { id: 2, option: "text-color", isTrue: false },
      { id: 3, option: "color", isTrue: true },
      { id: 4, option: "background-color", isTrue: false },
    ],
    reason: "The 'color' property is used to set the text color in CSS.",
  },
  {
    id: 3,
    ques: "Which of the following is not a JavaScript data type?",
    options: [
      { id: 1, option: "Boolean", isTrue: false },
      { id: 2, option: "String", isTrue: false },
      { id: 3, option: "Number", isTrue: false },
      { id: 4, option: "Element", isTrue: true },
    ],
    reason: "In JavaScript, 'Element' is not a data type, but an object that represents a DOM element.",
  },
  {
    id: 4,
    ques: "What does the 'var' keyword do in JavaScript?",
    options: [
      { id: 1, option: "Declares a block-scoped variable", isTrue: false },
      { id: 2, option: "Declares a globally-scoped variable", isTrue: false },
      { id: 3, option: "Declares a function-scoped variable", isTrue: true },
      { id: 4, option: "Declares a constant variable", isTrue: false },
    ],
    reason: "'var' declares a function-scoped variable in JavaScript.",
  },
];



const getQuiz = () => {
  let randomNumber = Math.floor(Math.random() * quiz.length);
  let randomQuiz = quiz[randomNumber];
  console.log(randomQuiz);
  populateQuiz(randomQuiz);
}

const populateQuiz = (quiz) => {
  let options = document.querySelector("#optionsCon");
  let ques = document.querySelector("#ques");
  let reason = document.querySelector(".reason")

  ques.innerText = quiz.ques;
  let html = `
  
      <b style="margin: 10px 0px;">Options</b>

      <div class="option" isTrue="${quiz.options[0].isTrue}">${quiz.options[0].option}</div>
      <div class="option" isTrue="${quiz.options[1].isTrue}">${quiz.options[1].option}</div>
      <div class="option" isTrue="${quiz.options[2].isTrue}">${quiz.options[2].option}</div>
      <div class="option" isTrue="${quiz.options[3].isTrue}">${quiz.options[3].option}</div>

  `;

  options.innerHTML = html;

  let allOptions = document.querySelectorAll(".option");
  Array.from(allOptions).map((item,index)=>{
    item.addEventListener("click",(e)=>{
      if(e.target.getAttribute("istrue") === "true"){
       alert("Your Answer IS Correct")
       getQuiz();
      }
      else{
        alert("Your Answer IS Wrong !")
        getQuiz();
      }
    })
  })
}

getQuiz();