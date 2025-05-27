document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  const form = event.target;
  const { name, email, event: selectedEvent } = form.elements;

  // Clear previous messages
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
    // Simulate server POST request using fetch with delay
    const userData = {
      name: name.value,
      email: email.value,
      event: selectedEvent.value,
    };

    document.getElementById('successMsg').textContent = 'Submitting registration...';

    // Simulate network delay
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          document.getElementById('successMsg').textContent =
            `✅ Registration successful! Server responded with ID: ${data.id}`;
          form.reset();
        })
        .catch(error => {
          document.getElementById('successMsg').textContent =
            `❌ Registration failed: ${error.message}`;
        });
    }, 1500); // 1.5 second delay
  }
});
