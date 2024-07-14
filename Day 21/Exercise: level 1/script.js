// Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log('First Paragraph:', firstParagraph.textContent);

// Get each of the paragraphs using document.querySelector('#id') and by their id
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');

console.log('Paragraph 1:', para1.textContent);
console.log('Paragraph 2:', para2.textContent);
console.log('Paragraph 3:', para3.textContent);
console.log('Paragraph 4:', para4.textContent);

// Get all the p elements as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = document.querySelectorAll('p');

// Loop through the nodeList and get the text content of each paragraph
allParagraphs.forEach((para, index) => {
    console.log(`Paragraph ${index + 1}:`, para.textContent);
});

// Set a text content to the fourth paragraph, "Fourth Paragraph"
para4.textContent = "Fourth Paragraph";
console.log('Updated Paragraph 4:', para4.textContent);

// Set id and class attribute for all the paragraphs using different attribute setting methods
allParagraphs.forEach((para, index) => {
    para.setAttribute('id', `newPara${index + 1}`);
    para.className = `newClass${index + 1}`;
});

// Verify the changes
allParagraphs.forEach((para, index) => {
    console.log(`Updated Paragraph ${index + 1} ID:`, para.id);
    console.log(`Updated Paragraph ${index + 1} Class:`, para.className);
});
