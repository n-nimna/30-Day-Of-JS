document.addEventListener('DOMContentLoaded', () => {
    const populationBtn = document.getElementById('population-btn');
    const languagesBtn = document.getElementById('languages-btn');
    const chartTitle = document.getElementById('chart-title');
    const chart = document.getElementById('chart');

    const populationData = [
        { name: 'China', value: 1377422166 },
        { name: 'India', value: 1295210000 },
        { name: 'USA', value: 323947000 },
        { name: 'Indonesia', value: 258705000 },
        { name: 'Brazil', value: 206135893 },
        { name: 'Pakistan', value: 194125062 },
        { name: 'Nigeria', value: 186988000 },
        { name: 'Bangladesh', value: 161006790 },
        { name: 'Russia', value: 146599183 },
        { name: 'Japan', value: 126960000 }
    ];

    const languagesData = [
        { name: 'English', value: 1132000000 },
        { name: 'Mandarin', value: 1117000000 },
        { name: 'Hindi', value: 615000000 },
        { name: 'Spanish', value: 534300000 },
        { name: 'French', value: 280000000 },
        { name: 'Arabic', value: 274000000 },
        { name: 'Bengali', value: 273000000 },
        { name: 'Portuguese', value: 234000000 },
        { name: 'Russian', value: 154000000 },
        { name: 'Japanese', value: 125000000 }
    ];

    function renderChart(data, title) {
        chartTitle.innerText = title;
        chart.innerHTML = '';
        data.forEach(item => {
            const bar = document.createElement('div');
            bar.classList.add('bar');

            const name = document.createElement('span');
            name.innerText = item.name;

            const barValue = document.createElement('div');
            barValue.style.width = `${(item.value / data[0].value) * 100}%`;
            barValue.innerText = item.value.toLocaleString();

            bar.appendChild(name);
            bar.appendChild(barValue);
            chart.appendChild(bar);
        });
    }

    populationBtn.addEventListener('click', () => {
        populationBtn.classList.add('active');
        languagesBtn.classList.remove('active');
        renderChart(populationData, '10 Most Populated Countries in the World');
    });

    languagesBtn.addEventListener('click', () => {
        languagesBtn.classList.add('active');
        populationBtn.classList.remove('active');
        renderChart(languagesData, '10 Most Spoken Languages in the World');
    });

    // Initial render
    renderChart(populationData, '10 Most Populated Countries in the World');
});
