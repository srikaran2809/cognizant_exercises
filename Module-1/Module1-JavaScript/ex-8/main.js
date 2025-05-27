const events = [
  { id: 1, name: "Music Night", category: "Music", registered: false },
  { id: 2, name: "Art Workshop", category: "Art", registered: false },
  { id: 3, name: "Tech Talk", category: "Technology", registered: false },
  { id: 4, name: "Jazz Festival", category: "Music", registered: false }
];

const container = document.querySelector('#events-container');
const categoryFilter = document.querySelector('#categoryFilter');
const searchBox = document.querySelector('#searchBox');

let filteredCategory = "All";
let searchKeyword = "";

// Render filtered events
function renderEvents() {
  container.innerHTML = '';

  const filtered = events.filter(event => {
    const categoryMatch = filteredCategory === "All" || event.category === filteredCategory;
    const nameMatch = event.name.toLowerCase().includes(searchKeyword.toLowerCase());
    return categoryMatch && nameMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p>No events found.</p>';
    return;
  }

  filtered.forEach(event => {
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

// Event Handlers
categoryFilter.onchange = (e) => {
  filteredCategory = e.target.value;
  renderEvents();
};

searchBox.addEventListener('keydown', () => {
  searchKeyword = searchBox.value;
  renderEvents();
});

// Initial render
renderEvents();
