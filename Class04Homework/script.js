

// // 2. Write a function that will reverse a string as output (any string), using recursion e.g. Hello -> olleH

// function reverseString(word) {
//     // debugger

//     if (word === ``)
//         return ``;
//     else
//         return reverseString(word.substr(1)) + word.charAt(0);

// }

// console.log(reverseString(`Hello`));



// // 3.Write a function that will take two arguments. First argument should be a sentence, second one should be one word. Return how many times the word had appeared in that sentence. e.g appearance('This was a hot summer, and a very dry one', 'a') -> should return that 'a' was present 2 times.

// function wordInSentence(str, word) {
//     // debugger;
//     let newString = str.split(` `);
//     // console.log(newString);
//     counter = 0;
//     for (const index of newString) {
//         if (index === word)
//             counter++;
//     }
//     return console.log(`${word} was present ${counter} times`)
// }

// wordInSentence('This was a hot summer and a very dry one', `a`);



// 4. Using recursive function do the function that will calculate Fibonacci sequence for any number. fibonacciSequence(n) (where n is positive real number) and print the result. e.g fibonacciSequence(8) -> should return array of following numbers 0, 1, 1, 2, 3, 5, 8, 13, 21


// function fibonacciSequence(number){
//     if(number){
//         return number
//     }
// }return number + fibonacci(number - )

// function fibonacciSequence(number) {
//     if (number === 1) {
//         return [0, 1];
//     }
//     else {
//         let arr = fibonacciSequence(number - 1);
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//         return arr;
//     }
// };

// console.log(fibonacciSequence(8));



// Bonus.Write a function that will print table using Javascript arrow functions, the table should have x columns and y rows. The values for x and y are inserted by the user.

let table = document.getElementById(`table`);
let inputColumns = document.getElementById(`columns`);
let inputRows = document.getElementById(`rows`);
let btn = document.getElementById(`btn`);

let printTable = (numberRows, numberColumns, table) => {
    for (let i = 1; i <= numberRows; i++) {

        let numberRows = document.createElement(`tr`);
        table.appendChild(numberRows);

        for (let j = 1; j <= numberColumns; j++) {

            let numberColumns = document.createElement(`td`);
            numberRows.appendChild(numberColumns);
            numberColumns.innerText = `Row-${i} Column-${j}`
        }

    }

}

btn.addEventListener("click", function () {
    printTable(inputRows.value, inputColumns.value, table);
    inputRows.value = ``;
    inputColumns.value = ``;
});







