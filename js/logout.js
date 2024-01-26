
$(document).ready(function () {
  // Retrieve username from sessionStorage
  const username = sessionStorage.getItem('username');

  // Display username in the navbar
  const usernameDisplay = $('#usernameDisplay');
  if (username) {
    usernameDisplay.text(`Welcome, ${username}`);
  } else {
    // If username is not found, you can handle the redirect here
    // window.location.href = 'login.html';
  }

  // Check if sessionStorage has username
  if (sessionStorage.username !== null) {
    // Change style
    $('#logouts').css('display', 'block');
  }

  // Logout function
  $('#logouts').on('click', function () {
    // Clear Session Storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');

    // Redirect to the login page
    window.location.href = 'index.html';
  });
});