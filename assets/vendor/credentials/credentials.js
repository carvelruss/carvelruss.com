/**
 * Password Protected Page
 */
const expectedEmail = "friesquad@codefrites.com";
const expectedPassword = "CodeFritesProjects";
let attempts = 0;

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submitButton");
  const content = document.getElementById("content");
  const passwordForm = document.getElementById("passwordForm");

  submitButton.addEventListener("click", function () {
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (
      enteredEmail === expectedEmail &&
      enteredPassword === expectedPassword
    ) {
      // Correct email and password entered, show the protected content
      content.style.display = "block";
      passwordForm.style.display = "none"; // Hide the password input form
    } else {
      // Incorrect email or password entered
      attempts++;
      if (attempts >= 2) {
        // Redirect or take action to 'kill' the site after 1 attempts
        window.location.replace("/index.html"); // Redirect to an error page
      } else {
        // Display error message or take other action
        alert(
          "Incorrect email or password. We will close this page now for security reason."
        );
      }
    }
  });

  // Add event listener for "keydown" event on email and password fields
  emailInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // If Enter key is pressed, trigger the click event of the submit button
      submitButton.click();
    }
  });

  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // If Enter key is pressed, trigger the click event of the submit button
      submitButton.click();
    }
  });
});
