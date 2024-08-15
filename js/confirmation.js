document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const eventName = params.get('event');
    const eventDate = params.get('date');

    const confirmationDetailsContainer = document.getElementById('confirmation-details');
    confirmationDetailsContainer.innerHTML = `
        <h2>Booking Confirmed!</h2>
        <p>Event: ${eventName}</p>
        <p>Date: ${eventDate}</p>
        <p>Thank you for your booking. A confirmation email has been sent to your registered email address.</p>
    `;
});
