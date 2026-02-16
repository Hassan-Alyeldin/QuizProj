let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];

    const questionEl = document.createElement("p");
    questionEl.classList.add("question-text"); // selector محدد
    questionEl.textContent = q.question;
    quizDiv.appendChild(questionEl);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options-container"); // selector محدد

    q.options.forEach(option => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      const brk = document.createElement("br");
      
      radio.type = "radio";
      radio.name = "option";
      radio.value = option;
      
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + option));
      label.appendChild(brk);
      optionsDiv.appendChild(label);
    });

    quizDiv.appendChild(optionsDiv);

    const button = document.createElement("button");
    button.id = "submit-btn"; 
    button.textContent = "Submit";
    button.onclick = checkAnswer;
    quizDiv.appendChild(button);

  } else {
    showResult();
  }
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  const submitBtn = document.getElementById("submit-btn");

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.5";
  submitBtn.style.cursor = "not-allowed";

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  
  
  setTimeout(showQuestion, 500);
}

function showResult() {
  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);
  window.location.href = "result.html";
}

showQuestion();