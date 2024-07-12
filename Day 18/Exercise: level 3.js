// 1. Read the cats api and find the average weight of cat in metric unit.

fetch('https://api.example.com/cats')
  .then(response => response.json())
  .then(data => {
    // Assuming data is an array of cat objects with a 'weight' property
    // Example data format: [{ name: 'Fluffy', weight: { value: 8, unit: 'lbs' } }, ...]

    // Filter out cats with weight units in pounds and convert to kilograms
    let catsInKg = data.filter(cat => cat.weight.unit === 'lbs')
                        .map(cat => cat.weight.value * 0.453592); // Convert lbs to kg

    // Calculate average weight
    if (catsInKg.length > 0) {
      let totalWeight = catsInKg.reduce((acc, curr) => acc + curr, 0);
      let averageWeight = totalWeight / catsInKg.length;
      console.log(`Average weight of cats in metric units (kg): ${averageWeight.toFixed(2)} kg`);
    } else {
      console.log('No cats found with weight data in pounds.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));


  // 2.Read the countries api and find out the 10 largest countries

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Sort countries by area in descending order
    data.sort((a, b) => b.area - a.area);

    // Get the top 10 largest countries
    let largestCountries = data.slice(0, 10);

    // Output the 10 largest countries
    console.log('Top 10 largest countries:');
    largestCountries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name.common} - Area: ${country.area} sq. km`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


// 3.Read the countries api and count total number of languages in the world used as officials.

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    let officialLanguages = new Set(); // Using a Set to store unique languages

    // Iterate through each country
    data.forEach(country => {
      if (country.languages && country.languages.official) {
        // Add each official language to the Set
        country.languages.official.forEach(language => {
          officialLanguages.add(language);
        });
      }
    });

    // Count the total number of unique official languages
    let totalOfficialLanguages = officialLanguages.size;
    console.log(`Total number of official languages used worldwide: ${totalOfficialLanguages}`);
  })
  .catch(error => console.error('Error fetching data:', error));

