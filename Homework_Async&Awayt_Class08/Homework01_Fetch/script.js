// Homework 01 Solution with Fetch

let regionalBlockInput = document.getElementById(`regionalBlockInput`);
let btnGetData = document.getElementById(`getData`);
const result = document.getElementById("result");

const baseUrl = `https://restcountries.eu/rest/v2/regionalbloc/`;

function getRegionalBlock(code) {
    return fetch(baseUrl + code)
        .then(response => response.json())
        .catch(error => console.error(error))

}


function getAltSpellings(documents) {

    if (!documents || typeof (documents) !== `object`) {
        throw new Error(`Problem with the documents`);
    }
    if (documents.length === 0) {
        throw new Error(`Problem no documents!`);
    } else {

        let countriesWithAltSpellings = [];

        documents.forEach(country => {
            // console.log(`------------`, documents);
            // console.log(`------------`, country);
            if (country.altSpellings.length > 1 && country.altSpellings.length < 4) {
                countriesWithAltSpellings.push(country);
            }

        })
        // console.log(`-------`, countriesWithAltSpellings);
        return countriesWithAltSpellings

    }
}

async function getDataFromFetch(code) {

    let response = await getRegionalBlock(code);
    // checkDocuments();
    let allSpellingsCountries = getAltSpellings(response);
    // console.log(allSpellingsCountries);
    allSpellingsCountries.forEach((x, index) => console.log(`Country with alt Spellings > 1 & < 4 : ${index + 1}. ${x.name}`))
}

btnGetData.addEventListener(`click`, function () {

    getDataFromFetch(regionalBlockInput.value);

})