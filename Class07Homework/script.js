
let higherThan3Result = [];

let btnHigherThan3 = document.getElementById(`btnHigherThan3`);

btnHigherThan3.addEventListener(`click`, function () {

    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            // let higherThan3Result = document.getElementById(`higherThan3Result`);
            // printHigherThan3(result, higherThan3Result);
            result
                .filter(x => x.averageGrade > 3)
                .map(x => higherThan3Result.push(x));
            console.log(higherThan3Result);

        })
        .catch(error => console.error(error));

})


let gradeBetweenTwoAndFive = [];

let btnBetween2And5 = document.getElementById(`btnBetween2And5`);

btnBetween2And5.addEventListener(`click`, function () {

    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            // let higherThan3Result = document.getElementById(`higherThan3Result`);
            // printHigherThan3(result, higherThan3Result);
            result
                .filter(x => x.averageGrade > 2 && x.averageGrade < 5)
                .map(x => gradeBetweenTwoAndFive.push(x));
            console.log(gradeBetweenTwoAndFive);

        })
        .catch(error => console.error(error));

})


let femaleGrade5 = [];

document.getElementById(`btnFemaleGrade5`).addEventListener(`click`, function () {
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            // let higherThan3Result = document.getElementById(`higherThan3Result`);
            // printHigherThan3(result, higherThan3Result);
            result
                .filter(x => x.gender === `Female` && x.averageGrade === 5)
                .map(x => femaleGrade5.push(x));
            console.log(femaleGrade5);

        })
        .catch(error => console.error(error));



})


let maleStudentsFromSk = [];

document.getElementById(`btnMaleStudentsFromSkopje`).addEventListener(`click`, function () {
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            // let higherThan3Result = document.getElementById(`higherThan3Result`);
            // printHigherThan3(result, higherThan3Result);
            result
                .filter(x => x.gender === `Male` && x.city === `Skopje` && x.age > 18)
                .map(x => maleStudentsFromSk.push(`${x.firstName}  ${x.lastName}`));
            console.log(maleStudentsFromSk);

        })
        .catch(error => console.error(error));



})

let btnGradesFemalesOver24 = [];

document.getElementById(`btnGradesFemalesOver24`).addEventListener(`click`, function () {
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            result
                .filter(x => x.gender === `Female` && x.averageGrade > 2 && x.age > 24)
                .map(x => btnGradesFemalesOver24.push(x.averageGrade));
            console.log(btnGradesFemalesOver24);

        })
        .catch(error => console.error(error));


})

let btnMaleStudentsStartWithB = [];

document.getElementById(`btnMaleStudentsStartWithB`).addEventListener(`click`, function () {
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            result
                .filter(x => x.gender === `Male` && x.firstName.charAt(0) === `B` && x.averageGrade > 2)
                .map(x => btnMaleStudentsStartWithB.push(x));
            console.log(btnMaleStudentsStartWithB);

        })
        .catch(error => console.error(error));


})


let btnFemaleOver16 = [];

document.getElementById(`btnFemaleOver16`).addEventListener(`click`, function () {
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(response => response.json())
        .then(result => {
            result
                .filter(x => x.gender === `Female` && x.age > 16 && x.city === `Skopje` && (x.lastName.includes("i") || x.lastName.includes(`l`)))
                .map(x => btnFemaleOver16.push(x.averageGrade));
            console.log(btnFemaleOver16);

        })
        .catch(error => console.error(error));

})

function printMultiplyResult(number) {
    return number;
}

function multiplyNumbers(number1, number2) {
    let multiplyRes = number1 * number2;
    return multiplyRes;
}

let result = multiplyNumbers(5, 5);

// console.log(printMultiplyResult(result));


let printAllUser = [];



document.getElementById(`btnPrintAllUser`).addEventListener(`click`, function () {

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(result => {
            result.forEach(element => {
                printAllUser.push(element);
                // console.log(element);


            });
        })
        .catch(error => console.error(error))

}, false)

function resultFunction(array) {
    return array;
}

console.log(resultFunction(printAllUser));
// console.log(printAllUser);

