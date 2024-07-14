// Function to get random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change the color of the year every 1 second
const yearElement = document.getElementById('year');
setInterval(() => {
    yearElement.style.color = getRandomColor();
}, 1000);

// Update date and time every second
const datetimeElement = document.getElementById('datetime');
function updateDateTime() {
    const now = new Date();
    datetimeElement.textContent = now.toLocaleString();
    datetimeElement.style.backgroundColor = getRandomColor();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Apply background colors based on challenge status
const completedChallenges = document.querySelectorAll('.completed');
const ongoingChallenges = document.querySelectorAll('.ongoing');
const comingChallenges = document.querySelectorAll('.coming');

completedChallenges.forEach(challenge => {
    challenge.style.backgroundColor = 'green';
});

ongoingChallenges.forEach(challenge => {
    challenge.style.backgroundColor = 'yellow';
});

comingChallenges.forEach(challenge => {
    challenge.style.backgroundColor = 'red';
});
