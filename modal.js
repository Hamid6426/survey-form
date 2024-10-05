// Select the modal and close button
const modal = document.getElementById('thankYouModal');
const closeButton = document.querySelector('.close-button');

// Select the form and submit button
const surveyForm = document.getElementById('survey-form');
const submitButton = surveyForm.querySelector('.submit-button');

// Enable submit button only if form is valid
surveyForm.addEventListener('input', () => {
  submitButton.disabled = !surveyForm.checkValidity();
});

// Display the modal when the form is submitted
surveyForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Display the thank you modal
  modal.style.display = 'flex';

  // Optional: Reset the form after submission
  surveyForm.reset();
  submitButton.disabled = true; // Disable the button after reset
});

// Close the modal when clicking the close button
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
