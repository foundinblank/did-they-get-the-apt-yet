// Set the target dates
const offerAcceptedDate = new Date('2024-07-26');
const applicationSubmittedDate = new Date('2024-10-02');

// Function to calculate the number of days since a given date
function calculateDaysSince(date) {
    const today = new Date();
    const timeDifference = today - date;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}

// Update the counters
function updateCounters() {
    document.getElementById('offerCounter').textContent = calculateDaysSince(offerAcceptedDate);
    document.getElementById('applicationCounter').textContent = calculateDaysSince(applicationSubmittedDate);
}

// Call the function to set the initial counters
updateCounters();