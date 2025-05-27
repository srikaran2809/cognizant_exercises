// --- 1. Define Event constructor ---
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

// --- 2. Add method to prototype ---
Event.prototype.checkAvailability = function () {
  const today = new Date();
  const eventDate = new Date(this.date);
  return eventDate > today && this.seats > 0;
};

// --- 3. Create event objects ---
const event1 = new Event("Clean-Up Drive", "2025-07-01", 10, "Environment");
const event2 = new Event("Art Workshop", "2024-10-15", 0, "Arts");
const event3 = new Event("Health Camp", "2025-08-05", 15, "Health");

const allEvents = [event1, event2, event3];

// --- 4. Display info using Object.entries ---
const list = document.getElementById("eventDetails");

allEvents.forEach(event => {
  const li = document.createElement("li");

  const availability = event.checkAvailability() ? "Available" : "Not Available";
  li.innerHTML = `<strong>${event.name}</strong> (${availability})<br/>`;

  const details = Object.entries(event);
  details.forEach(([key, value]) => {
    li.innerHTML += `${key}: ${value}<br/>`;
  });

  list.appendChild(li);
});
