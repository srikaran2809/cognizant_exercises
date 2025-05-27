// Sample list of events
const events = [
  { id: 1, name: "Music Night", category: "Music", registered: false },
  { id: 2, name: "Art Workshop", category: "Art", registered: false },
  { id: 3, name: "Tech Talk", category: "Technology", registered: false }
];

// Access DOM container
const container = document.querySelector('#events-container');

// Function to render all event cards
function renderEvents() {
  container.innerHTML = ''; // Clear previous content

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    if (event.registered) card.classList.add('registered');

    const title = document.createElement('h3');
    title.textContent = event.name;

    const category = document.createElement('p');
    category.textContent = `Category: ${event.category}`;

    const button = document.createElement('button');
    button.textContent = event.registered ? 'Cancel Registration' : 'Register';
    button.onclick = () => {
      event.registered = !event.registered;
      renderEvents(); // Update UI
    };

    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(button);
    container.appendChild(card);
  });
}

// Initial render
renderEvents();
