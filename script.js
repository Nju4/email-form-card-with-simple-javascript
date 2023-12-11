function validateEmail() {
  var emailInput = document.getElementById('email');
  var errorMessage = document.getElementById('error-message');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    errorMessage.innerHTML = 'Thanks.';
    errorMessage.style.color = 'green';
  } else {
    errorMessage.innerHTML = 'Please provide a valid email.';
    errorMessage.style.color = 'red';
  }
}

