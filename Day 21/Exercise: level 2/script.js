// Get all the p elements as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = document.querySelectorAll('p');

// Loop through the nodeList to style and update each paragraph
allParagraphs.forEach((para, index) => {
    // Set text content
    para.textContent = `Updated Paragraph ${index + 1}`;

    // Set id and class attributes
    para.id = `newPara${index + 1}`;
    para.className = `newClass${index + 1}`;

    // Change style
    para.style.color = (index === 0 || index === 2) ? 'green' : 'red';
    para.style.backgroundColor = 'lightgrey';
    para.style.border = '1px solid black';
    para.style.fontSize = '16px';
    para.style.fontFamily = 'Arial, sans-serif';
});

// Verify the changes
allParagraphs.forEach((para, index) => {
    console.log(`Updated Paragraph ${index + 1} - ID: ${para.id}, Class: ${para.className}, Text: ${para.textContent}, Color: ${para.style.color}`);
});
