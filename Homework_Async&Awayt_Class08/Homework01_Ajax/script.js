// // Homework 01 Solution with Ajax

let regionalBlockInput = document.getElementById(`regionalBlockInput`);
let btnGetData = document.getElementById(`getData`);

const baseUrl = `https://restcountries.eu/rest/v2/regionalbloc/`;


function getRegionalBlock(code) {
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

function getCountriesWithAlternativeSpelling(documents) {
    // debugger;
    let countriesWithAltSpellings = documents.filter(x =>
        x.altSpellings.length > 1 && x.altSpellings.length < 4
        // console.log(x.altSpellings.length)
    );

    return new Promise((resolved, rejected) => {
        if (countriesWithAltSpellings.length === 0) {
            rejected(`There is no such countries`)
        }
        else {
            resolved(countriesWithAltSpellings)
        }
    })

}

function printDocuments(documents) {
    documents.forEach(x => console.log(`Country with altSpelling > 1 & < 4 :`, x.name))
}

function checkDocuments(documents) {
    if (!documents && typeof (documents) != `object`) {
        throw new Error(`Problem with the documents`)
    }

    if (documents.length === 0) {
        throw new Error(`There is no documents!`)
    }
}



btnGetData.addEventListener(`click`, function () {
    getRegionalBlock(regionalBlockInput.value)
        .then(data => {
            console.log(`We got the data`);
            checkDocuments(data);
            return getCountriesWithAlternativeSpelling(data);
        })
        .then(countriesWithAltSpellings => printDocuments(countriesWithAltSpellings))
        .catch(error => console.log(error))
        .finally(() => console.log(`Everything is ok`)); (regionalBlockInput.value);
})
