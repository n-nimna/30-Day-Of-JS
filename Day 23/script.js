function generateNumbers() {
    const numberInput = document.getElementById('numberInput').value;
    const numbersContainer = document.getElementById('numbersContainer');
    numbersContainer.innerHTML = '';

    const numberCount = parseInt(numberInput, 10);
    if (isNaN(numberCount) || numberCount <= 0 || numberCount > 50) {
        alert('Please enter a valid number between 1 and 50');
        return;
    }

    for (let i = 0; i < numberCount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = i;

        if (isPrime(i)) {
            numberDiv.classList.add('prime');
        } else if (i % 2 === 0) {
            numberDiv.classList.add('even');
        } else {
            numberDiv.classList.add('odd');
        }

        numbersContainer.appendChild(numberDiv);
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
