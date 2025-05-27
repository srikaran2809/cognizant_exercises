// Sample event data
const events = [
  { name: "Clean-Up Drive", date: "2025-06-30", seats: 10 },
  { name: "Food Donation Camp", date: "2024-12-01", seats: 0 },
  { name: "Yoga Workshop", date: "2025-05-10", seats: 5 },
  { name: "Blood Donation", date: "2025-07-05", seats: 2 }
];

const eventList = document.getElementById("eventList");
const today = new Date();

// Loop through events
events.forEach(event => {
  const eventDate = new Date(event.date);

  // Show only upcoming events with available seats
  if (eventDate > today && event.seats > 0) {
    const li = document.createElement("li");
    li.textContent = `${event.name} on ${event.date} - ${event.seats} seats left`;
    eventList.appendChild(li);
  }
});

// Simulated registration function
function registerForEvent(eventName) {
  try {
    const event = events.find(e => e.name === eventName);

    if (!event) {
      throw new Error("Event not found.");
    }

    const eventDate = new Date(event.date);
    if (eventDate <= today) {
      throw new Error("Event already occurred.");
    }

    if (event.seats <= 0) {
      throw new Error("No seats available.");
    }

    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}

// Simulate registrations
registerForEvent("Clean-Up Drive");
registerForEvent("Food Donation Camp"); // should throw error
registerForEvent("Yoga Workshop");      // should throw error (past date)
