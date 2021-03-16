let countrySearch = document.getElementById(`countrySearch`);
let btnGetData = document.getElementById(`getCountryData`);
let result = document.getElementById(`result`);
let btnAscending = document.getElementById(`btnAscending`)
let btnDescending = document.getElementById(`btnDescending`)
let btnAscendingArea = document.getElementById(`btnAscendingArea`)
let btnDescendingArea = document.getElementById(`btnDescendingArea`)

const baseUrl = `https://restcountries.eu/rest/v2/name/`;

let resultFromFetch = [];
console.log(`Before result from fetch data`, resultFromFetch)

function getCountry(name) {
    return fetch(baseUrl + name)
        .then(response => response.json())
        .then(data => {

            if (data !== null) {
                printTable(data);
                resultFromFetch = data;
                // console.log(`data`, data)
                // console.log(`result from fetch data`, resultFromFetch)
            }
            else {
                result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
            }

        })
        .catch(error => console.error(error))

}

btnGetData.addEventListener(`click`, function () {

    getCountry(countrySearch.value);
    // console.log(`-------------------------`);

})



btnAscending.addEventListener(`click`, function () {

    let ascArray = resultFromFetch.sort((country1, country2) => country1.population - country2.population);
    result.innerHTML = '';
    printTable(ascArray);

})


btnDescending.addEventListener(`click`, function () {

    let descArray = resultFromFetch.sort((country1, country2) => country2.population - country1.population);
    // result.innerHTML = '';
    printTable(descArray);

})


btnAscendingArea.addEventListener(`click`, function () {
    let ascArea = resultFromFetch.sort((country1, country2) => country1.area - country2.area)
    // result.innerHTML = '';
    printTable(ascArea)
})

btnDescendingArea.addEventListener(`click`, function () {
    let descArea = resultFromFetch.sort((country1, country2) => country2.area - country1.area)
    // result.innerHTML = '';
    printTable(descArea)
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