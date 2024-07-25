const countries = [
    {
        name: 'Bulgaria',
        capital: 'Sofia',
        languages: ['Bulgarian'],
        population: 7153784,
        flag: 'path_to_bulgaria_flag'
    },
    {
        name: 'Finland',
        capital: 'Helsinki',
        languages: ['Finnish', 'Swedish'],
        population: 5491817,
        flag: 'path_to_finland_flag'
    },
    {
        name: 'Fiji',
        capital: 'Suva',
        languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
        population: 867000,
        flag: 'path_to_fiji_flag'
    },
    {
        name: 'Christmas Island',
        capital: 'Flying Fish Cove',
        languages: ['English'],
        population: 2072,
        flag: 'path_to_christmas_island_flag'
    },
    {
        name: 'Niue',
        capital: 'Alofi',
        languages: ['English'],
        population: 1470,
        flag: 'path_to_niue_flag'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const countriesContainer = document.getElementById('countries-container');
    const searchInput = document.getElementById('search-input');
    const sortNameButton = document.getElementById('sort-name');
    const sortCapitalButton = document.getElementById('sort-capital');
    const sortPopulationButton = document.getElementById('sort-population');
    const barChart = document.getElementById('bar-chart');

    const renderCountries = (countries) => {
        countriesContainer.innerHTML = '';
        countries.forEach((country, index) => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');
            countryCard.innerHTML = `
                <img src="${country.flag}" alt="${country.name} flag">
                <h2>${country.name}</h2>
                <p>Capital: ${country.capital}</p>
                <p>Languages: ${country.languages.join(', ')}</p>
                <p>Population: ${country.population.toLocaleString()}</p>
            `;
            setTimeout(() => {
                countryCard.style.opacity = 1;
                countryCard.style.transform = 'translateY(0)';
            }, index * 100);
            countriesContainer.appendChild(countryCard);
        });
    };

    const updateBarChart = (countries) => {
        const worldPopulation = countries.reduce((acc, country) => acc + country.population, 0);
        barChart.innerHTML = `
            <div class="bar" style="width: 100%">${worldPopulation.toLocaleString()}</div>
        `;
        countries.forEach((country) => {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.width = `${(country.population / worldPopulation) * 100}%`;
            bar.innerText = `${country.name}: ${country.population.toLocaleString()}`;
            barChart.appendChild(bar);
        });
    };

    const filterCountries = () => {
        const query = searchInput.value.toLowerCase();
        const filteredCountries = countries.filter((country) =>
            country.name.toLowerCase().includes(query) ||
            country.capital.toLowerCase().includes(query) ||
            country.languages.some((language) => language.toLowerCase().includes(query))
        );
        renderCountries(filteredCountries);
        updateBarChart(filteredCountries);
    };

    const sortCountries = (criteria) => {
        const sortedCountries = [...countries].sort((a, b) => {
            if (a[criteria] < b[criteria]) return -1;
            if (a[criteria] > b[criteria]) return 1;
            return 0;
        });
        renderCountries(sortedCountries);
        updateBarChart(sortedCountries);
    };

    searchInput.addEventListener('input', filterCountries);
    sortNameButton.addEventListener('click', () => sortCountries('name'));
    sortCapitalButton.addEventListener('click', () => sortCountries('capital'));
    sortPopulationButton.addEventListener('click', () => sortCountries('population'));

    renderCountries(countries);
    updateBarChart(countries);
});
