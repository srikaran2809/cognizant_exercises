const events = [
  { id: 1, name: 'Music Concert', category: 'music', location: 'Park' },
  { id: 2, name: 'Art Workshop', category: 'art', location: 'Gallery' },
  { id: 3, name: 'Jazz Night', category: 'music', location: 'Club' },
];

// Default parameters + spread operator for cloning
function filterEventsByCategory(eventList = [], category = '') {
  const clonedList = [...eventList];
  if (!category) return clonedList;
  return clonedList.filter(({ category: cat }) => cat === category);
}

// Render events using destructuring
function renderEvents(eventList) {
  const container = document.querySelector('#eventsContainer');
  container.innerHTML = ''; // Clear previous

  eventList.map(({ id, name, category, location }) => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Category: ${category}</p>
      <p>Location: ${location}</p>
    `;
    container.appendChild(card);
  });
}

// Initial render - all events
renderEvents(events);

// Event listener for category filter dropdown
document.querySelector('#categoryFilter').addEventListener('change', (e) => {
  const filteredEvents = filterEventsByCategory(events, e.target.value);
  renderEvents(filteredEvents);
});
