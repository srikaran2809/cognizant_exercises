// Event array
let events = [];

// --- 1. addEvent function ---
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// Add sample events
addEvent("Clean-Up Drive", "2025-06-30", 10, "Environment");
addEvent("Tech Talk", "2025-07-10", 20, "Education");
addEvent("Art Workshop", "2025-06-15", 5, "Arts");
addEvent("Blood Donation", "2024-11-01", 0, "Health");

// --- 2. registerUser function ---
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) {
    console.error("Event not found");
    return;
  }

  const today = new Date();
  const eventDate = new Date(event.date);

  if (eventDate <= today) {
    console.error("Event already occurred");
    return;
  }

  if (event.seats <= 0) {
    console.error("No seats left");
    return;
  }

  event.seats--;
  console.log(`User registered for ${event.name}. Remaining seats: ${event.seats}`);
}

// --- 3. filterEventsByCategory function ---
function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

// --- 4. Closure to track registrations by category ---
function createCategoryCounter() {
  const counters = {};
  return function registerCategory(category) {
    if (!counters[category]) {
      counters[category] = 0;
    }
    counters[category]++;
    console.log(`Registrations in ${category}: ${counters[category]}`);
  };
}

const categoryCounter = createCategoryCounter();

// Sample usage
registerUser("Clean-Up Drive");
categoryCounter("Environment");

registerUser("Tech Talk");
categoryCounter("Education");

registerUser("Blood Donation"); // should give error
categoryCounter("Health");

// --- 5. Higher-Order Function Example: filter with callback ---
function dynamicFilter(callback) {
  return events.filter(callback);
}

// Example: filter upcoming events with seats
const today = new Date();
const upcomingWithSeats = dynamicFilter(event =>
  new Date(event.date) > today && event.seats > 0
);

const eventList = document.getElementById("eventList");
upcomingWithSeats.forEach(event => {
  const li = document.createElement("li");
  li.textContent = `${event.name} (${event.category}) on ${event.date}`;
  eventList.appendChild(li);
});
