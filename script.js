// Set the target date
const offerAcceptedDate = new Date('2024-07-26');

// Function to calculate the number of days since the offer date
function updateCounter() {
    const today = new Date();
    const timeDifference = today - offerAcceptedDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = daysDifference;
}

// Call the function to set the initial counter
updateCounter();