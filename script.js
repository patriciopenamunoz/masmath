let VERSION = "0.1.0";
var answer = 0;

document.getElementById("answer").addEventListener("keyup", validateInput);

function setQuestion() {
  let num1 = Math.round(Math.random() * (9 - 1) + 1);
  let num2 = Math.round(Math.random() * (9 - 1) + 1);

  document.getElementById("question").innerHTML = `${num1} x ${num2}`;
  answer = num1 * num2;
}

function validateInput(event) {
  if (document.getElementById("answer").value == answer) {
    document.getElementById("answer").value = "";
    setQuestion();
  }
}

window.onload = function() {
  setQuestion();
};
