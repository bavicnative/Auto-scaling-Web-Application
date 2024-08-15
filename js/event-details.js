document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get('id');

    const events = [
        { id: 1, name: 'Music Concert', date: '2024-08-20', description: 'A grand music concert.', image: 'images/concert.jpg' },
        { id: 2, name: 'Art Exhibition', date: '2024-08-22', description: 'An exhibition of modern art.', image: 'images/exhibition.jpg' },
        // Add more events as needed
    ];

    const event = events.find(e => e.id == eventId);

    if (event) {
        const eventDetailsContainer = document.getElementById('event-details');
        eventDetailsContainer.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <h2>${event.name}</h2>
            <p>${event.date}</p>
            <p>${event.description}</p>
        `;
    }

    const bookNowButton = document.getElementById('book-now');
    bookNowButton.addEventListener('click', function() {
        window.location.href = `confirmation.html?event=${event.name}&date=${event.date}`;
    });
});
