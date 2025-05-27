// Constants for event name and date
const eventName = "Community Clean-Up Day";
const eventDate = "2025-06-15";

// Variable for available seats
let availableSeats = 30;

// Display event details using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Simulate registration (seat taken)
availableSeats--;

// After one person registers
console.log(`Seat booked! Seats left: ${availableSeats}`);

// Simulate cancellation (seat freed)
availableSeats++;

// After a cancellation
console.log(`Seat canceled. Seats left: ${availableSeats}`);
