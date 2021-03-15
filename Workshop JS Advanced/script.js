let countrySearch = document.getElementById(`countrySearch`);
let btnGetData = document.getElementById(`getCountryData`);
let result = document.getElementById(`result`);

const baseUrl = `https://restcountries.eu/rest/v2/name/`;

function getCountry(name) {
    return fetch(baseUrl + name)
        .then(response => response.json())
        .then(data => {

            if (data !== null) {
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
                            <td>${countryData.flag}</ td>
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
            else {
                result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`

            }


        })
        .catch(error => console.error(error))

}

// console.log(getCountry(`eesti`));


// function getCountryData(documents) {

//     if (!documents || typeof (documents) !== `object`) {
//         throw new Error(`Problem with the documents`);
//     }
//     if (documents.length === 0) {
//         throw new Error(`Problem no documents!`);
//     } else {

//         let countryData = [];

//         documents.forEach(data => {

//             // console.log(`Vlegulaaaaaaaaaa`, data.flag)

//             // countryData.push(data.flag);
//             countryData.push(data.flag, data.name, data.population, data.capital, data.area);

//         })

//         // console.log(`countttttt`, countryData)
//         return countryData;

//     }
// }





btnGetData.addEventListener(`click`, function () {

    getCountry(countrySearch.value);
})



