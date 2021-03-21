let countrySearch = document.getElementById(`countrySearch`);
let btnGetData = document.getElementById(`getCountryData`);
let result = document.getElementById(`result`);
let btnAscending = document.getElementById(`btnAscending`)
let btnDescending = document.getElementById(`btnDescending`)
let btnAscendingArea = document.getElementById(`btnAscendingArea`)
let btnDescendingArea = document.getElementById(`btnDescendingArea`)
let btnAscendingName = document.getElementById(`btnAscendingName`)
let btnDescendingName = document.getElementById(`btnDescendingName`)
let loader = document.getElementById("loader");

const baseUrl = `https://restcountries.eu/rest/v2/name/`;

let resultFromFetch = [];
console.log(`Before result from fetch data`, resultFromFetch)

function getCountry(name) {
    toggleLoader(true);
    return fetch(baseUrl + name)
        .then(response => response.json())
        .then(data => {
            toggleLoader(false);
            if (data !== null) {
                printTable(data);
                resultFromFetch = data;
            }
            else {
                result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
            }

        })
        .catch(error => {
            toggleLoader(false);
            console.error(error);
        })


}

btnGetData.addEventListener(`click`, function () {

    getCountry(countrySearch.value);


})



btnAscending.addEventListener(`click`, function () {

    let ascArray = resultFromFetch.sort((country1, country2) => country1.population - country2.population);
    result.innerHTML = '';
    printTable(ascArray);

})


btnDescending.addEventListener(`click`, function () {

    let descArray = resultFromFetch.sort((country1, country2) => country2.population - country1.population);
    printTable(descArray);

})


btnAscendingArea.addEventListener(`click`, function () {
    let ascArea = resultFromFetch.sort((country1, country2) => country1.area - country2.area)
    printTable(ascArea)
})

btnDescendingArea.addEventListener(`click`, function () {
    let descArea = resultFromFetch.sort((country1, country2) => country2.area - country1.area)

    printTable(descArea)
})


btnAscendingName.addEventListener(`click`, function () {
    let ascName = resultFromFetch.sort((country1, country2) => (country1.name).localeCompare(country2.name))
    printTable(ascName);
})

btnDescendingName.addEventListener(`click`, function () {
    let descName = resultFromFetch.sort((country1, country2) => (country2.name).localeCompare(country1.name))
    printTable(descName);
})



function printTable(data) {
    result.innerHTML = '';
    result.innerHTML += `
        <table>
            <tr>
                <td>Flag</ td>
                <td>Name</ td>
                <td>Population</ td>
                <td>Capital</ td>
                <td>Area</ td>
                <td>Language</ td>
                <td>Currency</ td>
            </tr>
        </table>
    `;

    for (const countryData of data) {
        result.innerHTML += `
        <table>
             <tr>
                <td><img src="${countryData.flag}" height=10px></ td>
                <td>${countryData.name}</ td>
                <td>${countryData.population}</ td>
                <td>${countryData.capital}</ td>
                <td>${countryData.area}</ td>
                <td>${countryData.languages.map(x => x.name)}</ td>
                <td>${countryData.currencies.map(x => x.name)}</ td>
            </tr>
        </table>
`
    }
}

const toggleLoader = toggle => {
    if (toggle)
        loader.style.display = `block`;
    else
        loader.style.display = `none`;
}