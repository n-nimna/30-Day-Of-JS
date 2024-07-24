document.addEventListener('DOMContentLoaded', () => {
    const challenges = document.querySelectorAll('.challenge');
    const techElement = document.querySelector('.tech');
    const technologies = ['NODE', 'PYTHON', 'MONGODB', 'PANDAS'];
    let currentIndex = 0;

    challenges.forEach(challenge => {
        challenge.addEventListener('click', () => {
            challenges.forEach(c => c.classList.remove('selected'));
            challenge.classList.add('selected');
        });
    });

    const updateTechnology = () => {
        techElement.textContent = technologies[currentIndex];
        currentIndex = (currentIndex + 1) % technologies.length;
    };

    setInterval(updateTechnology, 600); // Change every 60 seconds (60000 ms)
});
