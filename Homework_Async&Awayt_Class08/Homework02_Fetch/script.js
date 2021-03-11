// // Homework 02 Solution with Fetch
// ?? The user should insert ISO 3166-1 2-letter country code. From the response you get, log every country name that has the same currency as the country from the response. Use Promise with AJAX in every function that you want to receive some response from the api-endpoints. Also provide solution with fetch() when you send requests. The function that supposed to log every country name should be asynchronous and you shall await the call for specific country data.


let letterCountryCodeInput = document.getElementById(`letterCountryCodeInput`);
let btnLetterCode = document.getElementById(`getLetterCode`);
const baseUrl = `https://restcountries.eu/rest/v2/alpha/`;

// because for certain country we can have multiple currencies 
// we will return all the currencies that the country has 
// for example Cuba has 2 currencies





function getCountry(code) {
    // console.log('enter 1');
    return fetch(baseUrl + code)
        .then(response => response.json())
        .catch(error => console.error(error))
}

function getCurrencies(country) {
    // console.log('eneter 2');
    let currencyArray = [];

    country.currencies.forEach(element => {
        currencyArray.push(element.code)
    })

    return currencyArray;
}
const baseUrlCurrency = `https://restcountries.eu/rest/v2/currency/`;

function getCountriesForSpecificCurrency(currency) {
    //console.log("currency:",baseUrlCurrency + currency);
    return fetch(baseUrlCurrency + currency)
        .then(response => response.json())
        .catch(error => console.error(error))
}
//console.log("----------------",getCountriesForSpecificCurrency("cuc"));


// because one country can have multiple currencies such as Cuba, we want to range over them
async function getCountriesForCertainCurrencyCode(currencies) {

    let countriesResult = [];
    // console.log("enter here", currencies);
    for (const c of currencies) {
        // console.log("c=",c);
        let results = await getCountriesForSpecificCurrency(c);
        let countries = [];
        results.forEach((result) => {
            //  console.log(`${index + 1}. ${result.name}`);
            countries.push(result.name);

        })
        let currencyCountries = {
            currency: c,
            countries: countries
        }

        countriesResult.push(currencyCountries);

    }

    return countriesResult;
}



async function showCountries(code) {
    let response = await getCountry(code);
    let countryCurrencies = await getCurrencies(response);
    let result = await getCountriesForCertainCurrencyCode(countryCurrencies);
    printCountries(result);


}

function printCountries(countries) {
    countries.forEach((country, index) => {
        console.log(`${index + 1}. ${country.currency} : ${country.countries}`);
    });
}

btnLetterCode.addEventListener(`click`, function () {

    showCountries(letterCountryCodeInput.value);

})