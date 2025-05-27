document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('🔄 Form submitted');

  const form = event.target;
  const { name, email, event: selectedEvent } = form.elements;

  console.log('📋 Input values:', {
    name: name.value,
    email: email.value,
    event: selectedEvent.value
  });

  // Validation logs
  let isValid = true;

  if (name.value.trim() === '') {
    console.warn('⚠️ Name is empty');
    isValid = false;
  }
  if (email.value.trim() === '' || !email.value.includes('@')) {
    console.warn('⚠️ Invalid email');
    isValid = false;
  }
  if (selectedEvent.value === '') {
    console.warn('⚠️ No event selected');
    isValid = false;
  }

  if (isValid) {
    const userData = {
      name: name.value,
      email: email.value,
      event: selectedEvent.value
    };

    console.log('📦 Sending data to server:', userData);

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
        .then(response => {
          console.log('✅ Server responded:', response);
          return response.json();
        })
        .then(data => {
          console.log('📨 Data received:', data);
          document.getElementById('successMsg').textContent = `✅ Registered! ID: ${data.id}`;
          form.reset();
        })
        .catch(error => {
          console.error('❌ Fetch failed:', error);
        });
    }, 1500);
  }
});
