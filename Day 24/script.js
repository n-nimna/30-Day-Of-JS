document.getElementById('calculate-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const gravity = parseFloat(document.getElementById('planet').value);

    if (isNaN(weight) || gravity === 0) {
        alert('Please enter a valid weight and select a planet.');
        return;
    }

    const weightOnPlanet = weight * gravity;
    document.getElementById('result').textContent = `Your weight on this planet would be ${weightOnPlanet.toFixed(2)} kg.`;
});
