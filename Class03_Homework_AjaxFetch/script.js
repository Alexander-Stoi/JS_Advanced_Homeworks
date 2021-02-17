//// Return and print every property with their values from 10 users

// function printAllUsers(response, printUsers) {
//     if (response !== undefined && response.length > 0) {
//         for (const user of response) {
//             printUsers.innerHTML += `<li>Id: ${user.id}, Name: ${user.name}, email: ${user.email}, Address: ${user.address}, Phone: ${user.phone}, Website: ${user.website}, Company: ${user.company}  </li>`
//         }
//     }
// }


// document.getElementById(`printBtn`).addEventListener(`click`, function () {

//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(result => {
//             let printUsers = document.getElementById(`printUsers`);
//             printAllUsers(result, printUsers);
//         })
//         .catch(error => console.log(error));

//     }, false)



// Show all albums that have "omnis" in their title

function printOmnis(response, album) {
    if (response !== undefined && response.length > 0) {

        for (const index of response) {
            let omnis = index.title;
            if (omnis.includes("omnis")) {
                console.log(`test--------------`);
                album.innerHTML += `<li>Album that contains omnis: no.${index.id}</li>`;
            }
        }
    }
}


document.getElementById(`showAlbums`).addEventListener(`click`, function () {

    fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(response => response.json())
        .then(result => {
            let albumsWithOmnis = document.getElementById(`albumsWithOmnis`);
            printOmnis(result, albumsWithOmnis);
        })
        .catch(error => console.log(error));


}, false)



//// Create new album


// function Address(street, suite, city, zipCode) {
//     if (street !== `` && suite !== `` && city !== `` && zipCode > 0) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipCode = zipCode;
//     }
// }

// function Geo(lat, ing) {
//     if (lat > 0 && ing > 0) {
//         this.lat = lat;
//         this.ing = ing;

//     }
// }

// function Company(companyName, catchPhrase, bs) {
//     if (companyName !== `` && catchPhrase !== `` && bs !== ``) {
//         this.companyName = companyName;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;

//     }
// }


// function createAlbum(userId, name, username, email, address, geo, phone, website, company) {
//     if (userId > 0 && username !== `` && name !== `` && address !== {} && geo !== {} && phone !== `` && website !== `` && company !== {}) {

//         fetch("https://jsonplaceholder.typicode.com/albums", {
//             method: `POST`,
//             body: JSON.stringify({
//                 userId: userId,
//                 name: name,
//                 username: username,
//                 email: email,
//                 address: address,
//                 geo: geo,
//                 phone: phone,
//                 website: website,
//                 company: company,
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             }

//         })
//             .then(response => response.json())
//             .then(function (convertedJson) {
//                 console.log("Successfully created album", convertedJson)
//             })
//             .catch(function (error) { console.error(error) });

//     }

// }

// document.getElementById(`createAlbumBtn`).addEventListener(`click`, function () {

//     let createUserId = document.getElementById(`createUserId`).value;
//     let createName = document.getElementById(`createName`).value;
//     let createUsername = document.getElementById(`createUsername`).value;
//     let createEmail = document.getElementById(`createEmail`).value;
//     let createStreet = document.getElementById(`createStreet`).value;
//     let createSuite = document.getElementById(`createSuite`).value;
//     let createCity = document.getElementById(`createCity`).value;
//     let createZipCode = document.getElementById(`createZipCode`).value;
//     let createLat = document.getElementById(`createLat`).value;
//     let createIng = document.getElementById(`createIng`).value;
//     let createPhone = document.getElementById(`createPhone`).value;
//     let createWebsite = document.getElementById(`createWebsite`).value;
//     let createCompanyName = document.getElementById(`createCompanyName`).value;
//     let createCatchPhrase = document.getElementById(`createCatchPhrase`).value;
//     let createBs = document.getElementById(`createBs`).value;

//     let address = new Address(createStreet, createSuite, createCity, createZipCode);
//     let geo = new Geo(createLat, createIng);
//     let company = new Company(createCompanyName, createCatchPhrase, createBs);

//     createAlbum(createUserId, createName, createUsername, createEmail, address, geo, createPhone, createWebsite, company);
//     console.log(address);
//     console.log(geo);
//     console.log(company);
// }, false);


//// Delete random TODO

// let deleteAlbumBtn = document.getElementById(`deleteAlbumBtn`);

// deleteAlbumBtn.addEventListener(`click`, function () {

//     let randomDeleteAlbum = Math.floor(Math.random() * 101);

//     fetch("https://jsonplaceholder.typicode.com/albums/${randomNumber}", {
//         method: "DELETE"
//     })
//         .then(response => response.json())
//         .then(deletedAlbum => console.log(`The radnomNumber is ${randomDeleteAlbum}, and will delete the post`, deletedAlbum))
//         .catch(error => console.error(error));

// })


