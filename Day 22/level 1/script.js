//Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
//Even numbers background is green
//Odd numbers background is yellow
//Prime numbers background is red


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('numberContainer');
    
    for (let i = 1; i <= 100; i++) {
        const div = document.createElement('div');
        div.classList.add('number');
        
        if (i % 2 === 0) {
            div.classList.add('even');
        } else {
            div.classList.add('odd');
        }
        
        if (isPrime(i)) {
            div.classList.add('prime');
        }
        
        div.textContent = i;
        container.appendChild(div);
    }
});
