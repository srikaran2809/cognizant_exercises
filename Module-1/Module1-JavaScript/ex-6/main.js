// Initial array of events
const events = [
  { title: "Music Night", category: "Music" },
  { title: "Art Exhibition", category: "Art" },
  { title: "Tech Meetup", category: "Technology" }
];

// 👉 Add new event using .push()
events.push({ title: "Jazz Concert", category: "Music" });
events.push({ title: "Workshop on Baking", category: "Cooking" });

// 👉 Filter only music events using .filter()
const musicEvents = events.filter(event => event.category === "Music");

// 👉 Format event titles using .map()
const formattedEvents = musicEvents.map(event => `🎵 ${event.title}`);

// 👉 Display formatted music events in the browser
const eventList = document.getElementById("event-list");
formattedEvents.forEach(title => {
  const item = document.createElement("p");
  item.textContent = title;
  eventList.appendChild(item);
});

console.log("All Events:", events);
console.log("Music Events:", musicEvents);
console.log("Formatted Titles:", formattedEvents);
