// Print out all the cat names in to catNames variable.

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    let catNames = data.map(country => country.name.common);
    console.log(catNames);
    // Further processing or storing catNames as needed
  })
  .catch(error => console.error('Error fetching data:', error));
