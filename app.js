const questions = [
  {
    question: "1. What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Central Programming Unit", "Core Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "2. Which device is used to point and click on a computer screen?",
    options: ["Keyboard", "Mouse", "Monitor", "Printer"],
    answer: "Mouse"
  },
  {
    question: "3. What is Wi-Fi used for?",
    options: ["Cooking", "Internet connection", "Charging phones", "Printing documents"],
    answer: "Internet connection"
  },
  {
    question: "4. Which of these is a type of smartphone app?",
    options: ["Calculator", "Refrigerator", "Blender", "Oven"],
    answer: "Calculator"
  },
  {
    question: "5. Which company makes the iPhone?",
    options: ["Samsung", "Apple", "Google", "Microsoft"],
    answer: "Apple"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];

    const questionEl = document.createElement("p");
    questionEl.textContent = q.question;
    quizDiv.appendChild(questionEl);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach(option => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      const brk = document.createElement("br");
      radio.type = "radio";
      radio.name = "option";
      radio.value = option;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + option));
      label.appendChild(brk)
      optionsDiv.appendChild(label);
    });

    quizDiv.appendChild(optionsDiv);

    const button = document.createElement("button");
    button.textContent = "Submit";
    button.onclick = checkAnswer;
    quizDiv.appendChild(button);

  } else {
    showResult();
  }
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  showQuestion();
}

function showResult() {
  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);
  window.location.href = "result.html";
}

showQuestion();

