async function loadEvents() {
  const spinner = document.getElementById("spinner");
  const eventContainer = document.getElementById("events");
  spinner.style.display = "block";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch events");

    const data = await response.json();
    spinner.style.display = "none";

    data.forEach((user) => {
      const div = document.createElement("div");
      div.className = "event";
      div.innerHTML = `<strong>${user.name}</strong><br/>Email: ${user.email}`;
      eventContainer.appendChild(div);
    });
  } catch (error) {
    spinner.style.display = "none";
    eventContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

loadEvents();
