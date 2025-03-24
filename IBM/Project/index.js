// Selecting form and event list container
const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('events');

// Event form submission
eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting form values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;

    // Creating a new list item for the event
    const newEvent = document.createElement('li');
    newEvent.innerHTML = `
        <h3>${eventName}</h3>
        <p>Date: ${eventDate}</p>
        <p>Location: ${eventLocation}</p>
    `;

    // Adding the new event to the event list
    eventList.appendChild(newEvent);

    // Resetting form
    eventForm.reset();
});
