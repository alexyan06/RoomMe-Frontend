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

function updateSliderValue() {
  // Get the slider value
  const slider = document.getElementById('answer1');
  const label = document.getElementById('sliderValue1');
  // Update the label with the current slider value
  label.textContent = slider.value;
}

function submitAnswer(questionNumber) {
    const sliderId = "answer" + questionNumber;
    const slider = document.getElementById(sliderId);
    const sliderValue = slider.value;
  
    // Update the label with the current slider value
    const labelId = "sliderValue" + questionNumber;
    const label = document.getElementById(labelId);
    label.textContent = sliderValue;
  
    // Process the answer (e.g., send it to a server)
    console.log("Answer for Question " + questionNumber + ": " + sliderValue);
  
    // Hide the current question and show the next one
    document.getElementById("question" + questionNumber).style.display = "none";
    document.getElementById("question" + (questionNumber + 1)).style.display = "block";
  }