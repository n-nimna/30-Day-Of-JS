// script.js

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change the color of each letter
  function changeColors() {
    const textElements = document.querySelectorAll('.animated-text');
    
    textElements.forEach(textElement => {
      const text = textElement.textContent;
      textElement.innerHTML = ''; // Clear the current content
  
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.color = getRandomColor();
        textElement.appendChild(span);
      }
    });
  }
  
  // Initial color change on page load
  changeColors();
  
  // Change colors every 60 seconds
  setInterval(changeColors, 60);
  
