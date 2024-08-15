document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { id: 1, name: 'Music Concert', date: '2024-08-20', image: 'images/concert.jpg' },
        { id: 2, name: 'Art Exhibition', date: '2024-08-22', image: 'images/exhibition.jpg' },
        // Add more events as needed
    ];

    const eventsListContainer = document.getElementById('events-list');

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <h3>${event.name}</h3>
            <p>${event.date}</p>
            <a href="event-details.html?id=${event.id}">View Details</a>
        `;
        eventsListContainer.appendChild(eventCard);
    });
});
