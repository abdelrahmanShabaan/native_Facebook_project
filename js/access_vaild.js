$(document).ready(function () {
    // Check if localStorage is empty
    if ($.isEmptyObject(localStorage.username)) {
      // Redirect to the login page
      window.location.href = 'index.html';
    } else {
      // Your else logic goes here
    }
  });