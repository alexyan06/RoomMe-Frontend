function showRegister() {
    window.location.href = "register.html";
}

function showLogin() {
    window.location.href = "login.html";
}

function showDashboard() {
    window.location.href = "dashboard.html";
}

function showProfile() {
    window.location.href = "profile.html";
}

function showQuestions() {
  window.location.href = "questions.html";
}

function updateSliderValue(questionNumber) {
  // Get the slider value
  const sliderId = "answer" + questionNumber;
  const labelId = "sliderValue" + questionNumber;
  const slider = document.getElementById(sliderId);
  const label = document.getElementById(labelId);
  // Update the label with the current slider value
  label.textContent = slider.value;
}

function submitAnswer(questionNumber) {
    // Hide the current question and show the next one
    document.getElementById("question" + questionNumber).style.display = "none";
    document.getElementById("question" + (questionNumber + 1)).style.display = "block";
  }