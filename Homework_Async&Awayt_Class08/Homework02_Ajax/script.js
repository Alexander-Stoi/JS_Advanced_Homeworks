// // Homework 02 Solution with Ajax
// ?? The user should insert ISO 3166-1 2-letter country code. From the response you get, log every country name that has the same currency as the country from the response. Use Promise with AJAX in every function that you want to receive some response from the api-endpoints. Also provide solution with fetch() when you send requests. The function that supposed to log every country name should be asynchronous and you shall await the call for specific country data.


let letterCountryCodeInput = document.getElementById(`letterCountryCodeInput`);
let btnLetterCode = document.getElementById(`getLetterCode`);
const baseUrl = `https://restcountries.eu/rest/v2/alpha/`;

// because for certain country we can have multiple currencies 
// we will return all the currencies that the country has 
// for example Cuba has 2 currencies



function getCountry(code) {
    return new Promise((resolved, rejected) => {
        $.ajax({
            url: baseUrl + code,
            success: (response) => {
                resolved(response);
            },
            error: (error) => { rejected(error); }
        })
    })
}


function getCurrencies(currenciesFromCountry) {

    let currencyArray = [];

    currenciesFromCountry.currencies.forEach(element => {
        currencyArray.push(element.code)
    })
    // console.log(`currencies from countries result`, currencyArray)
    return currencyArray;
}


const baseUrlCurrency = `https://restcountries.eu/rest/v2/currency/`;

function getCountriesWithSameCurrenciesFromApi(currency) {

    return new Promise((resolved, rejected) => {
        $.ajax({
            url: baseUrlCurrency + currency,
            success: (response) => {
                resolved(response);
            },
            error: (error) => { rejected(error); }
        })
    })

}


// because one country can have multiple currencies such as Cuba, we want to range over them

async function getCountriesResult(currencies) {

    let countriesResult = [];

    for (const c of currencies) {

        await getCountriesWithSameCurrenciesFromApi(c)
            .then(data => {
                let countries = [];
                data.forEach((result) => {
                    countries.push(result.name);
                })

                let currencyCountries = {
                    currency: c,
                    countries: countries
                }

                return countriesResult.push(currencyCountries);

            })
    }

    return countriesResult;
}



function checkDocuments(documents) {

    if (!documents && typeof (documents) != `object`) {
        throw new Error(`Problem with the documents`)
    }

    if (documents.length === 0) {
        throw new Error(`There is no documents!`)
    }
}


function printCountries(data) {
    data.forEach((country, index) => {
        console.log(`${index + 1}. Currency: ${country.currency}. Country: ${country.countries}`);
    });
}

async function showCountriesWithSameCurrency(code) {
    let getCountryResponse = await getCountry(code);
    let getCurrenciesFromCountries = getCurrencies(getCountryResponse);
    let getCountriesForSameCurr = await getCountriesResult(getCurrenciesFromCountries);
    return getCountriesForSameCurr;
}


btnLetterCode.addEventListener(`click`, function () {
    // debugger;
    showCountriesWithSameCurrency(letterCountryCodeInput.value)
        .then(data => {
            console.log(`We got the data`);
            checkDocuments(data);
            return data;

        })

        .then(data => printCountries(data))
        .catch(error => console.log(error))
        .finally(() => console.log(`Everything is ok`)); (letterCountryCodeInput.value)

})



































