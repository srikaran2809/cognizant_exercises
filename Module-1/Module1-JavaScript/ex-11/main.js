document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const form = event.target;
  const { name, email, event: selectedEvent } = form.elements;

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('eventError').textContent = '';
  document.getElementById('successMsg').textContent = '';

  let isValid = true;

  if (name.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  if (email.value.trim() === '' || !email.value.includes('@')) {
    document.getElementById('emailError').textContent = 'Valid email is required';
    isValid = false;
  }

  if (selectedEvent.value === '') {
    document.getElementById('eventError').textContent = 'Please select an event';
    isValid = false;
  }

  if (isValid) {
    // Simulate successful registration
    document.getElementById('successMsg').textContent = `Thank you ${name.value}, you’ve registered for ${selectedEvent.value}!`;
    form.reset();
  }
});
